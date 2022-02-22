import React, { useEffect, useState } from "react";
import { Api, Login, LoginApi } from "..";

const AppComponent = () => {
  // user Locar user state
  const [user, setUser] = useState(false);

  // user from Login Form
  const [loginUser, setLoginUser] = useState({});

  // List of users from API server
  const [ApiUsers, setApiUsers] = useState("");

  // watch input value from loginUser and ApiUsers CONSOLE.LOG()
  console.log("Contenido Login Users");
  console.log(loginUser.email);
  console.log(loginUser.password);
  console.log("Contenido de ApiUsers");
  console.log(ApiUsers);

  // Searchig for registered user
  let fields = [];
  if (fields.length >= 1) {
    fields = ApiUsers;
    console.log("Api de usuarios copiada a Searched Api Users ...");
  } else {
    console.log("Impresion");
    console.log(
      (fields = ApiUsers.map((element) => {
        return element.fields;
      }))
    );
    let searchedUser = fields.filter(
      (field) => field.username === loginUser.name
    );

    console.log("resultado");
    console.log(searchedUser);
  }

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
