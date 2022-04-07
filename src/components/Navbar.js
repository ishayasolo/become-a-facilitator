import "./Navbar.css";
import logo from "../images/the-bulb-logo.png";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="img-container">
        <img className="logo" src={logo} alt="" />
      </div>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Become a facilitator</a></li>
        <li><a href="#">FAQ</a></li>
        <li><button className="cta">Apply now</button></li>
      </ul>
    </nav>
  );
}