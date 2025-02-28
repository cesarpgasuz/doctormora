import Link from "next/link"
import Image from "next/image"
import Imagen1 from '@/public/images/imgfiesta1.png'
import Imagen2 from '@/public/images/imgfiesta2.png'
import Imagen3 from '@/public/images/imgfiesta3.png'

const FiestaYTradiciones = () => {

  const parrafo = 'Embárcate en una experiencia única explorando las vibrantes fiestas y tradiciones de Doctor Mora. Sumérgete en la rica herencia cultural, desde coloridos eventos festivos hasta arraigadas celebraciones locales. ¡Ven y sé parte de la magia de Doctor Mora!'


  return (
    <section className="py-14 w-full h-auto">
      <div className="contenedor">
        <div className="m:w-1/2">
          <div className="flex gap-4 flex-wrap">
            <Image src={Imagen1} width={256} height={256} className="size-24" alt="Fiesta y Tradiciones" />
            <Image src={Imagen2} width={256} height={256} className="size-24" alt="Fiesta y Tradiciones" />
            <Image src={Imagen3} width={256} height={256} className="size-24" alt="Fiesta y Tradiciones" />
          </div>

        </div>
        <div className="m:w-1/2">
          <h2 className="text-center mt-7 text-2xl font-bold">Fiestas y Tradiciones</h2>
          <p className="mt-6 leading-8">{parrafo}</p>

          <Link href='/fiestas-y-tradiciones' className="mt-12 block w-full text-center font-medium bg-teal-500 text-teal-900 py-4 rounded">Más Información </Link>
        </div>
      </div>

    </section>
  )
}
export default FiestaYTradiciones