import { IconPhone, IconPinned } from "@/helpers/icons"
import { formatearNumero } from "@/helpers/utilities"

function HotelItem({hotel}) {
  return (
    <div className="border border-gray-500/30 rounded px-3 py-5">
        <h3 className="font-semibold mb-2 text-lg text-slate-900">{hotel.nombre}</h3>
        <ul className="space-y-2 text-slate-800">
            <li className="flex items-center gap-2"><IconPinned /> {hotel.direccion}</li>
            <li className="flex items-center gap-2"><IconPhone className='size-5'/>{formatearNumero(hotel.telefono)}</li>
        </ul>
        <a href={hotel.maps} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-700 mt-3 block">Ver en Google Maps</a>
    </div>
  )
}

export default HotelItem