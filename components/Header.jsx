import Image from 'next/image'

import ImageIglesia from '@/public/images/iglesia_1.svg'
import ImageVaca from '@/public/images/cow_1.webp'
import ImageAgave from '@/public/images/agave_1.webp'
import ImagePulque from '@/public/images/pulque_1.webp'


const Header = () => {
  return (

  
    <header className='bg-gradient-to-br from-d-azul to-d-verde pt-12 pb-12 h-auto'>
      <div className="contenedor">
        <div className="text-center m:w-1/2">
          <span>Bienvenidos a</span>
          <h1 className='flex flex-col'><span className='text-4xl font-bold'>Doctor Mora</span> <span>Guanajuato</span></h1>
          <p className='mt-6 mb-6 leading-7'>Descubre la esencia de Doctor Mora en Guanajuato, donde historia y modernidad se entrelazan. Explora su legado desde la Gran Chichimeca hasta la vibrante villa de 1865. ¡Bienvenido a un viaje único en nuestra guía turística!</p>
      </div>
      <div className='flex py-6 justify-center m:w-1/2'>
          <Image src={ImageIglesia} width='72' height='72' alt='imagen de una iglesia' className='rotate-6 bg-white rounded-md p-2 size-[72px] border-2 border-emerald-400' />
          <Image src={ImageVaca} width='72' height='72' alt='imagen de una vaca' className='rotate-[-6deg] bg-white rounded-md p-2 size-[72px] border-2 border-pink-400' />
          <Image src={ImageAgave} width='72' height='72' alt='imagen de un agave' className='rotate-6 bg-white rounded-md p-2 size-[72px] border-2 border-green-400' />
          <Image src={ImagePulque} width='72' height='72' alt='imagen de un jarro de pulque' className='rotate-[-6deg] bg-white rounded-md p-2 size-[72px] border-2 border-amber-400' />
      </div>
      </div>
      
    </header>


  )
}
export default Header