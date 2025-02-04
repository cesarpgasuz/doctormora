import InformationOneItem from './InformationOneItem'

import ImageCultura from '@/public/images/cultura.jpg'
import ImageHotel from '@/public/images/hotel.svg'
import ImageRestaurante from '@/public/images/restaurante.svg'
import ImageServicios from '@/public/images/servicios.svg'


const InformationOne = () => {
  return (
    <section>
        <p>Tenemos todo lo que buscas</p>
        <div>
            <InformationOneItem 
                imagenSrc={ImageCultura}
                title='Lugares Turisticos'
            />
            <InformationOneItem 
                imagenSrc={ImageHotel}
                title='Hoteles, Posadas'
            />
            <InformationOneItem 
                imagenSrc={ImageRestaurante}
                title='Restaurantes, Fondas'
            />
            <InformationOneItem 
                imagenSrc={ImageServicios}
                title='Servicios'
            />
        </div>
    </section>
  )
}
export default InformationOne