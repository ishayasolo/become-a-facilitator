import { Link } from "react-router-dom";
import "./CardTextBox.css";

export const CardTextBox = (prop) => {
  return (
    <div className="card-text-box">
      <div className="heading-container">
        <h3 className="heading">{prop.heading}</h3>
        <div className="border"></div>
      </div>
      <p className="statement">{prop.statement}</p>
      <Link to="/form">
        <button className="cta">Apply now</button>
      </Link>
    </div>
  );
}