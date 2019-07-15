import axios from "axios";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => {
  return axios.get(USERS_ENDPOINT).then(({ data }) => data);
};
