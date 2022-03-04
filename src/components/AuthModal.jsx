function AuthModal({ setShowModal }) {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className="auth-modal" >
      <button onClick={handleClick}>Close</button>
      Auth Modal
    </div>
  );
}

export default AuthModal;
