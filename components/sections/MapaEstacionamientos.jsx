'use client'

import { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import EstacionamientoItem from '../ui/EstacionamientoItem'

// 🔧 Fix de íconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export default function MapaEstacionamientos({ estacionamientos }) {
    const [activeId, setActiveId] = useState(null)
    const markersRef = useRef({})

    // Función para abrir popup desde el listado
    const handleClickItem = (id) => {
        setActiveId(id)
        const marker = markersRef.current[id]
        if (marker) marker.openPopup()
    }

    // Coordenadas de Doctor Mora
    const centro = [21.1419450, -100.3198580]

    return (
        <>
            {/* 🟢 LISTADO */}
            <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2">
                {estacionamientos.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleClickItem(item.id)}
                        className={`block w-full text-left border rounded-lg p-3 transition-colors ${activeId === item.id
                                ? 'bg-green-100 border-green-500'
                                : 'hover:bg-gray-100 border-gray-200'
                            }`}
                    >
                        <EstacionamientoItem estacionamiento={item} />
                    </button>
                ))}
            </div>

            {/* 🗺️ MAPA */}
            <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-md">
                <MapContainer center={centro} zoom={16} scrollWheelZoom={false} className="w-full h-full z-0">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {estacionamientos.map((item) => {
                        // 🧭 Extraer coordenadas desde la URL
                        const match = item.url.match(/(-?\d+\.\d+),(-?\d+\.\d+)/)
                        const position = match ? [parseFloat(match[1]), parseFloat(match[2])] : null

                        if (!position) return null // evitar errores si la URL no tiene coords

                        return (
                            <Marker
                                key={item.id}
                                position={position}
                                eventHandlers={{
                                    click: () => setActiveId(item.id),
                                }}
                                ref={(ref) => (markersRef.current[item.id] = ref)}
                            >
                                <Popup>
                                    <strong>{item.nombre || `Estacionamiento ${item.id}`}</strong><br />
                                    {item.direccion}
                                </Popup>
                            </Marker>
                        )
                    })}
                </MapContainer>
            </div>
        </>
    )
}
