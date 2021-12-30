import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <p className="footerItems">About</p>
        <p className="footerItems">Policy</p>
        <p className="footerItems">Terms</p>
      </div>
      <div className="footerMidSection">
        <p className="beauty">beauty</p>
        <p className="footerAt">@2021 Jessna Pakzad. All rights reserved.</p>
      </div>
      <div>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
      </div>
    </div>
  );
}

export default Footer;
