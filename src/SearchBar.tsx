import React, { useState } from "react";
import "./SearchBar.css";
import BusinessList from "./BusinessList";
import startup from "./images/startup.jpg";
import coffeeshop from "./images/A-Coffee-Shop-Business.jpg";
import ecofriendlyshop from "./images/ecofriendly_shop.jpg";
import bakery from "./images/gourmet.jpg";
import digitalmkt from "./images/B2B-Digital-Marketing-Agency-scaled.jpeg";
import fitnessgym from "./images/gym.png";
import coffeemachine from "./images/coffeemachine.jpg";
import autorepairshop from "./images/auto_repair.jpg";

const businesses = [

    {
      id: 1,
      image: startup,
      name: "Tech Startup",
      description: "A profitable tech startup with a strong customer base.",
      location: "San Francisco, CA",
      price: "250,000",
      },
      
      {
      id: 2,
      image: coffeeshop,
      name: "Coffee Shop",
      description: "Cozy coffee shop in a busy downtown area.",
      location: "Austin, TX",
      price: "75,000",
      },
      
      {
      id: 3,
      image: ecofriendlyshop,
      name: "E-commerce Store",
      description: "Online store specializing in eco-friendly products.",
      location: "Remote",
      price: "120,000",
      },
      
      {
      id: 4,
      image: bakery,
      name: "Gourmet Bakery",
      description:"A family-owned bakery specializing in artisan breads and pastries.",
      location: "Portland, OR",
      price: "150,000",
      },
      
      {
      id: 5,
      image: digitalmkt,
      name: "Digital Marketing Agency",
      description:"A well-established agency with recurring contracts and a talented team.",
      location: "Remote",
      price: "500,000",
      },
      
      {
      id: 6,
      image: fitnessgym,
      name: "Fitness Studio",
      description:"Modern fitness studio with state-of-the-art equipment and a loyal client base.",
      location: "Miami, FL",
      price: "300,000",
      },

      {
        id: 7,
        image: coffeemachine,
        name: "Coffee Machine Representative",
        description:"Meet customer needs and preferences so they can enjoy the best coffee in town.",
        location: "Remote",
        price: "20,000",
        },

        {
            id: 8,
            image: autorepairshop,
            name: "Auto Repair Shop",
            description:"Auto repair shop with more than twenty years of existence available due to retirement",
            location: "Jacksonville, FL",
            price: "400,000",
            },
  ];

  const SearchBar = () => {
    const [searchInput, setSearchInput] = useState(""); 
    const [filteredBusinesses, setFilteredBusinesses] = useState(businesses); 
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchInput(value);
  
      if (value.trim() === "") {
        setFilteredBusinesses(businesses);
      } else {
        // Usamos 'value' en lugar de 'searchTerm' que no estaba definido
        const searchTerm = value.toLowerCase();
        const filtered = businesses.filter((business) =>
          business.name.toLowerCase().includes(searchTerm) ||
          business.location.toLowerCase().includes(searchTerm) ||
          business.price.toString().includes(searchTerm)
        );
        setFilteredBusinesses(filtered);
      }
    };
  
    return (
      <div>
        <input 
          className="p-2 border border-gray-300 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          type="text"
          value={searchInput}
          onChange={handleChange}
          placeholder="Search..."
        />
        <BusinessList businesses={filteredBusinesses} />
      </div>
    );
  };
  
  export default SearchBar;