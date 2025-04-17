

function EstacionamientoItem({estacionamiento}) {

    const nombre = estacionamiento.nombre ? estacionamiento.nombre : `Estacionamiento - ${estacionamiento.id}`

    const Title = ({children}) => <h3 className="font-bold mb-2">{children}</h3>

  return (
            <div className='border border-gray-500/30 rounded px-3 py-5 flex flex-col'>
                    <div>
                      <Title>{nombre}</Title>
                    <ul>
                        <li className="text-sm"><span className="text-slate-600">Direccion:</span> {estacionamiento.direccion}</li>
                        
                        {estacionamiento.distancia && estacionamiento.distancia.length > 0 && (
                            <div className="mt-2 mb-5">
                                <span className="text-slate-600 text-sm mb-1 block">Distancias:</span>
                                <ul className='list-disc ml-5'>
                                    {estacionamiento.distancia.map((distancia, index) => (
                                        <li key={index} className="text-sm leading-6">{distancia.nombre}: <span>{distancia.distancia}</span></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </ul> 
                    </div>
                    <div className="mt-auto flex justify-end">
                      {estacionamiento.url && <a href={estacionamiento.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-700">Ver en Google Maps</a>}
                    </div>
                    
                </div>
  )
}

export default EstacionamientoItem