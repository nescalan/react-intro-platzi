import { useEffect } from "react";

const API_KEY = "keynggO9MrPH2Mznf";
const UsersApi = `https://api.airtable.com/v0/appED4cmwegdc8xsp/Table%201?api_key=${API_KEY}`;

const LoginApiComponent = ({ apiData, setApiData }) => {
  useEffect(() => {
    fetch(UsersApi)
      .then((res) => res.json())
      .then((apiData) => setApiData(apiData.records));
  }, [setApiData]);

  return <>{/* <h1>Soy Login ApiComponent</h1> */}</>;
};

export { LoginApiComponent };
