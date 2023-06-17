import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <PageHeader
      title={
        <>
          Real <i className="bi bi-boxes"></i> App
        </>
      }
      description={
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, necessitatibus! Adipisci vel neque obcaecati eos, modi unde, ex autem illum cumque eum alias aliquam enim sit incidunt dolorem, sint repudiandae."
      }
    />
  );
};

export default Home;
