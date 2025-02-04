import InformationThreeItem from "./InformationThreeItem"

const InformationThree = () => {
  return (
    <section>
        <h2>En Doctor Mora contamos con multiples Servicios</h2>    

        <div>
            <InformationThreeItem 
                title='Religion'
            />
            <InformationThreeItem 
                title='Salud'
            />
            <InformationThreeItem 
                title='Educacion'
            />
            <InformationThreeItem 
                title='Gobierno'
            />
        </div>
    </section>
  )
}
export default InformationThree