import TitlesPages from "@/components/ui/TitlesPages"
import useTitle from "../utilities/useTitle"

export const metadata = {
  title: "Restaurantes | Doctor Mora, Guanajuato",
  description: "Descubre los mejores restaurantes de Doctor Mora, Guanajuato. Encuentra opciones para disfrutar de la gastronomía local y nacional.",
  keywords: "restaurantes, doctor mora, guanajuato, gastronomía, turismo",
}



const RestaurantesPage = () => {

  const info = useTitle(10)

  return (
    <section className="w-full h-auto py-6">
      <div className="contenedor">
        <TitlesPages {...info} />
      </div>
    </section>
    
  )
}

export default RestaurantesPage