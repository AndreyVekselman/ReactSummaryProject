import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          About Real <i className="bi bi-geo-fill"></i>
        </>
      }
      description={
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, necessitatibus! Adipisci vel neque obcaecati eos, modi unde, ex autem illum cumque eum alias aliquam enim sit incidunt dolorem, sint repudiandae."
      }
    />
  );
};

export default About;
