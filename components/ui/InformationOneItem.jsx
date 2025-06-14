// import Image from "next/image"
import Link from "next/link"
import { getIcon } from "@/helpers/icons"
import { IconArrowTopRight } from "@/helpers/icons"


const InformationOneItem = ({principal}) => {

  const {title, link, icon} = principal

  const Icono = getIcon(icon)

  return (
    <Link href={link} className="bg-white flex flex-col p-5 gap-3 rounded shadow-2xl shadow-sky-300/10 relative hover:bg-cyan-200">
        <Icono stroke='#0183c9' className='size-8 flex-shrink-0' />
        <h3 className="text-base">{title}</h3>
        <IconArrowTopRight className='absolute top-2 right-2 size-5' stroke='#444444' />
    </Link>
  )
}
export default InformationOneItem