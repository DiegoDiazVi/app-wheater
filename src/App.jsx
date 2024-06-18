import { useGetWeather } from './hooks/useGetWeather';
import { isObjectEmpty } from './utils/validateObject';
import Square from './components/Square'
import './App.css'

function App() {
  const {infoWeather} = useGetWeather();

  console.log(infoWeather)
  return (
    <main className='weather-container'>
      {!isObjectEmpty(infoWeather) && <Square degrees={infoWeather.temperature} weather={infoWeather.weather} hasIcon/>}
      {!isObjectEmpty(infoWeather) && <Square degrees={infoWeather.temperature} weather={infoWeather.weather} hasIcon/>}
      {!isObjectEmpty(infoWeather) && <Square degrees={infoWeather.temperature} weather={infoWeather.weather} hasIcon/>}
    </main>
  )
}

export default App
