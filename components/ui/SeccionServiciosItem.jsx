import Image from "next/image"
const SeccionServiciosItem = ({ servicio }) => {

  const { imagenSrc, title } = servicio

  return (
    <article>
      <Image src={imagenSrc} width={255} height={356} className="w-32 h-auto" alt={title} />
      <h4>{title}</h4>
    </article>
  )
}
export default SeccionServiciosItem