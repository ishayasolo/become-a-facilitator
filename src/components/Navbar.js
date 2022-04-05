import "./Navbar.css";
import logo from "../images/the-bulb-logo.png";

export const Navbar = () => {
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li><a>About</a></li>
        <li><a>Courses</a></li>
        <li><a>Become a facilitator</a></li>
        <li><a>FAQ</a></li>
        <li><button>Apply now</button></li>
      </ul>
    </nav>
  );
}