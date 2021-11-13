import axios from "axios";

const api = axios.create({
  baseURL:  "https://kenzieshop.herokuapp.com/sessions/",
});

export default api;
