<!--
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-12 22:05:24
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-16 21:46:04
 * @FilePath: \web-front\src\views\authority\resourceList\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import router from '@/router';
import BlockWrapper from '@/components/block-wrapper/index.vue';
import { WarningFilled } from '@element-plus/icons-vue';
import { ElMessageBox, ElTable } from 'element-plus';
import { Ref, markRaw, reactive, ref } from 'vue';

// 筛选
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
const tableData: Ref<Array<Role>> = ref<Array<Role>>([
  {
    id: 1,
    roleName: '',
    roleDesc: '',
    userCount: 0,
    addTime: '2018-12-12',
    isActiveRole: 1,
  },
  {
    id: 2,
    roleName: '',
    roleDesc: '',
    userCount: 0,
    addTime: '2018-12-12',
    isActiveRole: 1,
  },
]);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

/**
 * 处理选项发生变化时的情况
 * @param val
 */
const handleSelectionChange = (val: Array<Role>) => {
  console.log(val);
};

const editVisible: Ref<boolean> = ref<boolean>(false);
const editForm: Ref<Role> = ref<Role>();
const handleEditRole = (role: Role) => {
  console.log(role);
  editVisible.value = true;
  editForm.value = role;
};
const handleDelete = () => {
  ElMessageBox.confirm('是否要删除该角色？', '提示', {
    type: 'warning',
    icon: markRaw(WarningFilled),
  });
};

const handleResourceClassify = () => {
  router;
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
        <el-button
          @click="addRoleVisible = !addRoleVisible"
          style="float: right; margin-right: 20px"
        >
          添加
        </el-button>
      </div>
    </block-wrapper>

    <el-dialog class="add-classifity" v-model="addRoleVisible" title="添加分类" width="745">
      <el-form :model="addRoleForm" class="add-classifity-form">
        <el-form-item label="名称：" prop="resourceName" :label-width="140">
          <el-input v-model="addRoleForm.roleName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="排序：" prop="resourceName" :label-width="140">
          <el-input v-model="addRoleForm.roleName" autocomplete="off" placeholder="0" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addRoleVisible = false">取消</el-button>
          <el-button type="primary" @click="addRoleVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>

    <block-wrapper class="table-contain">
      <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        :border="true"
        @selection-change="handleSelectionChange"
      >
        <!-- <el-table-column type="selection" width="55" /> -->
        <el-table-column property="id" label="编号" width="100" :align="'center'" />
        <!-- <template #default="scope">{{ scope.row.date }}</template> -->
        <!-- </el-table-column> -->
        <el-table-column property="classifityName" label="名称" width="405" :align="'center'" />
        <el-table-column property="createTime" label="创建时间" width="405" :align="'center'" />
        <el-table-column property="sort" label="排序" width="400" :align="'center'" />
        <el-table-column property="addTime" label="添加时间" width="160" :align="'center'" />
        <el-table-column label="操作" width="140" :align="'center'">
          <template #default="scope">
            <el-button size="small" type="primary" link @click="addRoleVisible = !addRoleVisible">
              编辑
            </el-button>
            <el-button size="small" type="primary" link @click="handleDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">
          Toggle selection status of second and third rows
        </el-button>
        <el-button @click="toggleSelection()">Clear selection</el-button>
      </div> -->
    </block-wrapper>

    <el-dialog v-model="editVisible" title="编辑角色">
      <el-form :model="editForm">
        <el-form-item label="角色名称：" :label-width="140">
          <el-input style="width: 250px" v-model="editForm.roleName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="描述：" :label-width="140">
          <el-input
            v-model="editForm.roleDesc"
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 4 }"
            input-style="width: 250px;"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="是否启用：" prop="isActiveUser" :label-width="140">
          <el-radio-group v-model="editForm.isActiveRole" class="ml-4">
            <el-radio :label="1" size="large">是</el-radio>
            <el-radio :label="0" size="large">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editVisible = false">取消</el-button>
          <el-button type="primary" @click="editVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>

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
  .search-filter {
    & {
      padding: 20px;
    }

    .search-filter-title {
      & {
        font-size: 16px;
      }
    }

    .search-filter-form {
      & {
        margin-top: 30px;
      }

      .el-form-item {
        & {
          width: 360px;
        }
      }
    }
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
  .add-classifity {
    .add-classifity-form {
      .el-form-item {
        .el-input {
          width: 250px;
        }
      }
    }
    .dialog-footer {
      margin-top: 20px;
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
