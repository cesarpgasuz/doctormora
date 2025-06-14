import { ENLACES } from '@/helpers/data'
import Image from 'next/image'
import ImageGirl from '@/public/images/girl.png'

const InformationFour = () => {

  return (
    <section className='py-14 w-full h-auto'>
      <div className="contenedor">
        <div className="m:w-1/2">
          <h4 className='text-center mb-8 font-medium'>La Informacion que necesitas a un click de Distancia</h4>
          <div className='flex flex-wrap gap-4 justify-center'>
            {ENLACES.map(enlace => (
              <a href={enlace.url} key={enlace.id} className='bg-gray-200 py-2 px-5 rounded-full text-sm'>{enlace.title}</a>
            ))}
          </div>
        </div>
        <div className="m:w-1/2 flex justify-center mt-7"><Image src={ImageGirl} width={384} height={417} className='w-[200px] h-auto' alt='Imagen de una joven usando su telefono' /></div>
      </div>
    </section >
  )
}
export default InformationFour