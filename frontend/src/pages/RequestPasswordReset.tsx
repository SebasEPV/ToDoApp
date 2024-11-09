import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface EmailInput {
  email: string;
}

export default function RequestPasswordReset() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInput>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<EmailInput> = (data) => {
    console.log("Request Password Reset", data);
    // Here you could send the password reset request to the server.

    // Redirect to the Reset Password page after form submission
    navigate("/reset-pass");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Olvide contraseña</h3>
          <p>Ingrese el correo con el cual se registro.</p>

          <div className="mb-3">
            <input
              {...register("email", {
                required: "Este campo es obligatorio.",
                pattern: /^[^@]+@[^@]+\.[^@]+$/,
              })}
              type="email"
              className="form-control"
              placeholder="Ingresa su correo"
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Enviar link
            </button>
            <div>
              <a href="/">Volver</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
