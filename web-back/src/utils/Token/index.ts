import * as jwt from 'jsonwebtoken';
import { secret, expiresIn } from '../config';

export const getToken = (user: Object) => {
  const token: string = jwt.sign(user, secret, { expiresIn });
  return token;
};

export const checkToken = (token: string): Object => {
  token = token.substring('Bearer'.length + 1, token.length);
  return jwt.verify(token, secret);
};
