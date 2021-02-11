import React from "react";
import "./Home.scss";
//Components
import NavBar from "../../components/NavBar/NavBar.jsx";
class Home extends React.Component{
    render(){
        return(
            <section className="Home">
                <NavBar/>
            </section>
        )
    }
}

export default Home;
