/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-10-23 15:55:10
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-18 03:11:56
 * @FilePath: \web-back\src\utils\API\login\Login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ParameterizedContext } from 'koa';
import { getToken, checkToken } from '../../Token';
import { dataSource } from '../../../../data-source';
import * as jwt from 'jsonwebtoken';
import { UmsAdmin } from '../../../entities/UmsAdmin';
import { verifyEncipher } from '../../bcrypt';
import { UmsAdminLoginLog } from '../../../entities/UmsAdminLoginLog';

/**
 * @description:
 * @param {ParameterizedContext<any, Router.IRouterParamContext<any, {}>, any>} ctx
 * @return {*}
 */
const login = async (ctx: any) => {
  const { username, password } = ctx.request.body;
  const token = ctx.request.header['authorization'];
  const ipAddress = ctx.request.ip;
  if (token && checkToken(token)) {
    let tokenObj: jwt.JwtPayload = checkToken(token);
    // 查用户密码
    ctx.body = await selectUser(tokenObj.username, tokenObj.password, ipAddress);
  } else if (username && password) {
    ctx.body = await selectUser(username, password, ipAddress);
  } else ctx.body = {code: 401, message: "参数错误"}
  return ctx.body;
};

const selectUser = async (username: string, password: string, reqIp: string) => {
  let msg = {};
  await dataSource
    .initialize()
    .then(async () => {
      const umsAdminRepositroy = dataSource.getRepository(UmsAdmin);
      const userItem = await umsAdminRepositroy.findOne({
        where: { username: username },
      });
      if (await verifyEncipher(password, userItem.password)) {
        const umsAdminLoginLogRepository = dataSource.getRepository(UmsAdminLoginLog);
        const umsAdminLoginLog = new UmsAdminLoginLog();
        umsAdminLoginLog.ip = reqIp.substring(reqIp.lastIndexOf(':') + 1, reqIp.length);
        umsAdminLoginLog.adminId = userItem.id;
        umsAdminLoginLog.createTime = new Date();
        await umsAdminLoginLogRepository.save(umsAdminLoginLog);
        msg = {
          code: 200,
          token: getToken({ username: username, password: password, status: 0 }),
        };
      } else {
        msg = {
          code: 201,
        };
      }
    })
    .catch(error => console.log(error));
  dataSource.destroy();
  return msg;
};

export { login };
