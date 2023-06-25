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
          <div className="list-group-item">{bizAddress}</div>
          <div className="list-group-item">{bizPhone}</div>
        </ul>
        <Link>Edit</Link>
        <Link>Delete</Link>
      </div>
    </div>
  );
};

export default Card;
