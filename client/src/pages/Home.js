import React, { Component } from "react";
import NavBar from "../components/NavBar";
import HomeForm from "../components/Home";



class Home extends Component {
    render() {
        return (
            <div>
            <NavBar {...this.props} />
            <HomeForm />
            </div>
        )
    }
}

export default Home;