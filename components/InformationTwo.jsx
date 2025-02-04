import Link from "next/link"


const InformationTwo = () => {
  return (
    <section>
        <div className="w-1/2">
            imagenes
        </div>
        <div className="w-1/2">
            <h2>Fiestas y Tradiciones</h2>
            <p>Embárcate en una experiencia única explorando las vibrantes fiestas y tradiciones de Doctor Mora, Guanajuato. Sumérgete en la rica herencia cultural, desde coloridos eventos festivos hasta arraigadas celebraciones locales. Disfruta de la hospitalidad de la comunidad y celebra junto a nosotros la vida y la historia de este encantador rincón. ¡Ven y sé parte de la magia de Doctor Mora!</p>
        
            <Link href='/fiestas-y-tradiciones'> Mas informacion </Link>
        </div>
    </section>
  )
}
export default InformationTwo