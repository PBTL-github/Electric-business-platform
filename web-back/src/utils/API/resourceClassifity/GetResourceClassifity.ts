/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-18 01:35:30
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-18 01:49:18
 * @FilePath: \web-back\src\utils\API\resourceClassifity\GetResourceClassifity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { checkToken } from '../../../utils/Token';
import { dataSource } from '../../../../data-source';
import { UmsResourceCategory } from '../../../entities/UmsResourceCategory';

export const resourceClassifityListAll = async (ctx: any) => {
  const token = ctx.request.header['authorization'];
  if (token && checkToken(token)) {
    ctx.body = await GetResourceClassifityListAll();
  } else ctx.body = { code: 401, message: 'token不正确或不存在' };
  return ctx.body;
};

export const GetResourceClassifityListAll = async () => {
  let msg = {};
  await dataSource
    .initialize()
    .then(async () => {
      const umsResourceCategoryRepository = dataSource.getRepository(UmsResourceCategory);
      let data = await umsResourceCategoryRepository.find();
      msg = {
        code: 200,
        data: data,
      };
    })
    .catch(error => console.log(error));
  dataSource.destroy();
  return msg;
};
