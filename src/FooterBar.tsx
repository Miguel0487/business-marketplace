import React from "react";
import "./FooterBar.css";

function FooterBar () {
  return (
    <div className="footer-bar">
      <div className="footer-section left">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      <div className="footer-section center">
        <p><strong>About us:</strong>
        <br />
          We're experts that understand the challenges of selling any business. For over 20 years, we have successfully supported thousands of business owners, entrepreneurs, brokers, and franchisors.</p>
      </div>

      <div className="footer-section right">
        <a href="/terms-and-conditions">Terms and conditions</a>
        <a href="/privacy-policy">Privacy policy</a>
        <a href="/contact-us">Contact us</a>
      </div>
    </div>
  );
};

export default FooterBar;
