import "./../assets/css/login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import IUser from "../interfaces/IUser";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    console.log(data);
    navigate("/dashboard");
  };
  
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <h3 className="text-center">Sign In</h3>

          <div className="mb-3">
            <input
              {...register("email", { required: true })}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
            {errors.email && (
              <span className="text-danger">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-3">
            <input
              {...register("password", { required: true })}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
            {errors.password && (
              <span className="text-danger">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label
                className="custom-control-label"
                htmlFor="customCheck1"
                style={{ margin: "0 0 0 5px" }}
              >
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <input type="submit" className="btn btn-primary" value="Submit" />
          </div>

          <p className="forgot-password text-right">
            Forgot <a href="/request-pass-reset">password?</a>
          </p>
          <p className="text-right">
            Don’t have an account? <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
