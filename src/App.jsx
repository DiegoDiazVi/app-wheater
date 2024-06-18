import { useEffect, useState } from 'react'
import Square from './components/Square'
import './App.css'
import { getLocation } from './utils/getLocation';

function App() {
  const [infoWeather, setInfoWeather] = useState([]);
  const [infoLocation, setInfoLocation] = useState({});

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getLocation()
        setInfoLocation(location)
      } catch (error) {
        console.warn(error)
      }
    }
    fetchLocation()
  }, []);

  return (
    <main className='weather-container'>
      <Square degrees={18} weather={'Sunnny'} hasIcon/>
      <Square degrees={18} weather={'Sunnny'} hasIcon/>
      <Square degrees={18} weather={'Sunnny'} hasIcon/>
    </main>
  )
}

export default App
