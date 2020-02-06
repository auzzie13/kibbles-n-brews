import React, { Component } from "react";
import NavBar from "../components/NavBar";
import EventsPage from "../components/EventsPage";

class Events extends Component {
    render() {
        return (
            <div>
                <NavBar {...this.props} />
                <EventsPage />
            </div>
        )
    }
}

export default Events;