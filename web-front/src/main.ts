/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-12 22:05:24
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-17 19:48:05
 * @FilePath: \web-front\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import App from './App.vue';
import router, { asyncRouterMap } from './router';
import store from './store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import naive from 'naive-ui';
import 'element-plus/dist/index.css';
import '@icon-park/vue-next/styles/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { nProgressClose, nProgressStart } from './utils/nprogress';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

(function () {
  const token = localStorage.getItem('token');
  if (token) {
    asyncRouterMap.forEach(routerItem => {
      router.addRoute(routerItem);
      store.commit('SET_ADMINROUTERS', routerItem);
    });
  }
})();

app.use(store).use(router).use(ElementPlus, { locale: zhCn }).use(naive).mount('#app');

router.beforeEach((to, from, next) => {
  nProgressStart();
  next();
});

router.afterEach(() => {
  nProgressClose();
});
