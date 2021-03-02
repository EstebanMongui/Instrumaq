import React from "react";
import "./NavBar.scss";
//Icons
import Logo from "../../assets/icons/logotipo.svg"
const NavBar = () => {
    return(
        <div className="NavBar">
            <figure className="Logo">
                <img src={Logo} alt="Logotipo instrumaq"/>
            </figure>
            <nav className="NavBar__Menu">
                <ul>
                    <li><a href="#ServicesSection">Servicios</a></li>
                    <li><a href="#AboutUsSection">Nosotros</a></li>
                    <li><a href="#Footer">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;