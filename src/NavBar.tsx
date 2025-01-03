import React from "react";
import "./Component_bar.css";

function NavBar() {
  return (
    <nav className="navigationbar">
      <ul className="main-links">
        <li>
          <a href="#">Buy a Business</a>
        </li>
        <li>
          <a href="#">Buy a Franchise</a>
        </li>
        <li>
          <a href="#">Sell a Business</a>
        </li>
        <li>
          <a href="#">Sell a Franchise</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
