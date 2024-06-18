export default function Square ({ degrees, weather, hasIcon, description, neighborhood, sunset }) {
    return(
        <section className='square'>
            {neighborhood && <p className='neighborhood'>{neighborhood}</p>}
            {degrees && <h2 className='degrees'>{`${degrees}° C`}</h2>}
            {weather && <p className='weather'>{weather}</p>}
            {description && <p className='degrees'>{description}</p>}
            {sunset && <p className='weather'>{`Atardecer: ${sunset}`}</p>}
            {hasIcon && <div className='icon'>Icono</div>}
        </section>
    )
}