import { useEffect, useState } from "react";

const API_KEY = "keynggO9MrPH2Mznf";
const UsersApi = `https://api.airtable.com/v0/appED4cmwegdc8xsp/Table%201?api_key=${API_KEY}`;

const LoginApiComponent = ({ ApiUsers, setApiUsers }) => {
  // const [ApiUsers, setApiUsers] = useState("");

  // useEffect(() => {
  //   fetch(UsersApi)
  //     .then((res) => res.json())
  //     .then((ApiUsers) => setApiUsers(ApiUsers.records));
  // }, [setApiUsers]);

  useEffect(() => {
    fetch(UsersApi)
      .then((res) => res.json())
      .then((ApiUsers) => setApiUsers(ApiUsers.records));
  }, [setApiUsers]);

  // console.log(ApiUsers);

  return <>{/* <h1>Soy Login ApiComponent</h1> */}</>;
};

export { LoginApiComponent };
