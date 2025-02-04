import Image from "next/image"

const InformationOneItem = ({imagenSrc, title}) => {
  return (
    <article>
        <Image src={imagenSrc} width={64} height={64} alt='Imagen Cultura' />
        <h3>{title}</h3>
    </article>
  )
}
export default InformationOneItem