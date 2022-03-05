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
      <p>
        By clicking log in, you agree to our terms. Learn how we process your
        data in our Privacy Policy.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name : </label>
        <input {...register("fullName", { required: true })} defaultValue="" />
        {errors.lastName && "full name is required"}
        <label>Email : </label>
        <input
          type="email"
          {...register("email", { required: true })}
          defaultValue=""
        />
        {errors.lastName && "email is required"}
        <label>Password : </label>
        <input
          type="password"
          {...register("password", { required: true })}
          defaultValue=""
        />
        {errors.lastName && "password is required"}
        <label>Confirm Password : </label>
        <input
          type="password"
          {...register("confirmPassword", { required: true })}
          defaultValue=""
        />
        {errors.lastName && "confirm password is required"}
        <input type="submit" />
      </form>
    </div>
  );
}

export default AuthModal;
