import ServiciosSeccionItem from "../ui/SeccionServiciosItem"
import ImgServicio1 from '@/public/images/imgservicio1.webp'
import ImgServicio2 from '@/public/images/imgservicio2.webp'
import ImgServicio3 from '@/public/images/imgservicio3.webp'
import ImgServicio4 from '@/public/images/imgservicio4.webp'



const SeccionServicios = () => {

    const SERVICIOS = [
        {
            imagenSrc: ImgServicio1,
            title: 'Religion'
        },
        {
            imagenSrc: ImgServicio2,
            title: 'Salud'
        },
        {
            imagenSrc: ImgServicio3,
            title: 'Educacion'
        },
        {
            imagenSrc: ImgServicio4,
            title: 'Gobierno'
        }
    ]


  return (
    <section className="py-14 w-full h-auto">
        <div className="contenedor">
           <h2 className="text-center font-medium text-lg mb-8">En Doctor Mora contamos con multiples Servicios</h2>
        <div className="grid grid-cols-2 gap-6 justify-items-center">
            {SERVICIOS.map((servicio, index) => (
                <ServiciosSeccionItem  key={index} servicio={servicio}/>
            ))}
        </div> 
        </div>
        
    </section>
  )
}
export default SeccionServicios