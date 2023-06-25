import { NavLink } from "react-router-dom";
import PageHeader from "./common/pageHeader";
import { useBizCards } from "../hooks/useBizCards";
import Card from "./card";

const BizCards = () => {
  const cards = useBizCards();
  return (
    <>
      <PageHeader
        title="Here is a Business Cards"
        description="Your business cards in list bellow"
      />

      <div className="row">
        <NavLink to="/card-create">Create Card</NavLink>
      </div>
      <div className="row">
        {!cards.length ? (
          <p>no cards...</p>
        ) : (
          cards.map((card) => (
            <div key={card._id} className="col-3">
              <Card card={card} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default BizCards;
