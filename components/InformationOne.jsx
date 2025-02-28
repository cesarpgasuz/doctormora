import InformationOneItem from './InformationOneItem'
import ImageCultura from '@/public/images/cultura.jpg'
import ImageHotel from '@/public/images/hotel.svg'
import ImageRestaurante from '@/public/images/restaurante.svg'
import ImageServicios from '@/public/images/servicios.svg'
import styles from '@/styles/InformationOne.module.css'


const InformationOne = () => {
    return (
        <section className={`${styles.informationOne} py-14`}>
            <div className="contenedor">
                <p className='text-lg mb-10 font-medium'>En Doctor Mora encuentra todo lo que buscas.</p>
                <div className={`${styles.cards} grid gap-8`}>
                    <InformationOneItem
                        imagenSrc={ImageCultura}
                        title='Lugares Turisticos'
                        
                    />
                    <InformationOneItem
                        imagenSrc={ImageHotel}
                        title='Hoteles, Posadas'
                        clases='#23AAE6'
                    />
                    <InformationOneItem
                        imagenSrc={ImageRestaurante}
                        title='Restaurantes, Fondas'
                        clases='#FF3D7D'
                    />
                    <InformationOneItem
                        imagenSrc={ImageServicios}
                        title='Servicios'
                        clases='#23D1D0'
                    />
                </div>
            </div>

        </section>
    )
}
export default InformationOne