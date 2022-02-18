import { useForm } from "react-hook-form";

import "./LoginContainerComponent.css";

const LoginContainerComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // watch input value by passing the name of it
  console.log("firstName");

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
              <span>
                Regístrate ahora y prueba gratis 1 mes con visitas ilimitadas
              </span>
              <p>Ingresa los siguientes datos para crear tu cuenta.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input defaultValue="test" {...register("example")} />
              {/* include validation with required or other standard HTML validation rules */}
              <input
                {...register("firstName", { required: true, maxLength: 30 })}
              />
              {/* errors will return when field validation fails  */}
              {errors.firtsName && <span> This field is required</span>}
              <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
              <input type="number" {...register("age", { min: 18, max: 99 })} />
              <input type="submit" />
            </form>{" "}
          </div>
        </div>
      </div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    </>
  );
};

export { LoginContainerComponent };
