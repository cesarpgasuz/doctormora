import TitlesPages from "@/components/ui/TitlesPages"
import useTitle from "../utilities/useTitle"
import { HOTELES } from "@/helpers/data"
import HotelItem from "@/components/ui/HotelItem"
import FuenteInfo from "@/components/ui/FuenteInfo"

export const metadata = {
  title: "Hoteles | Doctor Mora, Guanajuato",
  description: "Descubre los mejores hoteles de Doctor Mora, Guanajuato. Encuentra opciones para disfrutar de la gastronomía local y nacional.",
  keywords: ["hoteles", "doctor mora", "doctor mora guanajuato", "hoteles doctor mora", "hospedaje doctor mora", "posadas doctor mora", "hoteles doctor mora guanajuato"],
}


const HotelesPage = () => {

  const info = useTitle(8)

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
            {HOTELES.map(hotel => (
              <HotelItem key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>
      <FuenteInfo url='https://www.facebook.com/Turismodoctormora/posts/pfbid0FgxDkwkKnkXMHZsyhcpNjkDTUmXcCh7RzfhGaWXpPBWwMaLkTtLBYBqoaqDWFZaml' />
    </>




  )
}

export default HotelesPage