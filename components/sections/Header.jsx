import Image from 'next/image'

import ImageIglesia from '@/public/images/iglesia_1.svg'
import ImageVaca from '@/public/images/cow_1.webp'
import ImageAgave from '@/public/images/agave_1.webp'
import ImagePulque from '@/public/images/pulque_1.webp'
import styles from '@/styles/Header.module.css'

const Header = () => {
  return (

  
    <header className='bg-gradient-to-br from-d-azul to-d-verde pt-12 pb-12 h-auto lg:min-h-[600px]'>
      <div className="contenedor lg:flex lg:items-center">
        <div className="text-center lg:w-1/2 lg:text-left">
          <span>Bienvenidos a</span>
          <h1 className='flex flex-col lg:flex-row lg:items-end lg:gap-2'><span className='text-4xl font-bold'>Doctor Mora</span> <span>Guanajuato</span></h1>
          <p className='mt-6 mb-6 leading-7'>Adéntrate en el corazón de Guanajuato y descubre un lugar donde la historia y las tradiciones se mantienen vivas. Explora sus calles, conoce su patrimonio cultural y déjate envolver por la calidez de su gente.</p>
      </div>
      <div className={`flex py-6 justify-center lg:w-1/2 lg:block lg:relative ${styles.imagenes} lg:h-[375px]`}>
          <Image src={ImageIglesia} width='371' height='371' alt='imagen de una iglesia' className='rotate-6 bg-white rounded-md p-2 size-[72px] border-2 border-emerald-400 lg:rotate-0 lg:bg-transparent lg:border-0 lg:size-[371px]' />
          <Image src={ImageVaca} width='183' height='183' alt='imagen de una vaca' className='rotate-[-6deg] bg-white rounded-md p-2 size-[72px] border-2 border-pink-400 lg:rotate-0 lg:bg-transparent lg:border-0 lg:size-[183px]' />
          <Image src={ImageAgave} width='166' height='166' alt='imagen de un agave' className='rotate-6 bg-white rounded-md p-2 size-[72px] border-2 border-green-400 lg:rotate-0 lg:bg-transparent lg:border-0 lg:size-[166px]' />
          <Image src={ImageAgave} width='166' height='166' alt='imagen de un agave' className='hidden lg:block size-[80px]' />
          <Image src={ImagePulque} width='86' height='86' alt='imagen de un jarro de pulque' className='rotate-[-6deg] bg-white rounded-md p-2 size-[72px] border-2 border-amber-400 lg:rotate-0 lg:bg-transparent lg:border-0 lg:size-[96px]' />
      </div>
      </div>
      
    </header>


  )
}
export default Header