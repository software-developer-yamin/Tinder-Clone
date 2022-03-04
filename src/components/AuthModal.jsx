function AuthModal({ setShowModal }) {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Close This Mod</button>
    </div>
  );
}

export default AuthModal;
