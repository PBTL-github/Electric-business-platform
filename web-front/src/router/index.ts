import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { ElNotification } from "element-plus";

const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: "/",
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
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      if (token) next({ name: "home" });
      else next();
    },
  },
];

export const asyncRouterMap: Array<RouteRecordRaw> = [
  {
    path: "/admin",
    name: "admin",
    redirect: "/admin/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: { index: "0", title: "首页", icon: "HomeFilled" },
      },
      {
        path: "products",
        name: "products",
        meta: { index: "1", title: "商品", icon: "HomeFilled" },
        redirect: (to) => {
          return `${to.fullPath}/productList`;
        },
        children: [
          {
            path: "productList",
            name: "productList",
            component: () => import("@/views/products/productList/index.vue"),
            meta: { index: "1-0", title: "商品列表", icon: "HomeFilled" },
          },
          {
            path: "addProduct",
            name: "addProduct",
            component: () => import("@/views/products/addProduct/index.vue"),
            meta: { index: "1-1", title: "添加商品", icon: "HomeFilled" },
          },
          {
            path: "classificationOfProduct",
            name: "classificationOfProduct",
            component: () => import("@/views/products/classificationOfProduct/index.vue"),
            meta: { index: "1-2", title: "商品分类", icon: "HomeFilled" },
          },
          {
            path: "productType",
            name: "productType",
            component: () => import("@/views/products/productType/index.vue"),
            meta: { index: "1-3", title: "商品类型", icon: "HomeFilled" },
          },
          {
            path: "brandManagement",
            name: "brandManagement",
            component: () => import("@/views/products/brandManagement/index.vue"),
            meta: { index: "1-4", title: "品牌管理", icon: "HomeFilled" },
          },
        ],
      },
      {
        path: "order",
        name: "order",
        meta: { index: "2", title: "订单", icon: "HomeFilled" },
        redirect: (to) => {
          return `${to.fullPath}/orderList`;
        },
        children: [
          {
            path: "orderList",
            name: "orderList",
            component: () => import("@/views/order/orderList/index.vue"),
            meta: { index: "2-0", title: "订单列表", icon: "HomeFilled" },
          },
          {
            path: "orderSetting",
            name: "orderSetting",
            component: () => import("@/views/order/orderSetting/index.vue"),
            meta: { index: "2-1", title: "订单设置", icon: "HomeFilled" },
          },
          {
            path: "handingReturn",
            name: "handingReturn",
            component: () => import("@/views/order/handingReturn/index.vue"),
            meta: { index: "2-2", title: "退货申请处理", icon: "HomeFilled" },
          },
          {
            path: "handingReason",
            name: "handingReason",
            component: () => import("@/views/order/handingReason/index.vue"),
            meta: { index: "2-3", title: "退货原因设置", icon: "HomeFilled" },
          },
        ],
      },
      {
        path: "marketing",
        name: "marketing",
        meta: { index: "3", title: "营销", icon: "HomeFilled" },
        redirect: (to) => {
          return `${to.fullPath}/killerActivities`;
        },
        children: [
          {
            path: "killerActivities",
            name: "killerActivities",
            component: () => import("@/views/marketing/killerActivities/index.vue"),
            meta: { index: "3-0", title: "秒杀活动列表", icon: "HomeFilled" },
          },
          {
            path: "couponList",
            name: "couponList",
            component: () => import("@/views/marketing/couponList/index.vue"),
            meta: { index: "3-3", title: "优惠卷列表", icon: "HomeFilled" },
          },
          {
            path: "brandRecommendation",
            name: "brandRecommendation",
            component: () => import("@/views/marketing/killerActivities/index.vue"),
            meta: { index: "3-4", title: "秒杀活动列表", icon: "HomeFilled" },
          },
          {
            path: "newProductRecommendation",
            name: "newProductRecommendation",
            component: () => import("@/views/marketing/newProductRecommendation/index.vue"),
            meta: { index: "3-5", title: "新品推荐", icon: "HomeFilled" },
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouterMap,
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0 && !to.name) {
    ElNotification({
      title: "404 当前导航路由地址发生错误",
      message: `[${to.fullPath}] 没有找到此路由的相关页面`,
      type: "error",
      duration: 7000,
    });
    next({ name: "login" });
  } else next();
});

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title as string;
});
