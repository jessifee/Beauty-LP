import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submit, setSubmit] = useState("submit");

  function handleSubmit(e) {
    setSubmit("sent");
    const form = document.getElementById("form");
    form.reset();
  }
  return (
    <div className="contactSection" id="contactSection">
      <p className="contactTitle">Contact</p>
      <form className="form" id="form">
        <input type="text" name="name" placeholder="Full Name" required />

        <input type="email" name="email" placeholder="E-Mail" required />

        <input type="text" name="subject" placeholder="Subject" required />

        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows="5"
          required
        />
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
