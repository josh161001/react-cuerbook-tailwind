import axios from "axios";

const urlAxios = axios.create({
  baseURL: "http://192.168.100.9",
});

export default urlAxios;
