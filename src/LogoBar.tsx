import React from "react";
import "./Component_logoHead.css";
import logo from "./images/logo.png";

function LogoBar() {
  return (
    <div className="barralogo">
      <div className="logoweb">
        <img
          src={logo}
          alt="logo buy and sell business online"
          className="logo-img"
        />
      </div>
    </div>
  );
}

export default LogoBar;
