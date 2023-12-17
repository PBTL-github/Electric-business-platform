/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-18 01:48:08
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-18 03:13:01
 * @FilePath: \web-back\src\utils\API\resourceClassifity\GetResource.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { checkToken } from '../../Token';
import { dataSource } from '../../../../data-source';
import { UmsResource } from '../../../entities/UmsResource';
import { UmsResourceCategory } from '../../../entities/UmsResourceCategory';

interface obj {
  [ids: string]: any;
}

export const resourceList = async (ctx: any) => {
  const { pageNum, pageSize } = ctx.request.body;
  const token = ctx.request.header['authorization'];
  if (token && checkToken(token)) {
    if (pageNum && pageSize) {
      ctx.body = await GetResourceList(pageNum, pageSize);
    } else {
      ctx.body = { code: 201, message: '传参错误' };
    }
  } else ctx.body = { code: 401, message: 'token不正确或不存在' };
  return ctx.body;
};

export const GetResourceList = async (pageNum: number, pageSize: number) => {
  let msg = {};
  await dataSource
    .initialize()
    .then(async () => {
      const umsResourceCategoryRepository = dataSource.getRepository(UmsResourceCategory);
      let umsResourceCategoryItem = await umsResourceCategoryRepository.find();
      const umsResource = dataSource.getRepository(UmsResource);
      let umsResourceItem: obj = await umsResource.find({
        skip: pageSize * (pageNum - 1),
        take: pageNum * pageSize,
      });
      umsResourceItem.forEach(item => {
        umsResourceCategoryItem.forEach(categoryItem => {
          if (item.categoryId == categoryItem.id) {
            item.categoryName = categoryItem.name;
          }
        });
      });
      msg = {
        code: 200,
        data: umsResourceItem,
      };
    })
    .catch(error => console.log(error));
  dataSource.destroy();
  return msg;
};
