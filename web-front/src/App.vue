<script lang="ts" setup>
import Login from "./views/login/index.vue";
import LayOut from "./views/layout/LayOut.vue";
import { Ref, ref } from "vue";
import router, { asyncRouterMap } from "./router";

const isLogin: Ref<boolean> = ref(localStorage.getItem("token") ? false : true);

const closeLogin = async (val: boolean) => {
  asyncRouterMap.forEach((routerItem) => {
    router.addRoute(routerItem);
  });
  router.push("/admin/home");
  isLogin.value = val;
};
</script>

<template>
  <Login v-if="isLogin" @closeLogin="closeLogin"></Login>
  <LayOut v-else></LayOut>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
</style>
