import { LoginContainerComponent } from "../LoginContainerComponent/LoginContainerComponent";

const userLoged = false;

const AppComponent = () => {
  return (
    <>{!userLoged ? <LoginContainerComponent /> : <h1>You are in...</h1>}</>
  );
};

export { AppComponent };
