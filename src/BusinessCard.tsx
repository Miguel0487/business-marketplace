import React from "react";
import "./BusinessCard.css";

interface Props {
  name: string;
  description: string;
  location: string;
  price: number;
  onContact: () => void;
  image: string;
}

function BusinessCard({
  name,
  description,
  location,
  price,
  onContact,
  image,
}: Props) {
  return (
    <div className="business-card">
      <img className="image-center" src={image} alt="business_logo" />
      <h2 className="nameofbusiness">{name}</h2>
      <p>{description}</p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Price:</strong> ${price.toLocaleString()}
      </p>
      <button className="contact-button" onClick={onContact}>
        Contact Seller
      </button>
    </div>
  );
}

export default BusinessCard;
