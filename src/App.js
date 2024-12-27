import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Component_bar';
import LogoBar from './Component_logoHead';
import FooterBar from './FooterBar';
import BusinessList from './BusinessList';

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