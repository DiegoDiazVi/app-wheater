export default function Square ({degrees, weather, hasIcon, description}) {
    return(
        <section className='square'>
            {degrees && <h2 className='degrees'>{`${degrees}° C`}</h2>}
            {weather && <p className='weather'>{weather}</p>}
            {description && <p className='weather'>{description}</p>}
            {hasIcon && <div className='icon'>Icono</div>}
        </section>
    )
}