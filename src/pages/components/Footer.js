import { Link } from "react-router-dom";

import logo from "../../images/the-bulb-logo.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <nav className="footer-nav">
          <ul>
            <li><Link className="footer-img" to="/"><img className="logo" src={logo} alt="" /></Link></li>
            <li><Link to="">Courses</Link></li>
            <li><Link to="/form">Become a facilitator</Link></li>
            <li><Link to="">Hire a cohort</Link></li>
            <li><Link to="">About us</Link></li>
            <li className="address">
              Contact us
              <br/>
              <address>
                39 Ikorodu Road, Jibowu, Yaba, Lagos
                <br/>
                <a href="tel:+2347008342852">+234 700 834 2852</a>
                <br/>
                <a href="mailto:info@thebulb.africa">info@thebulb.africa</a>
              </address>
            </li>
          </ul>
        </nav>
        <ul className="footer-nav-2">
          <li><Link to="">Our partners</Link></li>
          <div className="empty"></div>
          <li><Link to="">Terms of Use</Link></li>
          <div className="empty"></div>
          <li><Link to="">Privacy policy</Link></li>
          <div className="empty"></div>
          <li><Link to="">Resources</Link></li>
        </ul>
        <small>Copyright &copy; 2022 TheBulb. All rights reserved</small>
      </div>
    </footer>
  );
}