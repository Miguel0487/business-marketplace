import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import LogoBar from "./LogoBar";
import FooterBar from "./FooterBar";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";

import startup from "./images/startup.jpg";
import coffeeshop from "./images/A-Coffee-Shop-Business.jpg";
import ecofriendlyshop from "./images/ecofriendly_shop.jpg";
import bakery from "./images/gourmet.jpg";
import digitalmkt from "./images/B2B-Digital-Marketing-Agency-scaled.jpeg";
import fitnessgym from "./images/gym.png";

function App() {

  return (
    <div className="App">
      <LogoBar />
      <NavBar />

      <div className="content">
        <header className="App-header">
          <h2>Business Marketplace</h2>
          <SearchBar />
        </header>
      </div>

      <FooterBar />
    </div>
  );
}

export default App;