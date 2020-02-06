import React from 'react';
import { useToasts } from "react-toast-notifications";
import './style.css';

export default function ContactPage() {

  const { addToast } = useToasts();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addToast("Thank you for contacting Kibbles and Brews", {
      appearance: "success",
      autoDismiss: true
    });
  }

  return (
    <div>
      <div className="heading">
          <div className="row">
          </div>
        </div>

        <section className="contact-input">
          <h1 className="contact-header">Contact Us!</h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>

          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" />

              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="email" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Enter a message!"></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-dark" onClick={handleFormSubmit}>Submit</button>
            </div>
          </div>

        </section>
    </div>
  )
}