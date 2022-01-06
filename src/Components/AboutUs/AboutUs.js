import React from "react";
import "./AboutUs.css";
import TeamMembers from "./TeamMembers";
import Woman1 from "/Users/jessna/projects/portfolio/src/Components/Images/Woman1.jpg";
import Woman2 from "/Users/jessna/projects/portfolio/src/Components/Images/Woman2.jpg";

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
        amet.
      </p>
      <div className="team">
        <TeamMembers img={Woman1} name="Jane Doe" position="CEO" />
        <TeamMembers img={Woman2} name="Doe Jane" position="CMO" />
      </div>
    </div>
  );
}

export default AboutUs;
