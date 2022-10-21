import { RouteRecordRaw } from "vue-router";
import { createStore } from "vuex";

export default createStore({
  state: {
    adminRouters: new Array<RouteRecordRaw>(),
  },
  getters: {
    getAdminRouters: (state) => {
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
