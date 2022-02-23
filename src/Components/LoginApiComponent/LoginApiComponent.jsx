import { useEffect, useState } from "react";

const API_KEY = "keynggO9MrPH2Mznf";
const UsersApi = `https://api.airtable.com/v0/appED4cmwegdc8xsp/Table%201?api_key=${API_KEY}`;

const LoginApiComponent = ({ ApiUsers, setApiUsers }) => {
  // Tempoeral state
  const [data, setData] = useState([]);

  // const [ApiUsers, setApiUsers] = useState("");
  useEffect(() => {
    fetch(UsersApi)
      .then((res) => res.json())
      .then((data) => setData(data.records));
  }, []);

  // Watch value of (tempApiUsers)
  console.log("Value of TEMP-API-USERS");
  // console.log(tempApiUsers);

  const fields = data.map((el) => {
    return el.fields;
  });

  // Watch value of (fields)
  console.log("Value of FIELDS");
  console.log(fields);

  return <>{/* <h1>Soy Login ApiComponent</h1> */}</>;
};

export { LoginApiComponent };
