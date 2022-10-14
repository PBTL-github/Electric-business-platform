import { ParameterizedContext } from "koa";
import Router = require("koa-router");
import { getToken } from "./Token";
import { ElectricUser } from "../../databases/electric_user/data-source";
import { User } from "../../databases/electric_user/entity";

const userRepository = ElectricUser.getRepository(User);

/**
 * @description:
 * @param {ParameterizedContext<any, Router.IRouterParamContext<any, {}>, any>} ctx
 * @return {*}
 */
const login = async (ctx: any) => {
  const { username, password } = ctx.request.body;
  if (username && password) {
    ctx.body = await selectUser(username, password);
  }
};

const selectUser = async (username: string, password: string) => {
  let msg = {};
  await ElectricUser.initialize()
    .then(async () => {
      const userItem = await userRepository.findOne({
        where: { username: username, password: password },
      });
      if (userItem) {
        const uuid = userItem.uuid;
        const token = getToken(uuid);
        userItem.token = token;
        await userRepository.save(userItem);
        msg = {
          code: 200,
          token: token,
        };
      } else {
        msg = {
          code: 201,
        };
      }
    })
    .catch((error) => console.log(error));

  ElectricUser.destroy();

  return msg;
};

export { login };
