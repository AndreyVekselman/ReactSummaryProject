import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <PageHeader
      title={
        <>
          <p className="text-center">
            Real <i className="bi bi-boxes"></i> App
          </p>
        </>
      }
      description={
        <>
          <p className="fs-5">
            <p>
              Welcome to{" "}
              <b>
                Real <b className="bi bi-boxes"></b> App
              </b>
              .
            </p>
            To start working with the application, please register{" "}
            <b> (SignUp)</b> and go into<b> (SignIn)</b> the application.{" "}
            <p>
              {" "}
              Only registered business users <b> (SignUp Business) </b> can
              create, edit and delete business cards.
            </p>
          </p>
        </>
      }
    />
  );
};

export default Home;
