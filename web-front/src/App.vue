<!--
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-12 22:05:24
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-17 21:40:37
 * @FilePath: \web-front\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import Login from './views/login/index.vue';
import LayOut from './views/layout/LayOut.vue';
import { Ref, ref } from 'vue';
import router from './router';

const isLogin: Ref<boolean> = ref(localStorage.getItem('token') ? false : true);

const closeLogin = async (val: boolean) => {
  router.go(0);
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
  box-sizing: inherit;
}
:after,
:before {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  min-height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
</style>
