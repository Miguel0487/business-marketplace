import React from 'react';
import './BusinessCard.css';

function BusinessCard({ name, description, location, price, onContact, image }) {
  return (
    <div className="business-card">
      <img className="image-center" src={image} alt="photo of business" />
      <h2 className='nameofbusiness'>{name}</h2>
      <p>{description}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Price:</strong> ${price.toLocaleString()}</p>
      <button className="contact-button" onClick={onContact}>
        Contact Seller
      </button>
    </div>
  );
}

export default BusinessCard;