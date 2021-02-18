import React from 'react';
import "./ServiceCards.scss";

class ServiceCards extends React.Component{
    render(){
        return(
            <div className="ServiceCards__Container">
                {this.props.services.map(service => {
                    return(
                        <div key={service.id} className="ServiceCards">
                            <figure className="__ServiceImage">
                                <img src={service.images[0]} alt={"imagen de " + service.machineName}/>
                            </figure>
                            <div className="__ServiceName">
                                <h1>{service.machineName}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ServiceCards;
