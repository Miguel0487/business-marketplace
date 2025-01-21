import React from "react";
import "./BusinessList.css";

interface Business {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
}

interface BusinessListProps {
  businesses: Business[];
}

const BusinessList: React.FC<BusinessListProps> = ({ businesses }) => {
  return (
    <div className="businesses-container">
      {businesses.map((business) => (
        <div key={business.id} className="business-card">
          <img src={business.image} alt={business.name} className="business-image" />
          <h2>{business.name}</h2>
          <p>Location: {business.location}</p>
          <p>Price: ${business.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BusinessList;