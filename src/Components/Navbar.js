import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Container">
      <div className="Nav">
        <h1 className="beauty">beauty</h1>
        <div className="Menu">
          <Link
            className="menu-items"
            to="ProductSection"
            smooth={true}
            duration={650}
            offset={60}
          >
            Product
          </Link>
          <Link
            className="menu-items"
            to="AboutSection"
            smooth={true}
            duration={750}
            offset={60}
          >
            About Us
          </Link>
          <Link
            className="menu-items"
            to="ContactSection"
            smooth={true}
            duration={850}
            offset={60}
          >
            Contact
          </Link>
        </div>
        <button className="shop-btn">Shop now</button>
      </div>
    </div>
  );
}

export default Navbar;
