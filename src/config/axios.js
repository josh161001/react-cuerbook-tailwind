import axios from "axios";

const urlAxios = axios.create({
  baseURL: "https://cuerbook-backend.onrender.com",
});

export default urlAxios;
