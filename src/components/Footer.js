import logo from "../images/the-bulb-logo.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer-nav">
        <ul>
          <li><a href="#"><img className="logo" src={logo} alt="" /></a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Become a facilitator</a></li>
          <li><a href="#">Hire a cohort</a></li>
          <li><a href="#">About us</a></li>
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
        <li><a href="#">Our partners</a></li>
        <div className="empty"></div>
        <li><a href="#">Terms of Use</a></li>
        <div className="empty"></div>
        <li><a href="#">Privacy policy</a></li>
        <div className="empty"></div>
        <li><a href="#">Resources</a></li>
      </ul>
      <small>Copyright &copy; 2022 TheBulb. All rights reserved</small>
    </div>
  );
}