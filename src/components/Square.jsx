export default function Square ({degrees, weather, hasIcon}) {
    return(
        <section className='square'>
            {degrees && <h2 className='degrees'>{`${degrees} C`}</h2>}
            {weather && <p className='weather'>{weather}</p>}
            {hasIcon && <div className='icon'>Icono</div>}
        </section>
    )
}