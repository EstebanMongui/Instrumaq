import React from "react";
import "./Hero.scss"

const Hero = () =>{
    return(
        <div className="Hero">
            <div className="__Wraper">
                <div className="__Image1">
                    <div><img src="https://images.pexels.com/photos/3544567/pexels-photo-3544567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/></div>
                    <div><img src="https://images.pexels.com/photos/2965258/pexels-photo-2965258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/></div>
                </div>
                <div className="__Image2">
                    <figure><img src="https://cutt.ly/ZkKOzfl" alt=""/></figure>
                    <div className="__Content">
                        <h1>Mantenimiento con cumplimiento y calidad para su tranquilidad</h1>
                        <h3>Nos encargamos de realizar el mantenimento, reparación y montaje de máquinaria y equipos industriales.</h3>
                        <button className="__ContactButton">Ver Servicios</button>
                        <ul>
                            <li>Calderas</li><div></div>
                            <li>Bombas</li><div></div>
                            <li>Máquinaria téxtil</li><div></div>
                            <li>Redes</li>
                        </ul>
                    </div>
                </div>
                <div className="__Image3">
                    <figure><img src="https://cutt.ly/skKOaTx" alt=""/></figure>
                </div>
            </div>
        </div>
    )
}

export default Hero;