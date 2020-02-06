import React from "react";
import NavBar from "../components/NavBar/index";
import MemberPortfolio from "../components/MemberPortfolio/index";

export default function Members(props) {
    return (
        <div>
            <NavBar {...props} />
            <MemberPortfolio />
        </div>
    )
}
