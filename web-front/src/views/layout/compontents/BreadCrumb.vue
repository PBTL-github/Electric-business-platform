<script lang="ts" setup>
import router from "@/router";
import { ref, Ref } from "vue";
import { RouteLocationMatched, useRoute } from "vue-router";

const route = useRoute();

const breadCrumbList: Ref<Array<RouteLocationMatched>> = ref(new Array<RouteLocationMatched>());
router.afterEach(async (to, from) => {
  let List: Array<RouteLocationMatched> = route.matched.filter(
    (item) => item.meta && item.meta.title
  );
  if (List) {
    if (List[0].name !== "home") {
      let newArray: Array<any> = [{ name: "home", meta: { title: "首页" } }];
      List = newArray.concat(List);
    }

    if (breadCrumbList.value.length === List.length) {
      for (let i = 0; i < List.length; i++) {
        if (breadCrumbList.value[i].name !== List[i].name) {
          breadCrumbList.value.length = i;
          break;
        }
      }
    }
    setTimeout(() => {
      breadCrumbList.value = List;
    }, 0);
  }
});
</script>

<template>
  <div class="bread-crumb-wrapper">
    <el-row>
      <el-col :span="18">
        <el-breadcrumb separator="/">
          <transition-group name="bread-crumb-item">
            <el-breadcrumb-item
              v-for="(item, idx) in breadCrumbList"
              :key="idx"
              :to="{ name: item.name }"
            >
              {{ item.meta.title }}
            </el-breadcrumb-item>
          </transition-group>
        </el-breadcrumb>
      </el-col>
      <el-col :span="6">asdfad</el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.bread-crumb-item {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }
  &-enter-from,
  &-leave-to {
    transform: translateX(30px);
    opacity: 0;
  }
}

.bread-crumb-wrapper {
  & {
    height: 50px;
    border-bottom: solid 0.5px #e6e6e6;
    padding-left: 20px;
  }

  .el-row {
    & {
      height: 100%;
    }
    .el-col {
      & {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
