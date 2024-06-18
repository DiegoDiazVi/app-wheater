import { useGetWeather } from './hooks/useGetWeather';
import { isObjectEmpty } from './utils/validateObject';
import Square from './components/Square'
import './App.css'

function App() {
  const {infoWeather} = useGetWeather();
  const {weather, description, temperature, name, sunset} = infoWeather
  return (
    <main className='weather-container'>
      {!isObjectEmpty(infoWeather) && <Square degrees={temperature} hasIcon/>}
      {!isObjectEmpty(infoWeather) && <Square neighborhood={name} weather={weather} hasIcon={false}/>}
      {!isObjectEmpty(infoWeather) && <Square description={description}  sunset={sunset}/>}
    </main>
  )
}

export default App
