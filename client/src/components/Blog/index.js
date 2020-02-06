import React, { useState, useEffect } from "react";
import "./style.css";
import api from "../../utils/API";

function BlogPage() {

    const [blogs, setBlog] = useState();

    useEffect(() => {
        loadBlogs()
      }, [])

      function loadBlogs() {
        api.getBlog()
          .then(res => 
            setBlog(res.data)
          )
          .catch(err => console.log(err));
      };

    return (
        <body>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="form-group">
                            {/* <select className="custom-select" id="category">
                                <option id="options">Meet Up</option>
                                <option id="options">Pet Questions</option>
                                <option id="options">General</option>
                            </select> */}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <a className="btn btn-light" href="/cms">New Post</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 blog-container">
                    </div>
                </div>
            </div>
        </body>
    )
}

export default BlogPage;