import React from "react";
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
import MyForm from "./Form";

function App() {
  return (
    <div className="text-center">
      <LogoBar />
      <NavBar />

      <div className="flex-1 p-5">
        <header className="bg-white min-h-screen flex flex-col items-center justify-center text-black">
          <h2>Business Marketplace</h2>
          <SearchBar />
          <div className="w-full">
            <h4 className="text-center mb-2 text-lg mx-auto px-4">
              Would you like to receive our newsletter for free?
            </h4>
          </div>
          <MyForm />
        </header>
      </div>

      <FooterBar />
    </div>
  );
}

export default App;