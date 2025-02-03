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
          <h3 className="font-bold text-lg mt-2">{business.name}</h3>
          <p>Location: {business.location}</p>
          <p>Price: ${business.price}</p>
          <button className="bg-[#007bff] rounded-md mt-3 p-1 pl-8 pr-8 font-bold text-white"> Contact</button>
        </div>
      ))}
    </div>
  );
};

export default BusinessList;