import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import LogoBar from "./LogoBar";
import FooterBar from "./FooterBar";
import BusinessList from "./BusinessList";

function App() {
  return (
    <div className="App">
      <LogoBar />
      <NavBar />

      <div className="content">
        <header className="App-header">
          <h1>Business Marketplace</h1>
          <BusinessList />
        </header>
      </div>

      <FooterBar />
    </div>
  );
}

export default App;
