/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-10-23 15:55:10
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-18 03:14:09
 * @FilePath: \web-back\src\utils\API\login\Login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getToken, checkToken } from '../../Token';
import { dataSource } from '../../../../data-source';
import { UmsAdmin } from '../../../entities/UmsAdmin';
import { encipher } from '../../bcrypt';

interface addUser {
  username: string;
  password: string;
  nick_name: string;
  icon?: string;
  email?: string;
  note?: string;
}

/**
 * @description:
 * @param {ParameterizedContext<any, Router.IRouterParamContext<any, {}>, any>} ctx
 * @return {*}
 */
const register = async (ctx: any) => {
  const { username, password, icon, email, nick_name, note } = ctx.request.body;
  const token = ctx.request.header['authorization'];
  if (token && checkToken(token)) {
    ctx.body = await registerUser({ username, password, icon, email, nick_name, note });
  } else ctx.body = { code: 401, message: 'token错误或者失效' };

  return ctx.body;
};

const registerUser = async (userObj: addUser) => {
  let msg = {};
  await dataSource
    .initialize()
    .then(async () => {
      const umsAdminRepositroy = dataSource.getRepository(UmsAdmin);
      const userItem = new UmsAdmin();
      userItem.username = userObj.username;
      userItem.password = await encipher(userObj.password);
      userItem.nickName = userItem.nickName;
      if (userObj.icon) userItem.icon = userObj.icon;
      if (userObj.email) userItem.email = userObj.email;
      if (userObj.note) userItem.note = userObj.note;
      userItem.nickName = userObj.nick_name;
      userItem.createTime = new Date();
      await umsAdminRepositroy.save(userItem);
      // 还需要去ums_role中添加角色

      msg = {
        code: 200,
        message: '用户添加成功',
      };
      //   } else {
      //     msg = {
      //       code: 201,
      //     };
      //   }
    })
    .catch(error => console.log(error));
  dataSource.destroy();
  return msg;
};

export { register };
