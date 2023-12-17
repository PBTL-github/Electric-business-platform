/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-12 22:05:24
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-16 06:17:39
 * @FilePath: \web-front\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RouteRecordRaw } from 'vue-router';
import { createStore } from 'vuex';

export default createStore({
  state: {
    adminRouters: new Array<RouteRecordRaw>(),
  },
  getters: {
    getAdminRouters: state => {
      console.log(state.adminRouters);
      return state.adminRouters;
    },
  },
  mutations: {
    SET_ADMINROUTERS: (state, routerItem: RouteRecordRaw) => {
      state.adminRouters.push(routerItem);
    },
  },
  actions: {},
  modules: {},
});
