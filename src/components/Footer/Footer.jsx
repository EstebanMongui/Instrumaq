import React from "react";
import "./Footer.scss"
//Icons
import Logo from "../../assets/icons/whiteLogo.svg"
const Footer = () =>{
    return(
        <div className="Footer">
            <figure className="Footer__Logo"><img src={Logo} alt="Logo"/></figure>
            <h3>instrumaqsas@gmail.com</h3>
            <h3>301 232 9734</h3>
            <h3>Bogotá-Colombia</h3>
        </div>
    )
}
export default Footer;