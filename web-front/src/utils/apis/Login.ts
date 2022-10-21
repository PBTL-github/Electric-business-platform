import { server } from "../server";
import { User } from "../interface";

export const Login = (data: User) => {
  return server.request({
    method: "post",
    url: "/api/login",
    data,
  });
};
