import React, { useState } from "react";
import "./style.css";
import api from "../../utils/API";

function EventsPage() {
    const [blogState, changeBlog] = useState({ optionsBox: "Meet Up" });

    function submitHandler(data) {
        api.submitBlog(blogState)
            .then(res => console.log(res))
    }
    const onChange = (e) => {
        const { name, value } = e.target;
        changeBlog({ ...blogState, [name]: value });
    };
    return (
        <div>
            <div className="container" id="container">
                {/* <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
              <h2 className="title">Plan a Meet-Up,
              have a Pet Question, or just a General Comment?</h2>
              Use the form below to blog your needs.

              </div>
              </div>
                </div> */}
                <h1 className="post-header">Create A Post</h1>
                <div className="field">
                    <label className="label">Subject</label>
                    <div className="control" id="control">
                        <div className="select">
                            <select id="options" name="optionsBox" onChange={onChange}>
                                <option id="options">Meet Up</option>
                                <option id="options">Pet Questions</option>
                                <option id="options">General</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" name="nameInput" id="nameInput" type="text" onChange={onChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Details</label>
                    <div className="control">
                        <textarea className="textarea" name="textareaInput" id="textareaDetails" onChange={onChange}></textarea>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control" >
                        <button className="button is-link" id="submitButton" onClick={submitHandler} >
                            <div className="c1"></div>
                            <div className="c2"></div>
                            <div className="c3"></div>
                            <div className="c4"></div>
                            <div className="b1">
                                <div className="b2">
                                    Submit
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default EventsPage;