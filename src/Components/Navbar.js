import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
function Navbar() {
  const [active, setActive] = useState();

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll < 600) {
      setActive("Landing");
    } else if (scroll > 600 && scroll < 1350) {
      setActive("Product");
    } else if (scroll > 1350 && scroll < 2060) {
      setActive("About");
    } else if (scroll > 2060) {
      setActive("Contact");
    }
    console.log(scroll);
  });

  return (
    <div className="container">
      <div className="nav">
        <Link
          className="beauty"
          to="top"
          smooth={true}
          duration={350}
          offset={-100}
        >
          beauty
        </Link>
        <div className="menu">
          <Link
            className={active === "Product" ? "viewed" : "menuItems"}
            to="productSection"
            smooth={true}
            duration={650}
            offset={60}
          >
            Product
          </Link>
          <Link
            className={active === "About" ? "viewed" : "menuItems"}
            to="aboutSection"
            smooth={true}
            duration={750}
            offset={60}
          >
            About Us
          </Link>
          <Link
            className={active === "Contact" ? "viewed" : "menuItems"}
            to="contactSection"
            smooth={true}
            duration={850}
            offset={60}
          >
            Contact
          </Link>
        </div>
        <button className="shopBtn">Shop now</button>
      </div>
    </div>
  );
}

export default Navbar;
