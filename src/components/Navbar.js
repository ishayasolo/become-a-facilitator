import "./Navbar.css";
import logo from "../images/the-bulb-logo.png";

export const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img className="logo" src={logo} alt="" />
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Become a facilitator</a></li>
          <li><a href="#">FAQ</a></li>
          <li><button>Apply now</button></li>
        </ul>
      </nav>
    </header>
  );
}