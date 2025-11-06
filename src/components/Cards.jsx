import "./Cards.css";
import EnterAnimation from "./Enter";


const Card = ({ photo, name, description }) => {
  return (
    <EnterAnimation>
    <div className="card">
      <img src={photo
      } alt={name} className="card-photo" />
      <div className="card-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
    </EnterAnimation>
  );
};

export default Card;
