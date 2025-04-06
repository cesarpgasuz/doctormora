import Link from 'next/link'
import TitlesPages from '@/components/ui/TitlesPages'
import useTitle from '../utilities/useTitle'

export const metadata = {
  title: 'Turismo | Doctor Mora, Guanajuato',
  description: 'Descubre los mejores lugares turísticos de Doctor Mora, Guanajuato. Encuentra opciones para disfrutar de la gastronomía local y nacional.',
  keywords: 'turismo, doctor mora, guanajuato, turismo, lugares turísticos',
}



const TurismoPage = () => {
  const info = useTitle(7)
  return (
    <section className="w-full h-auto py-6">
      <div className="contenedor">
        <TitlesPages {...info} />
      </div>
    </section>
  )
}

export default TurismoPage