import "./Hero.css";
import heroImage from "../images/hero-img.webp";

export const Hero = () => {
  return (
    <main className="hero">
      <div className="text-box">
        <small>JOIN OUR FACULTY</small>
        <h1>Make a global impact by training the next wave of tech experts.</h1>
        <p>Help aspiring tech professionals level up and discover their talents through one-on-one training.</p>
        <button>Apply to join our faculty</button>
      </div>
      <div className="image-box">
        <img src={heroImage} alt="" />
      </div>
    </main>
  );
}