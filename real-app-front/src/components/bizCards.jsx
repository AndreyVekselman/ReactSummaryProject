import { Link } from "react-router-dom";
import PageHeader from "./common/pageHeader";

const BizCards = () => {
  return (
    <>
      <PageHeader
        title="Here is a Business Cards"
        description="Your business cards in list bellow"
      />

      <div className="row">
        <Link to="create-card">Create Card</Link>
      </div>
      <div className="row">
        <p>no cards...</p>
        some card
      </div>
    </>
  );
};

export default BizCards;
