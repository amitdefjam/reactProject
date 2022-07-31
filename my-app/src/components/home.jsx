import PageHeader from "./common/page-header";

const Home = () => {
  return (
    <PageHeader
      title={
        <div>
          <h1>
            Love <i className="bi bi-balloon-heart-fill text-danger"></i> App
          </h1>
          <h3>Love App. World's #1 Dating App Goes International.</h3>
        </div>
      }
      description={
        <div>
          <p>
            And it's free. Sign up with Love App and tap into a new network and
            a new way to meet world's singles. Tens of thousands of around the
            world have already found matches on Love App... ❤️
          </p>
          <span> Now it's your turn. Try it now for FREE!</span>
        </div>
      }
    />
  );
};

export default Home;
