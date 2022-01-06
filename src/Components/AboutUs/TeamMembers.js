import React from "react";
import "./TeamMember.css";
function TeamMembers(props) {
  return (
    <div className="member">
      <img src={props.img} alt="" className="memberImage" />
      <p className="name">{props.name}</p>
      <p className="position">{props.position}</p>
    </div>
  );
}
export default TeamMembers;
