import axios from "axios";

const server = axios.create({ baseURL: "http://localhost:5000" });

server.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  (res) => {
    if (res.status !== 200) return Promise.reject(new Error(`response code: ${res.status}`));
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { server };
