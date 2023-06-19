import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          About Real <i className="bi bi-boxes"></i> App
        </>
      }
      description={
        <>
          <p className="fs-5">
            The{" "}
            <b>
              {" "}
              Real <b className="bi bi-boxes"></b> App{" "}
            </b>
            application can manage accounts that include personal data and
            photos. <br />
            For example, create, edit and delete business cards for each
            individual user with different access to cards data. Data of users
            and business cards are stored on a local server, in this case on a
            personal computer.
          </p>
        </>
      }
    />
  );
};

export default About;
