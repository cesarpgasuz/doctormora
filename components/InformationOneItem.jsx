import Image from "next/image"

const InformationOneItem = ({imagenSrc, title}) => {

  

  return (
    <article className='bg-white flex items-center p-5 gap-4 rounded'>
        <Image src={imagenSrc} width={64} height={64} className="size-14" alt='Imagen Cultura' />
        <h3 className="text-base">{title}</h3>
    </article>
  )
}
export default InformationOneItem