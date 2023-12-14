<!--
 * @Author: PBTL 2324009078@qq.com
 * @Date: 2023-10-23 15:55:10
 * @LastEditors: PBTL 2324009078@qq.com
 * @LastEditTime: 2023-11-30 17:17:00
 * @FilePath: \web-front\src\views\layout\LayOut.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { Ref, ref } from 'vue';
import AppMain from './compontents/AppMain.vue';
import NavBar from './compontents/NavBar.vue';
import BreadCrumb from './compontents/BreadCrumb.vue';

const isCollapseProp: Ref<boolean> = ref<boolean>(false);
const elAsideWidth: Ref<string> = ref<string>('180px');

const handelIsCollapse = (isCollapse: boolean) => {
  isCollapseProp.value = isCollapse;
  if (isCollapseProp.value) {
    elAsideWidth.value = '60px';
  } else {
    elAsideWidth.value = '180px';
  }
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="`${elAsideWidth}`">
        <nav-bar :is-collapse="isCollapseProp"></nav-bar>
      </el-aside>
      <el-container :style="{width: `calc(100% - ${isCollapseProp? '60px' : '180px'})`, left: `${isCollapseProp? '60px' : '180px'}`}">
        <el-header><bread-crumb @on-click="handelIsCollapse"></bread-crumb></el-header>
        <el-main><app-main></app-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  .el-container {
    & {
      display: block;
    }
    .el-aside {
      & {
        position: relative;
      }
    }
    .el-container {
      & {
        transition: all .4s ease-in-out;
        display: block;
        position: relative;
      }
      .el-header {
        & {
          padding: 0;
          margin: 0;
        }
      }
    }
  }
}
</style>
