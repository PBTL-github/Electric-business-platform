<script lang="ts" setup>
import BlockWrapper from "@/components/block-wrapper/index.vue";
import { ref, reactive, Ref } from "vue";
import { ListQuery, defaultListQuery, StateTableData } from "./components/interface";
import { stateData } from "./components/stateData";
import { batchOperations } from "./components/batchOperation";
import { PagingOption } from "./components/pagingOptions";
import { ElMessage, ElMessageBox } from "element-plus";

/**
 * @description: 商品分类
 */
const proAttrClassifitionOption = reactive([
  {
    value: "guide",
    label: "Guide",
    children: [
      {
        value: "disciplines",
        label: "Disciplines",
        children: [
          {
            value: "consistency",
            label: "Consistency",
          },
          {
            value: "feedback",
            label: "Feedback",
          },
          {
            value: "efficiency",
            label: "Efficiency",
          },
          {
            value: "controllability",
            label: "Controllability",
          },
        ],
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "side nav",
            label: "Side Navigation",
          },
          {
            value: "top nav",
            label: "Top Navigation",
          },
        ],
      },
    ],
  },
]);

/**
 * @description: 上架状态
 */
const publishStateOption = reactive([
  {
    value: 1,
    label: "上架",
  },
  {
    value: 0,
    label: "下架",
  },
]);

/**
 * @description: 审核状态
 */
const reviewStateOption = reactive([
  {
    value: 1,
    label: "审核通过",
  },
  {
    value: 0,
    label: "未审核",
  },
]);

/**
 * @description: 查询对象
 */
const listQuery: ListQuery = reactive(Object.assign({}, defaultListQuery));
const tableData: Ref<Array<Array<StateTableData>>> = ref();
const batchOperateType: Ref<string> = ref();
const multiSelection: Array<StateTableData> = new Array<StateTableData>();

const resetListQuery = () => {
  Object.assign(listQuery, defaultListQuery);
};

/**
 * @description: 分页选项
 */
const pagingOptions: PagingOption = reactive({
  currentPage: 1,
  pageSize: 5,
  pageSizes: [5, 10, 15],
  total: stateData.length,
  background: true,
  layout: "total, sizes, prev, pager, next, jumper",
  /**
   * @description: 处理每页数目更改
   * @return {*}
   */
  handleSizeChange: (): void => {
    let totalPageData = new Array<Array<StateTableData>>(
      Math.ceil(stateData.length / pagingOptions.pageSize)
    );
    for (let i = 0; i < totalPageData.length; i++) {
      totalPageData[i] = stateData.slice(
        pagingOptions.pageSize * i,
        pagingOptions.pageSize * (i + 1)
      );
    }
    tableData.value = totalPageData;
  },
});

const handleSelectionChange = (val: Array<StateTableData>): void => {
  multiSelection.length = 0;
  Object.assign(multiSelection, val);
};

/**
 * @description: 更新商品上架状态
 * @param {1 | 0} isOn: 1为激活， 0为不激活
 * @param {Array<string>} ids： 需要更新的索引数组
 */
const updatePulishState = (isOn: 1 | 0, ids: Array<string>) => {
  for (let i = 0; i < ids.length; i++) {
    stateData.forEach((item) => {
      if (item.id === ids[i]) {
        item.publishState = isOn;
      }
    });
  }
  pagingOptions.handleSizeChange();
};

/**
 * @description: 更新商品推荐状态
 * @param {1 | 0} isOn: 1为激活， 0为不激活
 * @param {Array<string>} ids： 需要更新的索引数组
 */
const updateRecommendState = (isOn: 1 | 0, ids: Array<string>) => {
  for (let i = 0; i < ids.length; i++) {
    stateData.forEach((item) => {
      if (item.id === ids[i]) {
        item.recommandState = isOn;
      }
    });
  }
  pagingOptions.handleSizeChange();
};

/**
 * @description: 更新商品新品状态
 * @param {1 | 0} isOn: 1为激活， 0为不激活
 * @param {Array<string>} ids： 需要更新的索引数组
 */
const updateNewProState = (isOn: 1 | 0, ids: Array<string>) => {
  for (let i = 0; i < ids.length; i++) {
    stateData.forEach((item) => {
      if (item.id === ids[i]) {
        item.newProState = isOn;
      }
    });
  }
  pagingOptions.handleSizeChange();
};

const handleBatch = () => {
  if (!batchOperateType.value) {
    ElMessage({
      message: "请选择操作类型",
      type: "warning",
      duration: 1500,
    });
    return;
  }
  if (multiSelection.length < 1) {
    ElMessage({
      message: "请选择要操作的商品",
      type: "warning",
      duration: 1500,
    });
    return;
  }
  ElMessageBox({
    title: "提示",
    message: "是否要进行该批量操作?",
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "确定",
    cancelButtonText: "取消",
  }).then(() => {
    let ids = new Array<string>(multiSelection.length);
    for (let i = 0; i < multiSelection.length; i++) {
      ids[i] = multiSelection[i].id;
    }
    switch (batchOperateType.value) {
      case "publishOn":
        updatePulishState(1, ids);
        break;
      case "publishOff":
        updatePulishState(0, ids);
        break;
      case "recommendOn":
        updateRecommendState(1, ids);
        break;
      case "recommendOff":
        updateRecommendState(0, ids);
        break;
      case "newProOn":
        updateNewProState(1, ids);
        break;
      case "newProOff":
        updateNewProState(0, ids);
        break;
      case "transferCategory":
        break;
      case "recycle":
        break;
    }
  });
};

pagingOptions.handleSizeChange();
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
        <el-button @click="resetListQuery" style="float: right; margin-right: 20px">重置</el-button>
      </div>
      <el-form :model="listQuery" label-width="140px" :inline="true" class="search-filter-form">
        <el-form-item label="输入搜索：">
          <el-input v-model="listQuery.proKeyWord" placeholder="商品名称" />
        </el-form-item>
        <el-form-item label="商品货号：">
          <el-input v-model="listQuery.proNO" placeholder="商品货号" />
        </el-form-item>
        <el-form-item label="商品分类：">
          <el-cascader
            v-model="listQuery.proAttrbuteClassifitionID"
            clearable
            :options="proAttrClassifitionOption"
          />
        </el-form-item>
        <el-form-item label="商品品牌：">
          <el-select v-model="listQuery.brandID" clearable placeholder="请选择品牌">
            <el-option v-for="i in 10" label="Zone one" value="shanghai" />
          </el-select>
        </el-form-item>
        <el-form-item label="上架状态：">
          <el-select v-model="listQuery.publishState" clearable placeholder="全部">
            <el-option
              v-for="(item, idx) in publishStateOption"
              :key="idx"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态：">
          <el-select v-model="listQuery.reviewState" clearable placeholder="全部">
            <el-option
              v-for="(item, idx) in reviewStateOption"
              :key="idx"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
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
          @click="$router.push({ name: 'addProduct' })"
          style="float: right; margin-right: 20px"
          >添加</el-button
        >
      </div>
    </block-wrapper>

    <block-wrapper class="table-contain">
      <el-table
        @selection-change="handleSelectionChange"
        :data="tableData[pagingOptions.currentPage - 1]"
        style="width: 100%"
        border
      >
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template #default="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="商品图片" width="120" align="center">
          <template #default="scope">
            <img style="height: 80px" :src="scope.row.pic" />
          </template>
        </el-table-column>
        <el-table-column label="商品名称" align="center">
          <template #default="scope">
            <p>{{ scope.row.name }}</p>
            <p>品牌: {{ scope.row.brandName }}</p>
          </template>
        </el-table-column>
        <el-table-column label="价格/货号" width="120" align="center">
          <template #default="scope">
            <p>价格：￥{{ scope.row.price }}</p>
            <p>货号：{{ scope.row.proNO }}</p>
          </template>
        </el-table-column>
        <el-table-column label="标签" width="140" align="center">
          <template #default="scope">
            <p>
              上架：
              <el-switch v-model="scope.row.publishState" :active-value="1" :inactive-value="0" />
            </p>
            <p>
              新品：
              <el-switch v-model="scope.row.newProState" :active-value="1" :inactive-value="0" />
            </p>
            <p>
              推荐：
              <el-switch v-model="scope.row.recommandState" :active-value="1" :inactive-value="0" />
            </p>
          </template>
        </el-table-column>
        <el-table-column label="排序" width="100" align="center">
          <template #default="scope">
            {{ scope.row.sort }}
          </template>
        </el-table-column>
        <el-table-column label="SKU库存" width="100" align="center"></el-table-column>
        <el-table-column label="销量" width="100" align="center">
          <template #default="scope">
            {{ scope.row.sales }}
          </template>
        </el-table-column>
        <el-table-column label="审核状态" width="100" align="center">
          <template #default="scope">
            <p>{{ scope.row.reviewState }}</p>
            <p>
              <el-button type="primary" link>审核详情</el-button>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template #default="scope">
            <p style="margin-bottom: 5px">
              <el-button size="small">查看</el-button>
              <el-button size="small">编辑</el-button>
            </p>
            <p>
              <el-button size="small">日志</el-button>
              <el-button size="small" type="danger">删除</el-button>
            </p>
          </template>
        </el-table-column>
      </el-table>
    </block-wrapper>

    <div class="batch-operation-contain">
      <el-select v-model="batchOperateType" size="large" placeholder="批量操作">
        <el-option
          v-for="(item, idx) in batchOperations"
          :key="idx"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button @click="handleBatch" style="margin-left: 10px" size="large" type="primary"
        >确定</el-button
      >
    </div>

    <div class="paging-contain">
      <el-pagination
        v-model:current-page="pagingOptions.currentPage"
        v-model:page-size="pagingOptions.pageSize"
        :page-sizes="pagingOptions.pageSizes"
        :background="pagingOptions.background"
        :total="pagingOptions.total"
        :layout="pagingOptions.layout"
        @size-change="pagingOptions.handleSizeChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  .table-contain {
    & {
      margin-top: 20px;
    }
  }

  .batch-operation-contain {
    & {
      display: inline-block;
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
