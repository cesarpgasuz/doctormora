

function TitlesPages(props) {

  return (
    <div className="text-center lg:w-1/2 lg:text-left">
          <span className="text-xs">Doctor Mora, Guanajuato</span>
          <h1 className='text-4xl font-bold'>{props.title}</h1>
          <p className='mt-2 mb-6 leading-7'>{props.parrafo}</p>
    </div>
  )
}

export default TitlesPages