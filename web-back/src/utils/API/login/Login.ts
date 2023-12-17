/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-10-23 15:55:10
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-17 18:07:09
 * @FilePath: \web-back\src\utils\API\login\Login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ParameterizedContext } from 'koa';
import Router = require('koa-router');
import { getToken, checkToken } from '../../Token';
import { dataSource } from '../../../../data-source';
import * as jwt from 'jsonwebtoken';
import { secret, expiresIn } from '../../config';
import { UmsAdmin } from '../../../entities/UmsAdmin';
import { encipher, verifyEncipher } from '../../bcrypt';

/**
 * @description:
 * @param {ParameterizedContext<any, Router.IRouterParamContext<any, {}>, any>} ctx
 * @return {*}
 */
const login = async (ctx: any) => {
  const { username, password } = ctx.request.body;
  const token = ctx.request.header['authorization'];
  if (token) {
    let tokenObj: jwt.JwtPayload = checkToken(token);
    // 查用户密码
    ctx.body = selectUser(tokenObj.username, tokenObj.password);
  } else if (username && password) {
    ctx.body = selectUser(username, password);
  }
  return ctx.body;
};

const selectUser = async (username: string, password: string) => {
  let msg = {};
  await dataSource
    .initialize()
    .then(async () => {
      // const;
      // const userItem = await userRepository.findOne({
      //   where: { username: username, password: password },
      // });
      // console.log(username, password);
      // if (userItem) {
      //   const uuid = userItem.uuid;
      //   const token = getToken(uuid);
      //   userItem.token = token;
      //   await userRepository.save(userItem);
      //   msg = {
      //     code: 200,
      //     token: token,
      //   };
      // } else {
      //   msg = {
      //     code: 201,
      //   };
      // }
      const umsAdminRepositroy = dataSource.getRepository(UmsAdmin);
      const userItem = await umsAdminRepositroy.findOne({
        where: { username: username },
      });
      console.log(
        await verifyEncipher(password, userItem.password),
        userItem.password 
      );
    })
    .catch(error => console.log(error));
  dataSource.destroy();
  return msg;
};

export { login };
