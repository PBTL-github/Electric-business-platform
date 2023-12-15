<!--
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-12 22:05:24
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-15 15:04:15
 * @FilePath: \web-front\src\views\authority\userList\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import BlockWrapper from '@/components/block-wrapper/index.vue';
import { WarningFilled } from '@element-plus/icons-vue';
import { ElMessageBox, ElTable } from 'element-plus';
import { markRaw, reactive } from 'vue';
import { Ref, ref } from 'vue';

// 筛选
interface screen {
  currentPageNum: number;
  pageSize: number;
  selectUserKeyWord?: string;
  dataTotal: number;
}
const userScreen = reactive<screen>({
  currentPageNum: 1,
  pageSize: 10,
  dataTotal: 0,
});

interface User {
  date: string;
  name: string;
  address: string;
  isOn: number;
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref<User[]>([]);
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach(row => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-commentr
      multipleTableRef.value!.toggleRowSelection(row, undefined);
    });
  } else {
    multipleTableRef.value!.clearSelection();
  }
};
/**
 * 处理选项发生变化时的情况
 * @param val 
 */
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val;
};

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    isOn: 1,
  },
];

const addUserVisible: Ref<boolean> = ref<boolean>(false);
const addUserForm = ref({
  username: '',
  name: '',
  email: '',
  password: '',
  UserDesc: '',
  isActiveUser: 1,
});
const assignRolesVisible: Ref<boolean> = ref<boolean>(false);
const assignRolesForm = ref();

const editVisible: Ref<boolean> = ref<boolean>(false);
const editForm = ref();

const handleDelete = () => {
  ElMessageBox.confirm('是否要删除该用户？', '提示', {
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
</script>

<template>
  <div class="app-contain">
    <block-wrapper class="search-filter">
      <div class="search-filter-title">
        <el-icon style="vertical-align: middle; margin-right: 10px">
          <Search />
        </el-icon>
        <span>筛选搜索</span>
        <el-button type="primary" style="float: right">查询结果</el-button>
        <el-button
          style="float: right; margin-right: 20px"
          @click="userScreen.selectUserKeyWord = ''"
        >
          重置
        </el-button>
      </div>
      <el-form :model="userScreen" label-width="140px" :inline="true" class="search-filter-form">
        <el-form-item label="输入搜索：">
          <el-input v-model="userScreen.selectUserKeyWord" placeholder="账号/姓名" />
        </el-form-item>
      </el-form>
    </block-wrapper>

    <block-wrapper class="data-list">
      <div class="data-list-title">
        <el-icon style="vertical-align: middle; margin-right: 10px">
          <Tickets />
        </el-icon>
        <span>数据列表</span>
        <el-button
          @click="addUserVisible = !addUserVisible"
          style="float: right; margin-right: 20px"
        >
          添加
        </el-button>
      </div>
    </block-wrapper>

    <el-dialog class="add-user" v-model="addUserVisible" title="添加用户" width="745">
      <el-form :model="addUserForm" class="add-user-form">
        <el-form-item label="账号：" prop="username" :label-width="140">
          <el-input v-model="addUserForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="姓名：" prop="name" :label-width="140">
          <el-input v-model="addUserForm.name" autocomplete="off" />
          <!-- <el-select v-model="assignRolesForm.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select> -->
        </el-form-item>
        <el-form-item label="邮箱：" prop="email" :label-width="140">
          <el-input v-model="addUserForm.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码：" prop="password" :label-width="140">
          <el-input v-model="addUserForm.password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="备注：" prop="user-desc" :label-width="140">
          <el-input
            v-model="addUserForm.UserDesc"
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 4 }"
            input-style="width: 250px;"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="是否启用：" prop="isActiveUser" :label-width="140">
          <el-radio-group v-model="addUserForm.isActiveUser" class="ml-4">
            <el-radio :label="1" size="large">是</el-radio>
            <el-radio :label="0" size="large">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addUserVisible = false">取消</el-button>
          <el-button type="primary" @click="addUserVisible = false">确定</el-button>
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
        <el-table-column property="username" label="账号" width="290" :align="'center'" />
        <el-table-column property="name" label="姓名" width="290" :align="'center'" />
        <el-table-column property="email" label="邮箱" width="290" :align="'center'" />
        <el-table-column property="addTime" label="添加时间" width="160" :align="'center'" />
        <el-table-column property="lastLoginTime" label="最后登录" width="160" :align="'center'" />
        <el-table-column label="是否启用" width="140" :align="'center'">
          <template #default="scope">
            <el-switch v-model="scope.row.isOn" :active-value="1" :inactive-value="0" />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" :align="'center'">
          <template #default="scope">
            <el-button type="primary" link @click="assignRolesVisible = !assignRolesVisible">
              分配角色
            </el-button>
            <el-button type="primary" link @click="editVisible = !editVisible">编辑</el-button>
            <el-button type="primary" link @click="handleDelete">删除</el-button>
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

    <el-dialog v-model="assignRolesVisible" title="分配角色">
      <el-form :model="assignRolesForm">
        <el-form-item label="Promotion name" :label-width="140">
          <!-- <el-input v-model="assignRolesForm.name" autocomplete="off" /> -->
        </el-form-item>
        <el-form-item label="Zones" :label-width="140">
          <!-- <el-select v-model="assignRolesForm.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select> -->
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="assignRolesVisible = false">Cancel</el-button>
          <el-button type="primary" @click="assignRolesVisible = false">Confirm</el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog v-model="editVisible" title="编辑用户">
      <el-form :model="editForm">
        <el-form-item label="Promotion name" :label-width="140">
          <!-- <el-input v-model="assignRolesForm.name" autocomplete="off" /> -->
        </el-form-item>
        <el-form-item label="Zones" :label-width="140">
          <!-- <el-select v-model="assignRolesForm.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select> -->
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="assignRolesVisible = false">Cancel</el-button>
          <el-button type="primary" @click="assignRolesVisible = false">Confirm</el-button>
        </span>
      </template>
    </el-dialog>

    <div class="paging-contain">
      <el-pagination
        v-model:current-page="userScreen.currentPageNum"
        v-model:page-size="userScreen.pageSize"
        :page-sizes="[10, 15, 20]"
        :disabled="false"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userScreen.dataTotal"
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

  .add-user {
    .add-user-form {
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
