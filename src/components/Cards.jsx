import "./Cards.css";

const Card = ({ photo, name, description }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={photo} alt={name} className="card-photo" />
      </div>
      <div className="card-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
