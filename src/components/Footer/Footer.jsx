import React from 'react';
import './footer.css';
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-context-left">
          <img src={assets.logo} />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi eum consequatur facere suscipit reiciendis rem ipsam ex nemo corporis. Porro incidunt autem sint quasi iure!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delevery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+374-94-09-08-59</li>
            <li>vardgeshakobiann@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer;