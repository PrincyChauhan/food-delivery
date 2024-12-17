import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>Fresh flavors, crafted with love, delivered to your table</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-right">
          <h2>Getting Touch</h2>
          <ul>
            <li>+123456789</li>
            <li>Contact@tc.com</li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Policy</li>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyrighr 2024 &copy; All rights reserved
      </p>
    </div>
  );
};

export default Footer;
