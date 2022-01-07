import React from "react";
import "./TeamMember.css";
import Fade from "react-reveal/Fade";

function TeamMembers(props) {
  return (
    <div className="member">
      <Fade bottom>
        <img src={props.img} alt="" className="memberImage" />
      </Fade>
      <p className="name">{props.name}</p>
      <p className="position">{props.position}</p>
    </div>
  );
}
export default TeamMembers;
