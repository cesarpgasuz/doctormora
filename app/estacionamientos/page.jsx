import TitlesPages from "@/components/ui/TitlesPages"
import useTitle from "../utilities/useTitle"
import { ESTACIONAMIENTOS } from "@/helpers/data"
import EstacionamientoItem from "@/components/ui/EstacionamientoItem"

export const metadata = {
  title: 'Estacionamientos | Doctor Mora, Guanajuato',
  description: 'Doctor Mora, Guanajuato. Estacionamientos disponibles para los visitantes.',
  keywords: 'estacionamientos, doctor mora, guanajuato, servicios, turismo',
  openGraph: {
    title: 'Estacionamientos | Doctor Mora',
    description: 'Doctor Mora, Guanajuato. Estacionamientos disponibles para los visitantes.',
    url: 'https://www.doctormora.com/estacionamientos',
    siteName: 'Doctor Mora',
  },
}


function EstacionamientosPage() {
    const info = useTitle(9)
  return (
  <>
  
  <section className="w-full h-auto py-6">
        <div className="contenedor">
        <TitlesPages {...info} />
        </div>
    </section>
    <section className="w-full h-auto py-14">
        <div className="contenedor">
            <div className="grid grid-cols-4 gap-6">
               {ESTACIONAMIENTOS.map(estacionamiento => (
                <EstacionamientoItem key={estacionamiento.id} estacionamiento={estacionamiento} />
            ))} 
            </div>
            
        </div>
    </section>
  </>
    
  )
}

export default EstacionamientosPage