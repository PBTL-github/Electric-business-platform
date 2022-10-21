import { createApp } from "vue";
import App from "./App.vue";
import router, { asyncRouterMap } from "./router";
import store from "./store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

(function () {
  const token = localStorage.getItem("token");
  if (token) {
    asyncRouterMap.forEach((routerItem) => {
      router.addRoute(routerItem);
      store.commit("SET_ADMINROUTERS", routerItem);
    });
  }
})();

app.use(store).use(router).use(ElementPlus).mount("#app");
