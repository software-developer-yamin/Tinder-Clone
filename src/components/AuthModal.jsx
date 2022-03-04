import { useForm } from "react-hook-form";

function AuthModal({ setShowModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleClick = () => {
    setShowModal(false);
  };

  const isSignUp = true;

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        <button>Close</button>
      </div>
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>By clicking log in, you agree to our terms. Learn how we process your data in our Privacy Policy.</p>
    </div>
  );
}

export default AuthModal;
