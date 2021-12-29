import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs" id="AboutSection">
      <p className="aboutTitle">About us</p>
      <p className="aboutDescription">
        {" "}
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <div className="positions">
        <div className="square">CEO</div>
        <div className="square">Marketing</div>
        <div className="square">Research</div>
      </div>
    </div>
  );
}

export default AboutUs;
