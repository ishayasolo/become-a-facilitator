import "./CardImageBox.css";

export const CardImageBox = (prop) => {
  return (
    <div className="card-image-box">
      <img src={prop.img} alt="" />
    </div>
  );
}