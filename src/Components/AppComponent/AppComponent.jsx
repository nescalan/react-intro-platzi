import { LoginContainerComponent } from "../LoginContainerComponent/LoginContainerComponent";

const userLoged = false;

const AppComponent = () => {
  return (
    <>{userLoged ? <h1>You are in...</h1> : <LoginContainerComponent />}</>
  );
};

export { AppComponent };
