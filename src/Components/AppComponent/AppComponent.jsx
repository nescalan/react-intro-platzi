import React, { useState } from "react";
import { LogedComponent, Login, LoginApi } from "..";

const AppComponent = () => {
  let user = false;

  // user from Login Form
  const [loginUser, setLoginUser] = useState({});

  // List of users from API server
  const [apiData, setApiData] = useState([]);

  const fields = apiData.map((el) => {
    return el.fields;
  });

  // Watch value of (fields)
  console.log("********** Value of FIELDS **********");
  console.log(fields);

  // watch input value from loginUser and ApiUsers CONSOLE.LOG()
  console.log("********** Contenido LOGIN USERS **********");
  const ApiUsersLength = Object.keys(loginUser).length;
  console.log(ApiUsersLength);
  console.log(loginUser.email);
  console.log(loginUser.password);

  // Find use login info
  const userData = fields.find((user) => user.username === loginUser.email);

  // console.log("===== Contenido TEMPUSER =====");
  // console.log(tempUser);
  // console.log(user.username);

  console.log("+++++ User Found: +++++");
  console.log(userData);
  // console.log(userData.password);
  // console.log(userData.email);

  // Compare User Information
  if (userData) {
    if (userData.password !== loginUser.password) {
      // Invalid password
      alert("!!! ACCESSO DENEGADO !!!!");
    } else {
      // Valid Password
      console.log("ACCESO CORRECTO ");
      user = true;
      // setUser(true);
    }
  } else {
    // Username not found
    alert("!!! ACCESSO DENEGADO !!!!");
  }

  // MAIN PROGRAMM
  if (!user) {
    return (
      <>
        <Login loginUser={loginUser} setLoginUser={setLoginUser} />
        <LoginApi apiData={apiData} setApiData={setApiData} />
      </>
    );
  } else {
    return <LogedComponent />;
  }
};

export { AppComponent };
