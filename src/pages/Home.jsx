import Nav from "../components/Nav";

function Home() {
  const authToken = false;
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="overlay">
      <Nav minimal={false} authToken={authToken} />
      <div className="home">
        <h1>Swipe Right@</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sign Out" : "Create Account"}
        </button>
      </div>
    </div>
  );
}

export default Home;
