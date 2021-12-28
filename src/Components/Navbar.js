import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Container">
      <div className="Nav">
        <h1 className="beauty">beauty</h1>
        <div className="Menu">
          <p className="menu-items">Products</p>
          <p className="menu-items">About us</p>
          <p className="menu-items">Contact</p>
        </div>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default Navbar;
