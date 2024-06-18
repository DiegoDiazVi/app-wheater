export default function Square ({ degrees, weather, hasIcon, description, neighborhood, sunset }) {
    const icons = {
        Sun: '☀️',
        Clouds: '☁️',
        Rain: '🌧️',
        Snow: '❄️',
        Storm: '⛈️',
        Mist: '🌫️'
    }
    return(
        <section className='square'>
            {degrees && <h2 className='degrees'>{`${degrees}° C`}</h2>}
            {neighborhood && <p className='weather'>{neighborhood}</p>}
            {weather && <p className='degrees'>{weather}</p>}
            {description && <p className='degrees'>{description}</p>}
            {sunset && <p className='weather'>{`Atardecer: ${sunset}`}</p>}
            {hasIcon && <div className='icon'>{icons[weather]}</div>}
        </section>
    )
}