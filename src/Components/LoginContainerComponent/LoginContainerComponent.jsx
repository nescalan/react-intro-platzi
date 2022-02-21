import { useForm } from "react-hook-form";

import "./LoginContainerComponent.css";

const LoginContainerComponent = ({ setLoginUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // watch input value by passing the name of it
    setLoginUser(data);
    // Clean input spaces
    e.target.reset();
  };

  return (
    <>
      <div className="grid-login-container">
        <div className="grid-login-left">
          <div className="grid-left-text">
            <span>
              Automatiza de manera segura y sencilla el registro de tus
              visitantes
            </span>
            <p>Siempre una impresión moderna y segura, todo en la nube.</p>
          </div>
        </div>
        <div className="grid-login-right">
          <div className="grid-login-content">
            <div className="grid-right-text">
              <span>Iniciar Seción</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <label htmlFor="email">Correo electrónico</label>
              <div className="input-layout">
                <img
                  src="https://panel.lobbyfix.com/images/d5901f7462c782f186bf3915068dfcf6.svg"
                  alt=""
                />
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="error-alert">
                  Ingresa un formato de correo correcto.
                </span>
              )}
              {/* include validation with required or other standard HTML validation rules */}

              <div>
                <label htmlFor="password">Contraseña:</label>
                <div className="input-layout">
                  <img
                    src="https://panel.lobbyfix.com/images/2dcf2c201c9dc7056e7a987c6fa3973b.svg"
                    alt=""
                  />
                  <input
                    {...register("contraseña", {
                      required: true,
                      minLength: 8,
                    })}
                  />
                </div>
                {/* errors will return when field validation fails  */}
                {errors.contraseña && (
                  <span className="error-alert">
                    {" "}
                    This field is required, min 8 digits
                  </span>
                )}
              </div>
              <button type="submit" className="btn btn-submit">
                Iniciar Seción
              </button>
              {/* <input type="submit" className="btn btn-submit" /> */}
            </form>
          </div>
        </div>
      </div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    </>
  );
};

export { LoginContainerComponent };
