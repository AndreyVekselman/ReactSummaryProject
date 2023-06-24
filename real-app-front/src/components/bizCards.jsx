import { Link, NavLink } from "react-router-dom";
import PageHeader from "./common/pageHeader";

const BizCards = () => {
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
        <p>no cards...</p>
        some card
      </div>
    </>
  );
};

export default BizCards;
