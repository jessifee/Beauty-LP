import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import "./Contact.css";

function Contact() {
  const [submit, setSubmit] = useState("submit");

  function handleSubmit(e) {
    setSubmit("sent");
  }
  return (
    <div className="contactSection" id="ContactSection">
      <Flip top>
        <p className="contactTitle">Contact</p>
      </Flip>
      <form className="form">
        <input type="text" name="name" placeholder="Full Name" />

        <input type="email" name="email" placeholder="E-Mail" />

        <input type="text" name="subject" placeholder="Subject " />

        <textarea type="text" name="message" placeholder="Message" rows="5" />
        <button
          type="button"
          className={submit === "submit" ? "submitBtn" : "messageBtn"}
          onClick={handleSubmit}
        >
          {submit === "submit" ? "Submit" : "Message sent"}
        </button>
      </form>
    </div>
  );
}
export default Contact;
