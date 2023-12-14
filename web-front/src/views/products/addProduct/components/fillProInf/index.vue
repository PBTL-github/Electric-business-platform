<script lang="ts" setup>
import { Ref, reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { EpPropMergeType } from 'element-plus/es/utils/vue/props/types';
import { pro_classify_options } from './utils/data';
import { addGoodsRuleForm } from '../../utils/interfaces';

const emit = defineEmits(['change-steps']);
const props = defineProps<{
  addGoodsForm?: addGoodsRuleForm;
  addGoodsFormRef?: FormInstance;
  addGoodsFormRules?: FormRules<addGoodsRuleForm>;
}>();

const formSize: Ref<
  EpPropMergeType<StringConstructor, '' | 'default' | 'small' | 'large', unknown>
> = ref('default');
const ruleFormRef = reactive(props.addGoodsFormRef);
const submitProInformationRuleRef = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      emit('change-steps', 1);
    } else {
      console.log('error submit!', fields);
    }
  });
};

const pro_brand_option = Array.from({ length: 10 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="addGoodsForm"
    :rules="addGoodsFormRules"
    label-width="120px"
    class="demo-addGoodsForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="商品分类:" prop="pro_classify">
      <el-cascader v-model="addGoodsForm.pro_classify" :options="pro_classify_options" />
    </el-form-item>
    <el-form-item label="商品名称:" prop="pro_name">
      <el-input v-model="addGoodsForm.pro_name" />
    </el-form-item>
    <el-form-item label="副标题:" prop="subhead">
      <el-input v-model="addGoodsForm.subhead" />
    </el-form-item>
    <el-form-item label="商品品牌:" prop="pro_brand">
      <el-cascader
        placeholder="请选择品牌"
        v-model="addGoodsForm.pro_brand"
        clearable
        :options="pro_brand_option"
      />
    </el-form-item>
    <el-form-item label="商品介绍" prop="pro_introduction">
      <el-input
        v-model="addGoodsForm.pro_introduction"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="请输入内容"
      />
    </el-form-item>
    <el-form-item label="商品货号:" prop="pro_SN">
      <el-input v-model="addGoodsForm.pro_SN" />
    </el-form-item>
    <el-form-item label="商品售价:" prop="pro_price">
      <el-input placeholder="0" v-model.number="addGoodsForm.pro_price" />
    </el-form-item>
    <el-form-item label="市场价:" prop="pro_market_price">
      <el-input placeholder="0" v-model.number="addGoodsForm.pro_market_price" />
    </el-form-item>
    <el-form-item label="商品库存:" prop="pro_inventory">
      <el-input placeholder="0" v-model.number="addGoodsForm.pro_inventory" />
    </el-form-item>
    <el-form-item label="计量单位:" prop="pro_unit">
      <el-input v-model="addGoodsForm.pro_unit" />
    </el-form-item>
    <el-form-item label="商品重量:" prop="pro_weight">
      <el-input placeholder="0" v-model.number="addGoodsForm.pro_weight" />
    </el-form-item>
    <el-form-item label="排序" prop="pro_sort_size">
      <el-input placeholder="0" v-model.number="addGoodsForm.pro_sort_size" />
    </el-form-item>
    <el-form-item>
      <div class="next">
        <el-button @click="submitProInformationRuleRef(ruleFormRef)" type="primary">
          下一步，填写商品促销
        </el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">
.demo-addGoodsForm {
  & {
    width: 800px;
    margin: 0 auto;
  }
  .el-textarea__inner {
    & {
      display: block;
      resize: vertical;
      padding: 5px 15px;
      line-height: 1.5;
      box-sizing: border-box;
      width: 100%;
      font-size: inherit;
      color: #606266;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

  .next {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
