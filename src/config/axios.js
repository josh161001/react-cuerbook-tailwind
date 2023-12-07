import axios from "axios";

const urlAxios = axios.create({
  // baseURL: "https://cuerbook-backend.onrender.com",
  baseURL: "http://localhost:5000",
});

export default urlAxios;
