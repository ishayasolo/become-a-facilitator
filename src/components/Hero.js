import "./Hero.css";
import heroImage from "../images/hero-img.webp";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="text-box">
        <small>JOIN OUR FACULTY</small>
        <h1>Make a global impact by training the next wave of tech experts.</h1>
        <p>Help aspiring tech professionals level up and discover their talents through one-on-one training.</p>
        <a href="#">
          <button className="cta">Apply to join our faculty</button>
        </a>
      </div>
      <div className="hero-img">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}