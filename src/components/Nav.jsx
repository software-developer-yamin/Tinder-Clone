import colorLogo from "../images/tinder_color_logo.png";
import whiteLogo from "../images/tinder_white_logo.png";

function Nav({ minimal, authToken, setShowModal }) {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <nav className="nav">
      <div className="logo_container">
        <img
          className="logo"
          src={minimal ? colorLogo : whiteLogo}
          alt="Tinder_Logo"
        />
      </div>
      {!authToken && !minimal && (
        <button onClick={handleClick} className="nav-button">
          Log In
        </button>
      )}
    </nav>
  );
}

export default Nav;
