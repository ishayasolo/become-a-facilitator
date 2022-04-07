import "./Hero.css";
import heroImage from "../images/hero-img.webp";
import arrowDown from "../images/arrow-down.svg"
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="text-box">
        <small>JOIN OUR FACULTY</small>
        <h1>Make a global impact by training the next wave of tech experts.</h1>
        <p>Help aspiring tech professionals level up and discover their talents through one-on-one training.</p>
        <Link to="/form">
          <button className="cta">Apply to join our faculty</button>
        </Link>
      </div>
      <div className="hero-img">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}

export const FormHero = () => {
  return (
    <div className="form-hero">
      <div className="form-text-box">
        <h1>Ready to unlock potentials as a member of our faculty?</h1>
        <p>Fill the form below to get started</p>
        <a href="#form">
          <button className="cta"><img src={arrowDown} alt=""/></button>
        </a>
      </div>
    </div>
  );
}