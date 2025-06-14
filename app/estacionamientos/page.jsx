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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
               {ESTACIONAMIENTOS.map(estacionamiento => (
                <EstacionamientoItem key={estacionamiento.id} estacionamiento={estacionamiento} />
            ))} 
            </div>
            
        </div>
    </section>
    <FuenteInfo url='https://doctormora.gob.mx/2022/wp-content/uploads/2020/07/ESTACIONAMIENTOS-DOCTOR-MORA-22.pdf' />
              
  </>
    
  )
}

export default EstacionamientosPage