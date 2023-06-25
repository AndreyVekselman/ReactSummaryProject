import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescripiton, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card" style={{ width: "18 rem" }}>
      <img src={bizImage} className="card-img-top" alt={bizName}></img>
      <div className="card-body">
        <h5 className="card-title">{bizName}</h5>
        <p className="card-text">{bizDescripiton}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{bizAddress}</li>
          <li className="list-group-item">{bizPhone}</li>
        </ul>
        <Link>Edit</Link>
        <Link to={`/bizCardsz/card-delete/${_id}`}>Delete</Link>
      </div>
    </div>
  );
};

export default Card;
