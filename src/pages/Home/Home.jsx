import React from "react";
import "./Home.scss";
import data from "../../../data.json"
//Components
import NavBar from "../../components/NavBar/NavBar.jsx"
import Hero from "../../components/Hero/Hero.jsx"
import ServiceCards from "../../components/ServiceCards/ServiceCards.jsx"
import GeneralServiceCard from "../../components/GeneralServiceCard/GeneralServiceCard.jsx"
import AboutUs from "../../components/AboutUs/AboutUs.jsx"
import Footer from "../../components/Footer/Footer.jsx"
class Home extends React.Component{
    render(){
        return(
            <section className="Home">
                <div className="NavBar__Container">
                    <NavBar />
                </div>
                <Hero />
                <div id="ServicesSection">
                    <h2>Servicios</h2>
                    <GeneralServiceCard services={data.Generalservices}/>
                    <div id="ServiceCards">
                        <ServiceCards services={data.Services}/>
                    </div>
                    <figure className="BackgroundImage">
                        <img src="https://images.pexels.com/photos/3089681/pexels-photo-3089681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    </figure>
                </div>
                <div id="AboutUsSection">
                    <h2>Nosotros</h2>
                    <div id="AboutUs">
                        <AboutUs />
                    </div>
                    <h3 className="__Subtitle">Proyectos</h3>
                    <ServiceCards services={data.Services}/>
                </div>
                <div id="Footer">
                    <Footer />
                </div>
            </section>
        )
    }
}

export default Home;
