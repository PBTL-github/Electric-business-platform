import * as jwt from "jsonwebtoken";
import { secret, expiresIn } from "../../config";

export const getToken = (uuid: string, premission?: number) => {
  const token: string = jwt.sign({ uuid, premission }, secret, { expiresIn });
  return token;
};
