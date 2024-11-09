import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 

interface PasswordInput {
  password: string;
  confirmPassword: string;
}

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PasswordInput>();

  const navigate = useNavigate(); // Initialize navigate

  const onSubmit: SubmitHandler<PasswordInput> = (data) => {
    console.log("Password Reset", data);
    // Here, you would handle updating the user's password in your backend.

    navigate("/"); 
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Reset Password</h3>
          <p>Please enter and confirm your new password.</p>

          <div className="mb-3">
            <input
              {...register("password", { required: "Este campo es requerido" })}
              type="password"
              className="form-control"
              placeholder="Contraseña nueva"
            />
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </div>

          <div className="mb-3">
            <input
              {...register("confirmPassword", {
                required: "Confirme la contraseña",
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
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
