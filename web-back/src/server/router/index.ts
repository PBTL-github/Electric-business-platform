/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-10-23 15:55:10
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-18 02:51:26
 * @FilePath: \web-back\src\server\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as Router from 'koa-router';
import { login } from '../../utils/API/user/Login';
import { userList } from '../../utils/API/user/GetUserList';
import { roleList } from '../../utils/API/role/GetRoleList';
import { resourceList } from '../../utils/API/resourceClassifity/GetResourceList';
import { GetResourceClassifityListAll } from '../../utils/API/resourceClassifity/GetResourceClassifity';
import { register } from '../../utils/API/user/RegisterUser';

const router: Router = new Router();

router
  .post('/login', login)
  .get('/admin/list', userList)
  .get('/role/list', roleList)
  .get('/resource/listAll', resourceList)
  .get('/resourceClassifity/list', GetResourceClassifityListAll)
  .post('/admin/register', register);

export default router;
