import { useState } from "react";
import { LoginApi } from "..";
import { LoginContainerComponent } from "../LoginContainerComponent/LoginContainerComponent";

const AppUIComponent = () => {
  const [userLoged, setUserLoged] = useState(false);
  const [usersList, setUsersList] = useState({});

  console.log("Contenido de Login User: ");
  console.log(usersList);

  return (
    <>
      <LoginApi usersList={usersList} setUserLoged={setUserLoged} />
      {!userLoged ? <LoginContainerComponent /> : <h1>You are in...</h1>}
    </>
  );
};

export { AppUIComponent };
