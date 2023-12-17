/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-17 16:41:14
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-17 17:52:00
 * @FilePath: \web-back\src\utils\bcrypt\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
 */
import * as bcryptjs from 'bcryptjs';

export const encipher = async (encipherString: string): Promise<string> => {
  const saltRounds = 10;
  return await bcryptjs.hash(encipherString, saltRounds);
};

export const verifyEncipher = async (
  unencipherString: string,
  encipherString: string
): Promise<boolean> => {
  return await bcryptjs.compare(unencipherString, encipherString);
};
