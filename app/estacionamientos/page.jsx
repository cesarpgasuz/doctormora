import dynamic from 'next/dynamic'
import TitlesPages from "@/components/ui/TitlesPages"
import useTitle from "../utilities/useTitle"
import { ESTACIONAMIENTOS } from "@/helpers/data"
import EstacionamientoItem from "@/components/ui/EstacionamientoItem"
import FuenteInfo from "@/components/ui/FuenteInfo"

export const metadata = {
  title: 'Estacionamientos | Doctor Mora, Guanajuato',
  description: 'Doctor Mora, Guanajuato. Estacionamientos disponibles para los visitantes.',
  keywords: ['estacionamientos', 'doctor mora', 'estacionamientos doctor mora', 'estacionamientos doctor mora guanajuato', 'estacionamientos guanajuato', 'estacionamientos en doctor mora', 'estacionamientos en guanajuato'],
//   openGraph: {
//     title: 'Estacionamientos | Doctor Mora',
//     description: 'Doctor Mora, Guanajuato. Estacionamientos disponibles para los visitantes.',
//     url: 'https://www.doctormora.com/estacionamientos',
//     siteName: 'Doctor Mora',
//   },
}

// 🔥 Import dinámico del mapa (sin SSR)
const MapaEstacionamientos = dynamic(
  () => import('@/components/sections/MapaEstacionamientos'),
  { ssr: false }
)


function EstacionamientosPage() {
  const info = useTitle(9)

  return (
    <>
      <section className="w-full h-auto py-6">
        <div className="contenedor">
          <TitlesPages {...info} />
        </div>
      </section>

      {/* Grid: listado + mapa */}
      <section className="w-full h-auto py-14">
        <div className="contenedor grid lg:grid-cols-2 gap-6">
          <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2">
            {ESTACIONAMIENTOS.map((estacionamiento) => (
              <EstacionamientoItem key={estacionamiento.id} estacionamiento={estacionamiento} />
            ))}
          </div>

          <div>
            <MapaEstacionamientos estacionamientos={ESTACIONAMIENTOS} />
          </div>
        </div>
      </section>

      <FuenteInfo url="https://doctormora.gob.mx/2022/wp-content/uploads/2020/07/ESTACIONAMIENTOS-DOCTOR-MORA-22.pdf" />
    </>
  )
}

export default EstacionamientosPage