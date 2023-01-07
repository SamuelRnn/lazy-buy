
const Home = ({ isActive, company }) => {
  
  return (
    <div>
      {isActive.home ? (
        <div>
          <h1>Home</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;