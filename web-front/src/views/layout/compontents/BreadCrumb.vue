<!--
 * @Author: PBTL 2324009078@qq.com
 * @Date: 2023-10-23 15:55:10
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-15 02:02:26
 * @FilePath: \web-front\src\views\layout\compontents\BreadCrumb.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import router from '@/router';
import { HamburgerButton } from '@icon-park/vue-next';
import { ref, Ref } from 'vue';
import { RouteLocationMatched, useRoute } from 'vue-router';

const route = useRoute();

const breadCrumbList: Ref<Array<RouteLocationMatched>> = ref(new Array<RouteLocationMatched>());
router.afterEach(async (to, from) => {
  let List: Array<RouteLocationMatched> = route.matched.filter(
    item => item.meta && item.meta.title
  );
  if (List) {
    if (List[0].name !== 'home') {
      let newArray: Array<any> = [{ name: 'home', meta: { title: '首页' } }];
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

const emit = defineEmits(['on-click']);
const isCollapse: Ref<boolean> = ref<boolean>(false);
const handleIsCollapse = () => {
  isCollapse.value = !isCollapse.value;
  emit('on-click', isCollapse.value);
};
</script>

<template>
  <div class="bread-crumb-wrapper">
    <el-row>
      <el-col :span="23">
        <div @click="handleIsCollapse">
          <hamburger-button
            :style="{ transform: isCollapse ? `rotate(90deg)` : `rotate(0deg)` }"
            class="hamburger-button"
            theme="outline"
            size="24"
            fill="#333"
          />
        </div>
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
      <el-col :span="1">
        <el-avatar
          shape="square"
          size="default"
          src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
        />
      </el-col>
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
    margin-bottom: 30px;
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

      .hamburger-button {
        & {
          transition: all 0.3s ease-in;
          cursor: pointer;
        }
      }

      .el-breadcrumb {
        & {
          padding-left: 20px;
        }
      }
    }
  }
}
</style>
