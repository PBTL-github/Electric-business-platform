<script lang="ts" setup>
import router from "@/router";
import { ref } from "vue";
const ispush = ref(function () {
  router.push({ name: "productList" });
});
</script>

<template>
  <h1>adfadfasf</h1>
  <h1>adfadfasf</h1>
  <h1>adfadfasf</h1>
  <h1>adfadfasf</h1>
  <h1>adfadfasf</h1>
  <button type="button" @click="ispush">submit</button>
</template>

<style lang="scss" scoped></style>
