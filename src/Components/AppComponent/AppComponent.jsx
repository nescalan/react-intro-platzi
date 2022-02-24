import React, { useState } from "react";
import { LogedComponent, Login, LoginApi } from "..";

const AppComponent = () => {
  // user from Login Form
  const [loginUser, setLoginUser] = useState({});

  // List of users from API server
  const [apiData, setApiData] = useState([]);

  // Error: Controls Error Messages
  let errorMessage = false;
  let user = false;

  const fields = apiData.map((el) => {
    return el.fields;
  });

  // Watch value of (fields)
  console.log("********** Value of FIELDS **********");
  console.log(fields);

  // watch input value from loginUser and ApiUsers CONSOLE.LOG()
  console.log("***** Contenido LOGIN USERS *****");
  const ApiUsersLength = Object.keys(loginUser).length;
  console.log(ApiUsersLength);
  console.log(loginUser.email);
  console.log(loginUser.password);

  // Find use login info
  const userData = fields.find((user) => user.username === loginUser.email);

  console.log("+++++ User Found: +++++");
  console.log(userData);
  // console.log(userData.password);
  // console.log(userData.email);

  // Compare User Information
  if (userData) {
    if (userData.password !== loginUser.password) {
      // Invalid password
      console.log("!!! USUARIO NO ENCONTRADO - ACCESSO DENEGADO !!!!");
      errorMessage = true;
      user = false;
    } else {
      // Valid Password
      console.log("ACCESO CORRECTO ");
      user = true;
    }
  } else if (!loginUser.email) {
    // Username not found
    console.log("!!! USUARIO NO ENCONTRADO - ACCESSO DENEGADO !!!!");
    console.log(userData);
    errorMessage = false;
    user = false;
  } else {
    // Invalid User
    console.log("!!! USUARIO NO ENCONTRADO - ACCESSO DENEGADO !!!!");
    errorMessage = true;
    user = false;
  }

  // MAIN PROGRAMM
  if (!user) {
    return (
      <>
        <Login errorMessage={errorMessage} setLoginUser={setLoginUser} />
        <LoginApi apiData={apiData} setApiData={setApiData} />
      </>
    );
  } else {
    return <LogedComponent />;
  }
};

export { AppComponent };
