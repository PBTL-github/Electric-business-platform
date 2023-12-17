/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-18 00:08:59
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-18 03:12:42
 * @FilePath: \web-back\src\utils\API\user\GetUserList.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { checkToken } from '../../../utils/Token';
import { dataSource } from '../../../../data-source';
import { UmsRole } from '../../../entities/UmsRole';

export const roleList = async (ctx: any) => {
  const { pageNum, pageSize } = ctx.request.body;
  const token = ctx.request.header['authorization'];
  if (token && checkToken(token)) {
    if (pageNum && pageSize) {
      ctx.body = await GetRoleList(pageNum, pageSize);
    } else {
      ctx.body = { code: 201, message: '传参错误' };
    }
  } else ctx.body = { code: 401, message: 'token不正确或不存在' };
  return ctx.body;
};

export const GetRoleList = async (pageNum: number, pageSize: number) => {
  let msg = {};
  await dataSource
    .initialize()
    .then(async () => {
      const umsRoleRepositroy = dataSource.getRepository(UmsRole);
      let data = await umsRoleRepositroy.find({
        skip: pageSize * (pageNum - 1),
        take: pageSize * pageNum,
      });
      msg = {
        code: 200,
        data: data,
      };
    })
    .catch(error => console.log(error));
  dataSource.destroy();
  return msg;
};
