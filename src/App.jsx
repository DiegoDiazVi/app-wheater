import { useGetWeather } from './hooks/useGetWeather';
import { isObjectEmpty } from './utils/validateObject';
import Square from './components/Square'
import './App.css'

function App() {
  const {infoWeather} = useGetWeather();
  const {weather, description, temperature, name, sunset} = infoWeather
  return (
    <main className='weather-container'>
      {!isObjectEmpty(infoWeather) && <Square degrees={temperature} neighborhood={name} hasIcon={false}/>}
      {!isObjectEmpty(infoWeather) && <Square weather={weather} hasIcon/>}
      {!isObjectEmpty(infoWeather) && <Square description={description}  sunset={sunset} hasIcon={false}/>}
    </main>
  )
}

export default App
