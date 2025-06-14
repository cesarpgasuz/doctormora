import Link from 'next/link'
import TitlesPages from '@/components/ui/TitlesPages'
import useTitle from '../utilities/useTitle'
import { LUGARESTURISTICOS } from '@/helpers/data'
import FuenteInfo from '@/components/ui/FuenteInfo'

export const metadata = {
  title: 'Turismo | Doctor Mora, Guanajuato',
  description: 'Descubre los mejores lugares turísticos de Doctor Mora, Guanajuato. Encuentra opciones para disfrutar de la gastronomía local y nacional.',
  keywords: ['turismo doctor mora', 'doctor mora guanajuato', 'turismo doctor mora guanajuato', 'lugares turísticos doctor mora', 'lugares turísticos doctor mora guanajuato',]
}



const TurismoPage = () => {
  const info = useTitle(7)

  return (
    <>
      <section className="w-full h-auto py-6">
        <div className="contenedor">
          <TitlesPages {...info} />
        </div>
      </section>
      <section className='w-full h-auto py-6'>
        <div className="contenedor grid gap-12">
            {LUGARESTURISTICOS.map(lugar => (

              <div key={lugar.id}>
                <h2 className='font-bold text-xl mb-4 text-slate-900'>{lugar.nombre}</h2>
                <p className='leading-9 text-slate-800'>{lugar.texto}</p>
              </div>

            ))}
        </div>
      </section>
      <FuenteInfo url='https://periodicocorreo.com.mx/municipios/2025/apr/05/ya-conoces-doctor-mora-estos-son-los-mejores-lugares-para-visitar-en-este-pintoresco-municipio-124826.html'/>
    </>

  )
}

export default TurismoPage