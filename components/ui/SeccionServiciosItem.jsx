import Image from "next/image"
const SeccionServiciosItem = ({ servicio }) => {

  const { imagenSrc, title } = servicio

  return (
    <div className="w-full relative h-[250px]">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
      <Image src={imagenSrc} width={255} height={356} className="w-full h-full object-cover" alt={title} />
      <h4 className="absolute bottom-3 left-3 text-white">{title}</h4>
    </div>
  )
}
export default SeccionServiciosItem