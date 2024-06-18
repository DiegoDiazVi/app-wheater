import { useState, useEffect } from "react";
import { useGetLocation } from "./useGetLocation";
import { API_KEY, URL_API_WEATHER } from '../utils/constants'

/**
 * Custom hook to fetch weather information based on user's location.
 * @returns {Object} An object containing the weather information.
 */
export const useGetWeather = () => {
    const {infoLocation} = useGetLocation();
    const [infoWeather, setInfoWeather] = useState({});

    useEffect( () => {
        if (!infoLocation) return
        const { latitude, longitude} = infoLocation
        if (!latitude &&  !longitude) return
        const queryParams = new URLSearchParams({
            lat: latitude,
            lon: longitude,
            lang: 'es',
            appid: API_KEY,
            units: 'metric'
        });

        /**
         * Fetches weather data from the API and updates the state with the retrieved information.
         * @returns {void}
         */
        const fetchWeather = async () => {
            try {
                const response  = await fetch(`${URL_API_WEATHER}?${queryParams}`)
                const data = await response.json();

                const {
                    weather: [{ main: weather, description }],
                    main: { temp: temperature },
                    sys: { sunset },
                    name
                } = data

                const formattedTemperature = temperature.toFixed(0);
                const formattedSunset = new Date(sunset * 1000).toLocaleTimeString('es-ES');

                setInfoWeather({weather, description, temperature: formattedTemperature, name, sunset: formattedSunset})
            } catch (error) {
                console.error(error)
            }
        }

        fetchWeather()
    }, [infoLocation])

    return {infoWeather}
}