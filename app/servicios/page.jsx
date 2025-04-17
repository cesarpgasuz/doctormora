import Link from "next/link"
import TitlesPages from "@/components/ui/TitlesPages"
import useTitle from "../utilities/useTitle"

export const metadata = {
  title: "Servicios | Doctor Mora, Guanajuato",
  description: "Descubre los mejores servicios de Doctor Mora, Guanajuato. Encuentra opciones para disfrutar de la gastronomía local y nacional.",
  keywords: ["servicios doctor mora", "servicios doctor mora guanajuato"],
}


const ServiciosPage = () => {
  const info = useTitle(11)
  return (
    <section className="w-full h-auto py-6">
      <div className="contenedor">
        <TitlesPages {...info} />
      </div>
    </section>
  )
}

export default ServiciosPage