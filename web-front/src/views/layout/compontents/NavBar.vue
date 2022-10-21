<script lang="ts" setup>
import router from "@/router";
import store from "@/store";
import { Ref, reactive } from "vue";
import { RouteRecordName, RouteRecordRaw } from "vue-router";

const menuList: Ref<Array<RouteRecordRaw>> = reactive(store.getters.getAdminRouters);
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};

const routerPush = (name: RouteRecordName) => {
  router.push({ name });
};
</script>

<template>
  <el-scrollbar class="scroll">
    <nav class="menu-wrapper">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            active-text-color="#409eff"
            background-color="#304156"
            :default-active="($route.meta.index as string)"
            text-color="#bfcbd9"
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
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.scroll {
  & {
    width: 200px;
    height: 100vh;
    background-color: #304156;
    position: fixed;
  }
  .menu-wrapper {
    & {
      width: 100%;
    }

    .tac {
      & {
        width: 100%;
      }

      .el-col {
        & {
          width: 100%;
        }
        .el-menu {
          & {
            width: 100%;
          }
          .el-sub-menu {
            & {
              width: 100%;
            }
            .el-menu-item {
              & {
                width: 100%;
                background-color: #263445 !important;
              }

              &:hover {
                background-color: #1f2d3d !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
