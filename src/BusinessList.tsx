import React from "react";
import "./BusinessList.css";
import startup from "./images/startup.jpg";
import coffeeshop from "./images/A-Coffee-Shop-Business.jpg";
import ecofriendlyshop from "./images/ecofriendly shop.jpg";
import fitnessgym from "./images/gym.png";
import bakery from "./images/gourmet.jpg";
import digitalmkt from "./images/B2B-Digital-Marketing-Agency-scaled.jpeg";
import BusinessCard from "./BusinessCard";

function BusinessList() {
  const businesses = [
    {
      id: 1,
      image: startup,
      name: "Tech Startup",
      description: "A profitable tech startup with a strong customer base.",
      location: "San Francisco, CA",
      price: 250000,
    },
    {
      id: 2,
      image: coffeeshop,
      name: "Coffee Shop",
      description: "Cozy coffee shop in a busy downtown area.",
      location: "Austin, TX",
      price: 75000,
    },
    {
      id: 3,
      image: ecofriendlyshop,
      name: "E-commerce Store",
      description: "Online store specializing in eco-friendly products.",
      location: "Remote",
      price: 120000,
    },

    {
      id: 4,
      image: bakery,
      name: "Gourmet Bakery",
      description:
        "A family-owned bakery specializing in artisan breads and pastries.",
      location: "Portland, OR",
      price: 150000,
    },

    {
      id: 5,
      image: digitalmkt,
      name: "Digital Marketing Agency",
      description:
        "A well-established agency with recurring contracts and a talented team.",
      location: "Remote",
      price: 500000,
    },

    {
      id: 6,
      image: fitnessgym,
      name: "Fitness Studio",
      description:
        "Modern fitness studio with state-of-the-art equipment and a loyal client base.",
      location: "Miami, FL",
      price: 300000,
    },
  ];

  const handleContactSeller = (name: string) => {
    alert(`Contacting the seller of ${name}`);
  };

  return (
    <div
      className="businessList"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {businesses.map((business) => (
        <BusinessCard
          key={business.id}
          image={business.image}
          name={business.name}
          description={business.description}
          location={business.location}
          price={business.price}
          onContact={() => handleContactSeller(business.name)}
        />
      ))}
    </div>
  );
}

export default BusinessList;
