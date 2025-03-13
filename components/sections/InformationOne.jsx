import { PRINCIPALLINKS } from '@/helpers/data'
import InformationOneItem from '../ui/InformationOneItem'
// import ImageCultura from '@/public/images/cultura.jpg'
// import ImageHotel from '@/public/images/hotel.svg'
// import ImageRestaurante from '@/public/images/restaurante.svg'
// import ImageServicios from '@/public/images/servicios.svg'
import styles from '@/styles/InformationOne.module.css'


const InformationOne = () => {
    return (
        <section className={`${styles.informationOne} py-20`}>
            <div className="contenedor">
                <p className='text-lg mb-10 font-medium'>En Doctor Mora encuentra todo lo que buscas.</p>
                <div className={`${styles.cards} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>

                    {PRINCIPALLINKS.map(principal => (
                        <InformationOneItem 
                            key={principal.id}
                            principal={principal}
                        />
                    ))}

                    {/* <InformationOneItem
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
                    /> */}
                </div>
            </div>

        </section>
    )
}
export default InformationOne