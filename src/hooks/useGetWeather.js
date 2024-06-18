import { useState, useEffect } from "react";
import { useGetLocation } from "./useGetLocation";
import { API_KEY, URL_API_WEATHER } from '../utils/constants'

export const useGetWeather = () => {
    const {infoLocation} = useGetLocation();
    const [infoWeather, setInfoWeather] = useState({});

    useEffect( () => {
        if (!infoLocation) return
        const { latitude, longitude} = infoLocation
        if (!latitude && !latitude) return
        const queryParams = new URLSearchParams({
        lat: latitude,
        lon: longitude,
        lang: 'es',
        appid: API_KEY,
        units: 'metric'
        });

        const fetchWeather = async () => {
        try {
            const response  = await fetch(`${URL_API_WEATHER}?${queryParams}`)
            const data = await response.json()
            let { weather: [
            {
                main: weather,
                description
            }
            ], main: {
            temp: temperature
            },
            sys: {
                sunset
            },
            name} = data
            temperature = temperature.toFixed(0);
            sunset = new Date(sunset * 1000).toLocaleTimeString('es-ES')
            setInfoWeather({weather, description, temperature, name, sunset})
        } catch (error) {
            console.error(error)
        }
        }

        fetchWeather()
    }, [infoLocation])

    return {infoWeather}
}