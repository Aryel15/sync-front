import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/v1/user",
  withCredentials: true
});

export { api };