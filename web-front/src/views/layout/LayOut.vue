<script lang="ts" setup>
import AppMain from "./compontents/AppMain.vue";
import NavBar from "./compontents/NavBar.vue";
import BreadCrumb from "./compontents/BreadCrumb.vue";
</script>

<template>
  <nav-bar></nav-bar>
  <div class="main-contain">
    <bread-crumb></bread-crumb>
    <app-main></app-main>
  </div>
</template>

<style lang="scss" scoped>
.main-contain {
  & {
    position: relative;
    width: calc(100% - 200px);
    left: 200px;
  }
}
</style>
