import React from "react";
import "./GeneralServiceCard.scss"

class GeneralServiceCard extends React.Component{
    render(){
        return(
            <div className="GSC__Container">
                {this.props.services.map(service =>{
                    return(
                        <div key={service.id} className="GeneralServiceCard">
                            <h1>{service.name}</h1>
                            <h3>{service.description}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GeneralServiceCard;