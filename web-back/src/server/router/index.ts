import * as Router from "koa-router";
import { login } from "../../utils/login/Login";

const router: Router = new Router();

router.post("/login", login);

export default router;
