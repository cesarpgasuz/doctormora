'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// 🧭 Corregir ícono de Leaflet (bug común en React)
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function MapaEstacionamientos({ estacionamientos }) {
  const centro = [21.1415, -100.319] // Centro aproximado de Doctor Mora

  return (
    <MapContainer
      center={centro}
      zoom={16}
      scrollWheelZoom={true}
      className="h-[500px] w-full rounded-lg shadow"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {estacionamientos.map((e) =>
        e.coords ? (
          <Marker key={e.id} position={e.coords}>
            <Popup>
              <strong>{e.nombre || `Estacionamiento ${e.id}`}</strong>
              <br />
              {e.direccion}
              <br />
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Ver en Google Maps
              </a>
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  )
}

export default MapaEstacionamientos
