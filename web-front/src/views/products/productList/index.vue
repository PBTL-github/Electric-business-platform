<script lang="ts" setup>
import BlockWrapper from "@/components/block-wrapper/index.vue";
import { reactive } from "vue";
import { ListQuery, defaultListQuery } from "./components/interface";

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

const resetListQuery = () => {
  Object.assign(listQuery, defaultListQuery);
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
}
</style>
