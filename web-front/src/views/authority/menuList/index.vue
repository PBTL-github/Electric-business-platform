<!--
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-12 22:05:24
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-16 07:55:53
 * @FilePath: \web-front\src\views\authority\menuList\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import BlockWrapper from '@/components/block-wrapper/index.vue';
import router from '@/router';
import store from '@/store';
import { WarningFilled } from '@element-plus/icons-vue';
import { ElMessageBox, ElTable } from 'element-plus';
import { markRaw, reactive } from 'vue';
import { Ref, ref } from 'vue';
import { RouteRecordNormalized, RouteRecordRaw } from 'vue-router';

interface screen {
  currentPageNum: number;
  pageSize: number;
  selectRoleKeyWord?: string;
  dataTotal: number;
}

interface Role {
  id: number;
  roleName: string;
  roleDesc: string;
  userCount: number;
  addTime: string;
  isActiveRole: 0 | 1;
}

const roleScreen = reactive<screen>({
  currentPageNum: 1,
  pageSize: 10,
  dataTotal: 0,
});

const addRoleVisible: Ref<boolean> = ref<boolean>(false);
const addRoleForm = ref({
  roleName: '',
  roleDesc: '',
  isActiveRole: 1,
});
const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const routerList: Array<RouteRecordRaw> = store.getters.getAdminRouters[0].children;
const getAfterHandleRouterList = (): Array<RouteRecordRaw> => {
  let tempData = routerList.filter(item => item.name != 'home');
  let handleChildren = (data: Array<RouteRecordRaw>) => {
    data.forEach(item => {
      let regex = new RegExp('-', 'g');
      let str = item.meta.index as string;
      let result = str.match(regex);
      let count = !result ? 0 : result.length;
      if (count == 0) item.meta.level = '一级';
      else item.meta.level = '二级';
      if (item.children) {
        handleChildren(item.children);
      }
      return;
    });
  };
  handleChildren(tempData);
  return tempData;
};
const tableData: Ref<Array<RouteRecordRaw>> = ref<Array<RouteRecordRaw>>(
  getAfterHandleRouterList()
);

const handleSelectionChange = (val: Array<Role>) => {
  console.log(val);
};
const handleDelete = () => {
  ElMessageBox.confirm('是否要删除该角色？', '提示', {
    type: 'warning',
    icon: markRaw(WarningFilled),
  });
};
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

const handleIsActiveChange = (path: string, status: number) => {
  let findChildrenPath = (data: Array<RouteRecordRaw>) => {
    data.forEach(item => {
      if (item.path == path) {
        item.meta.isActive = status;
        return;
      }
      if (item.children) {
        findChildrenPath(item.children);
      }
    });
    return;
  };
  router.getRoutes().forEach(item => {
    if (item.path == path) {
      item.meta.isActive = status;
    }
    findChildrenPath(item.children);
  });
};

const handleViewSub = (data: Array<RouteRecordRaw>) => {
  tableData.value = data;
  console.log(tableData.value);
};
</script>

<template>
  <div class="app-contain">
    <block-wrapper class="data-list">
      <div class="data-list-title">
        <el-icon style="vertical-align: middle; margin-right: 10px">
          <Tickets />
        </el-icon>
        <span>数据列表</span>
        <el-button @click="" style="float: right; margin-right: 20px">添加</el-button>
      </div>
    </block-wrapper>

    <block-wrapper class="table-contain">
      <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        :border="true"
        @selection-change="handleSelectionChange"
      >
        <el-table-column property="meta.index" label="编号" width="100" :align="'center'" />
        <el-table-column property="meta.title" label="菜单名称" width="400" :align="'center'" />
        <el-table-column property="meta.level" label="菜单级数" width="100" :align="'center'" />
        <el-table-column property="name" label="前端名称" width="400" :align="'center'" />
        <el-table-column label="前端图标" width="100" :align="'center'">
          <template #default="scope">
            <el-icon><component :is="scope.row.meta.icon" /></el-icon>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" width="100" :align="'center'">
          <template #default="scope">
            <el-switch
              v-model="scope.row.meta.isActive"
              @change="handleIsActiveChange(scope.row.path, scope.row.meta.isActive)"
              :active-value="1"
              :inactive-value="0"
            />
          </template>
        </el-table-column>
        <el-table-column property="meta.sort" label="排序" width="100" :align="'center'" />
        <el-table-column label="设置" width="120" :align="'center'">
          <template #default="scope">
            <el-button
              type="primary"
              link
              @click="handleViewSub(scope.row.children)"
              :disabled="!scope.row.children"
            >
              查看下级
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="190" :align="'center'">
          <template #default="scope">
            <el-button type="primary" link @click="">编辑</el-button>
            <el-button type="primary" link @click="handleDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </block-wrapper>

    <div class="paging-contain">
      <el-pagination
        v-model:current-page="roleScreen.currentPageNum"
        v-model:page-size="roleScreen.pageSize"
        :page-sizes="[10, 15, 20]"
        :disabled="false"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="roleScreen.dataTotal"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-contain {
  & {
    padding: 20px;
  }

  .data-list {
    & {
      margin-top: 20px;
      padding: 20px;
    }

    .data-list-title {
      & {
        font-size: 16px;
      }
    }
  }
  .table-contain {
    & {
      margin-top: 20px;
    }
  }
  .paging-contain {
    & {
      float: right;
      margin-top: 20px;
    }
  }
}
</style>
