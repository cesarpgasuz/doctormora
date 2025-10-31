import { fiestasPatronales } from "@/helpers/data"
import TitlesPages from "@/components/ui/TitlesPages"
import useTitle from "../utilities/useTitle"

export const metadata = {
  title: "Fiestas y Tradiciones | Doctor Mora, Guanajuato",
  description: "Descubre las vibrantes fiestas y tradiciones de Doctor Mora, Guanajuato",
  keywords: ["fiestas", "tradiciones", "doctor mora", "guanajuato", "fiestas doctor mora", "tradiciones doctor mora", "cultura doctor mora"],
}

const FiestasyTradicionesPage = () => {

  const info = useTitle(12);

  return (

    <>
      <section className="w-full h-auto py-6">
        <div className="contenedor">
          <TitlesPages {...info} />
        </div>
      </section>

      <section className="w-full h-auto py-6">
        <div className="contenedor">
          <div className="flex flex-col gap-5">
            {fiestasPatronales.map((fiesta, index) => (

              
            <div key={index} className="bg-slate-400/20"> 
                <h3 className="text-3xl">{fiesta.mes}</h3>

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {fiesta.celebraciones.map((celebracion, idx) => (
                  <div key={idx} className="bg-red-200">
                    <h4>{celebracion.comunidad}</h4>
                    <ul>
                      <li>Celebracion a: {celebracion.santo}</li>
                      <li>Fecha: {celebracion.fecha ? celebracion.fecha : `Celebración en ${fiesta.mes}`}</li>
                    </ul>
                  </div>
                ))}
                </div>

                
            </div>


          ))}
          </div>
          


        </div>
      </section>
    </>


  )
}
export default FiestasyTradicionesPage