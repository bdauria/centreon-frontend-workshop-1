import React, { useEffect, useState } from "react";
import { getUsers } from "./api";

const TotalUsers = ({ users }) => {
  return users.length > 0 ? <h3>Total users: {users.length}</h3> : null;
};

const Users = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      })}
    </ul>
  );
};

const Exo3 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <>
      <TotalUsers users={users} />
      <Users users={users} />
    </>
  );
};

export default Exo3;
