import { useEffect, useState } from 'react'
import { useGetLocation } from './hooks/useGetLocation';
import { API_KEY, URL_API_WEATHER } from './utils/constants'
import Square from './components/Square'
import './App.css'

function App() {
  const [infoWeather, setInfoWeather] = useState([]);
  const {infoLocation} = useGetLocation();

  useEffect( () => {
    const { latitude, longitude} = infoLocation
    if (!latitude && !latitude) return
    const queryParams = new URLSearchParams({
      lat: latitude,
      lon: longitude,
      lang: 'es',
      appid: API_KEY
    });

    const fetchWeather = async () => {
      try {
        const response  = await fetch(`${URL_API_WEATHER}?${queryParams}`)
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchWeather()
  }, [infoLocation])



  return (
    <main className='weather-container'>
      <Square degrees={18} weather={'Sunnny'} hasIcon/>
      <Square degrees={18} weather={'Sunnny'} hasIcon/>
      <Square degrees={18} weather={'Sunnny'} hasIcon/>
    </main>
  )
}

export default App
