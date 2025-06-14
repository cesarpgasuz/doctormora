import { IconArrowTopRight } from "@/helpers/icons"

function FuenteInfo({url}) {
  return (
    <section className="w-full h-auto py-14">
                <div className="contenedor">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">Fuente <IconArrowTopRight className='top-2 right-2 size-[18px]' stroke='#444444' /></a>
                </div>
    </section>
    
  )
}

export default FuenteInfo