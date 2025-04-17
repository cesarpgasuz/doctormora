import Link from "next/link"
import TitlesPages from "@/components/ui/TitlesPages"
import useTitle from "../utilities/useTitle"

export const metadata = {
  title: "Hoteles | Doctor Mora, Guanajuato",
  description: "Descubre los mejores hoteles de Doctor Mora, Guanajuato. Encuentra opciones para disfrutar de la gastronomía local y nacional.",
  keywords: ["hoteles", "doctor mora", "doctor mora guanajuato", "hoteles doctor mora", "hospedaje doctor mora", "posadas doctor mora", "hoteles doctor mora guanajuato"],
}


const HotelesPage = () => {

  const info = useTitle(8)

  return (
    <section className="w-full h-auto py-6">
      <div className="contenedor">
        <TitlesPages {...info} />
      </div>
    </section>

  )
}

export default HotelesPage