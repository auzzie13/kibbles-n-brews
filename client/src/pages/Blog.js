import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BlogPage from "../components/Blog/index";

class Blog extends Component {
    render() {
        return (
            <div>
                <NavBar {...this.props} />
                <BlogPage />
            </div>
        )
    }
}

export default Blog;
