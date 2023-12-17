/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-10-23 15:55:10
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-18 00:37:27
 * @FilePath: \web-back\src\utils\Token\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as jwt from 'jsonwebtoken';
import { secret, expiresIn } from '../config';

export const getToken = (user: Object) => {
  const token: string = jwt.sign(user, secret, { expiresIn });
  return 'Bearer ' + token;
};

export const checkToken = (token: string): Object => {
  token = token.substring('Bearer'.length + 1, token.length);
  return jwt.verify(token, secret);
};
