import React from "react"
import "./AboutUs.scss"

class AboutUs extends React.Component{
    render(){
        const{
            experience="20 años de experiencia en respaldan nuestros servicios de mantenimiento, reparación, instrumentación y montaje de máquinas y equipos de la industria alimentaria y téxtil.",
            ourJob ="En Instrumaq hacemos posibles las soluciones que usted y su empresa requieren para cumplirle a sus clientes. ",
            team="Contamos con un équipo capacitado de personas lideradas por don Humberto Monguí, siempre dispuestas a brindarle el mejor servicio y a dejar todos sus equipos en excelentes condiciones."
        }=this.props
        return(
            <div className="AboutUs">
                <div className="__Experience">
                    <h1>Experiencia</h1>
                    <h3>{experience}</h3>
                </div>
                <div className="divisor"></div>
                <div className="__OurJob">
                    <h1>Nuestro trabajo</h1>
                    <h3>{ourJob}</h3>
                </div>
                <div className="divisor"></div>
                <div className="__Team">
                    <h1>Equipo de trabajo</h1>
                    <h3>{team}</h3>
                </div>
            </div>
        )
    }
}

export default AboutUs;