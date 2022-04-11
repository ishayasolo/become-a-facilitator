import "./Navbar.css";
import logo from "../../images/the-bulb-logo.png";
import darkLogo from "../../images/the-bulb-logo-dark.png";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="img-container">
        <Link to="/become-a-facilitator"><img className="logo" src={logo} alt="" /></Link>
      </div>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/form">Become a facilitator</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link className="button-link" to="/form"><button className="cta">Apply now</button></Link></li>
      </ul>
    </nav>
  );
}

export const FormNavbar = () => {
  return (
    <nav className="nav-2">
      <div className="form-nav">
        <div className="form-img-container">
          <Link to="/become-a-facilitator"><img className="logo" src={darkLogo} alt="" /></Link>
        </div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
    </nav>
  );
}