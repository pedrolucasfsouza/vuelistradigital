import axios from "axios";

const api = axios.create({
  baseURL: "https://run.mocky.io/v3/24fda311-d8b1-49ca-b35d-74ea1949020d",
});

export default api;
