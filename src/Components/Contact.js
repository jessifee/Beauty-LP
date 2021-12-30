import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="ContactSection" id="ContactSection">
      <p className="ContactTitle">Contact</p>
      <form className="form">
        <input type="text" name="name" placeholder="Full Name" />

        <input type="email" name="email" placeholder="E-Mail" />

        <input type="text" name="subject" placeholder="Subject " />

        <textarea type="text" name="message" placeholder="Message" rows="5" />
        <button className="submitBtn">Submit</button>
      </form>
    </div>
  );
}
export default Contact;
