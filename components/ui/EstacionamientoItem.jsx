

function EstacionamientoItem({estacionamiento}) {

    const nombre = estacionamiento.nombre ? estacionamiento.nombre : `Estacionamiento - ${estacionamiento.id}`

    const Title = ({children}) => <h3 className="font-bold mb-2">{children}</h3>

  return (
            <div className='border border-gray-500/30 rounded px-3 py-2'>
                    <Title>{nombre}</Title>
                    <ul>
                        <li className="text-sm"><span className="text-slate-600">Direccion:</span> {estacionamiento.direccion}</li>
                    </ul> 
                    
                </div>
  )
}

export default EstacionamientoItem