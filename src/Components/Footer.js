import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

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
        <Link
          className="beauty"
          to="top"
          smooth={true}
          duration={850}
          offset={-100}
        >
          beauty
        </Link>

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
