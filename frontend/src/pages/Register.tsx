import { useForm, SubmitHandler } from "react-hook-form";
import "./../assets/css/login.css";
import IUser from "../interfaces/IUser";


export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>();
  const onSubmit: SubmitHandler<IUser> = (data) => console.log(data);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Register</h3>

          <div className="mb-3">
            <input
              {...register("name", { required: true })}
              type="text"
              className="form-control"
              placeholder="Ingresa tu nombre"
            />
            {errors.name && (
              <span className="text-danger">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-3">
            <input
              {...register("email", { required: true })}
              type="text"
              className="form-control"
              placeholder="Ingresa tu correo"
            />
            {errors.email && <span className="text-danger">Este campo es obligatorio</span>}

          </div>

          <div className="mb-3">
            <input
              {...register("password", { required: true })}
              type="password"
              className="form-control"
              placeholder="Ingresa una contraseña"
            />
            {errors.password && (
              <span className="text-danger">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-3">
            <input
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden",
              })}
              type="password"
              className="form-control"
              placeholder="Confirma la contraseña"
            />
            {errors.confirmPassword && (
              <span className="text-danger">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>

          <p className="text-right mt-3">
            Already have an account? <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
