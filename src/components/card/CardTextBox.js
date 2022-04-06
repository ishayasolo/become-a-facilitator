import "./CardTextBox.css";

export const CardTextBox = (prop) => {
  return (
    <div className="card-text-box">
      <div className="heading-container">
        <h3 className="heading">{prop.heading}</h3>
        <div className="border"></div>
      </div>
      <p className="statement">{prop.statement}</p>
      <a href="#">
        <button className="cta">Apply now</button>
      </a>
    </div>
  );
}