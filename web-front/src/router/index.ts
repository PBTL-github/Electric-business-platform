import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    redirect: "/login",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/login/index.vue"),
        meta: {
          title: "登录",
        },
      },
    ],
  },
];

export const asyncRouterMap: Array<RouteRecordRaw> = [
  {
    path: "",
    component: () => import("@/views/layout/LayOut.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "首页", icon: "home" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouterMap,
});

export default router;
