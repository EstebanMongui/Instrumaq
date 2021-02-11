import React from "react";
import "./NavBar.scss";
//Icons
import Logo from "../../assets/icons/logotipo.png"
const NavBar = () => {
    return(
        <div className="NavBar">
            <figure className="Logo">
                <img src={Logo} alt="Logotipo instrumaq"/>
            </figure>
            <nav className="NavBar__Menu">
                <ul>
                    <li><a href="">Servicios</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;