import { useEffect, useState } from 'react'
import Square from './components/Square'
import './App.css'
import { useGetLocation } from './hooks/useGetLocation';

function App() {
  const [infoWeather, setInfoWeather] = useState([]);
  const {infoLocation} = useGetLocation();
  console.log(infoLocation)



  return (
    <main className='weather-container'>
      <Square degrees={18} weather={'Sunnny'} hasIcon/>
      <Square degrees={18} weather={'Sunnny'} hasIcon/>
      <Square degrees={18} weather={'Sunnny'} hasIcon/>
    </main>
  )
}

export default App
