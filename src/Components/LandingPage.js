import React from "react";
import Flip from "react-reveal/Flip";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="LP-Container" id="top">
      <div className="content">
        <Flip left>
          <h1 className="quote">Be your own kind of beautiful</h1>
        </Flip>
        <h2 className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
          auctor ex. Etiam vel nulla sed odio efficitur fringilla eget sed
          tortor. Curabitur in mi non ex maximus dapibus vel et tortor.
        </h2>
      </div>
    </div>
  );
}

export default LandingPage;
