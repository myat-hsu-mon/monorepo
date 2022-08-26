import axios from "axios";

const service = axios.create({
  baseURL: "/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default service;
