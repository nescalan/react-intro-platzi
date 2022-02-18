import { useEffect, useState } from "react";
import { Tweet } from "..";

const ApiComponent = () => {
  const [users, setUsers] = useState([]);
  const API_URL = "https://random-data-api.com/api/users/random_user?size=10";

  useEffect(() => {
    try {
      fetch(API_URL).then((res) => res.json().then((users) => setUsers(users)));
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(users);

  return <Tweet usersList={users} />;
};

export { ApiComponent };
