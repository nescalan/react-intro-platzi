import React, { useState } from "react";
import { Login, LoginApi } from "..";

const AppComponent = () => {
  // user Locar user state
  const [user, setUser] = useState(false);
  // user from Login Form
  const [loginUser, setLoginUser] = useState({});
  // List of users from API server
  const [ApiUsers, setApiUsers] = useState("");

  // watch input value from loginUser and ApiUsers
  console.log(loginUser);
  console.log(ApiUsers);

  if (!user) {
    return (
      <>
        <Login loginUser={loginUser} setLoginUser={setLoginUser} />
        <LoginApi ApiUsers={ApiUsers} setApiUsers={setApiUsers} />
      </>
    );
  } else {
    return <h2>Felicitaciones</h2>;
  }
};

export { AppComponent };
