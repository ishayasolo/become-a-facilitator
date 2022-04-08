import { CardTextBox } from "./CardTextBox";
import { CardImageBox } from "./CardImageBox";
import cardBoxImage1 from "../../../images/card-box-img-1.png";
import cardBoxImage2 from "../../../images/card-box-img-2.png";

import "./Card.css";

export const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <CardImageBox 
          img={cardBoxImage1}
        />
        <CardTextBox
          heading="Invest in tech talents"
          statement="Help tech starters to unlock their full potential as innovators. Train them to hone their skills, advance their careers and enrich the global tech landscape."
        />
      </div>
      <div className="card">
        <CardTextBox
          heading="Join a community "
          statement="Become a member of our community and share your knowledge to help tech enthusiasts launch their careers and upskill. Also, start projects of your own or inspire new products by connecting with both new and well-experienced developers and designers in the industry."
        />
        <CardImageBox
          img={cardBoxImage2}
        />
      </div>
    </div>
  );
}