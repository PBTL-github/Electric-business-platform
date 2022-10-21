<script lang="ts" setup>
import router from "@/router";
import store from "@/store";
import { Ref, reactive } from "vue";
import { RouteRecordName, RouteRecordRaw } from "vue-router";

const menuList: Ref<Array<RouteRecordRaw>> = reactive(store.getters.getAdminRouters);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const routerPush = (name: RouteRecordName) => {
  router.push({ name });
};
</script>

<template>
  <nav class="menu-wrapper">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          :default-active="($route.meta.index as string)"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <template v-for="(menuItem, idx) in menuList[0].children" :key="idx">
            <el-menu-item
              v-if="!menuItem.children"
              :index="`${idx}`"
              @click="routerPush(menuItem.name)"
            >
              <el-icon><component :is="menuItem.meta?.icon" /></el-icon>
              <span>{{ menuItem.meta?.title }}</span>
            </el-menu-item>
            <el-sub-menu v-else :index="`${idx}`">
              <template #title>
                <el-icon><component :is="menuItem.meta?.icon" /></el-icon>
                <span>{{ menuItem.meta?.title }}</span>
              </template>
              <template v-if="menuItem.children">
                <el-menu-item
                  v-for="(item, index) in menuItem.children"
                  :index="`${idx}-${index}`"
                  :key="index"
                  @click="routerPush(item.name)"
                >
                  <el-icon><component :is="item.meta?.icon" /></el-icon>
                  <span>{{ item.meta?.title }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </nav>
</template>

<style lang="scss" scoped>
.menu-wrapper {
  & {
    position: fixed;
    width: 200px;
  }

  .tac {
    & {
      width: 100%;
    }

    // .el-col {
    //   & {
    //     width: 100%;
    //     max-width: 100%;
    //   }
    // }
  }
}
</style>
