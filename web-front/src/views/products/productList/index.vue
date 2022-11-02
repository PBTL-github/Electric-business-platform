<script lang="ts" setup>
import BlockWrapper from "@/components/block-wrapper/index.vue";
import { reactive } from "vue";
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
        <el-button style="float: right; margin-right: 20px">重置</el-button>
      </div>
      <el-form label-width="140px" :inline="true" class="search-filter-form">
        <el-form-item label="输入搜索：">
          <el-input placeholder="商品名称" />
        </el-form-item>
        <el-form-item label="商品货号：">
          <el-input placeholder="商品货号" />
        </el-form-item>
        <el-form-item label="商品分类：">
          <el-select placeholder="请选择">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="商品品牌：">
          <el-select placeholder="请选择品牌">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="上架状态：">
          <el-select placeholder="全部">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态：">
          <el-select placeholder="全部">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
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
}
</style>
