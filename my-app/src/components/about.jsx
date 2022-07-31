import PageHeader from "./common/page-header";

const About = () => {
  return (
    <PageHeader
      title={
        <div>
          <h1>
            About Love <i className="bi bi-balloon-heart-fill text-danger"></i>{" "}
            App.
          </h1>
          <h4>
            Our company made in the late 90's - since 1992 we worked about a
            application that can make your Dating Life easier to Interact with
            Men/Women by the fastest way.
          </h4>
        </div>
      }
      description={
        <div>
          <p>
            Online dating for serious relationships for singles and divorcees of
            all ages. Join us in order to meet, chat and date with the ideal
            partner of your choice ...
          </p>
          <span> Now it's your turn. Try it now for FREE!</span>
        </div>
      }
    />
  );
};

export default About;
