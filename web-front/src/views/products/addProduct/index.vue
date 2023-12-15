<!--
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-12 22:05:24
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-15 02:30:39
 * @FilePath: \web-front\src\views\products\addProduct\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, Ref, reactive } from 'vue';
import FillProInf from './components/fillProInf/index.vue';
import FillProPromotion from './components/fillProPromotion/index.vue';
import fillProAttr from './components/fillProAttr/index.vue';
import { FormInstance, FormRules } from 'element-plus';
import { addGoodsRuleForm } from './utils/interfaces';

const step: Ref<number> = ref<number>(0);
const addGoodsFormRef: Ref<FormInstance> = ref<FormInstance>();
const addGoodsForm = reactive<addGoodsRuleForm>({
  pro_classify: '',
  pro_name: '',
  subhead: '',
  pro_brand: '',
  pro_introduction: '',
  pro_SN: '',
  pro_price: 0,
  pro_market_price: 0,
  pro_inventory: 0,
  pro_weight: 0,
  pro_sort_size: 0,
  giftPoints: 0,
  giftGrowUpValue: 0,
  pointsBuyAstrict: 0,
  foreshowGoods: false,
  goodsShelf: false,
  goodsRecommendation: { newStatus: 0, recommendation: 0 },
  serverAssure: [],
  detailPageHeading: '',
  detailPageDesc: '',
  goodsKeyword: '',
  goodsRemark: '',
  memberPrice: [
    { memberLevelId: 1, memberLevelName: '黄金会员' },
    { memberLevelId: 2, memberLevelName: '白金会员' },
    { memberLevelId: 3, memberLevelName: '钻石会员' },
  ],
  levelPriceList: [{ count: 0, discount: 0 }],
  fullReductionPriceList: [{ fullPrice: 0, reducePrice: 0 }],
  selectDiscountsMode: 'none',
});
const addGoodsFormRules = reactive<FormRules<addGoodsRuleForm>>({
  pro_classify: [
    {
      required: true,
      message: '请选择商品分类',
      trigger: 'change',
    },
  ],
  pro_name: [
    { required: true, message: '请输入商品名称', trigger: 'blur' },
    { required: true, message: '长度在 2 到 140 个字符', min: 2, max: 140, trigger: 'blur' },
  ],
  subhead: [{ required: true, message: '请输入商品副标题', trigger: 'blur' }],
  pro_brand: [
    {
      required: true,
      message: '请选择商品品牌',
      trigger: 'change',
    },
  ],
  pro_introduction: [],
  pro_SN: [],
  pro_price: [],
});

const changeStep = (handleStepSize: number) => {
  step.value += handleStepSize;
};
</script>

<template>
  <el-card shadow="never" class="pro-add-card">
    <el-steps class="step" finish-status="success" :active="step" align-center>
      <el-step title="填写商品信息" />
      <el-step title="填写商品促销" />
      <el-step title="填写商品属性" />
      <el-step title="选择商品关联" />
    </el-steps>
    <fill-pro-inf
      v-if="step == 0"
      @change-steps="changeStep"
      :add-goods-form="addGoodsForm"
      :add-goods-form-ref="addGoodsFormRef"
      :add-goods-form-rules="addGoodsFormRules"
    />
    <fill-pro-promotion
      v-if="step == 1"
      @change-steps="changeStep"
      :add-goods-form="addGoodsForm"
      :add-goods-form-ref="addGoodsFormRef"
      :add-goods-form-rules="addGoodsFormRules"
    />
    <fill-pro-attr
      v-if="step == 2"
      @change-steps="changeStep"
      :add-goods-form="addGoodsForm"
      :add-goods-form-ref="addGoodsFormRef"
      :add-goods-form-rules="addGoodsFormRules"
    />
  </el-card>
</template>

<style scoped lang="scss">
.pro-add-card {
  & {
    position: absolute;
    left: 0;
    right: 0;
    width: 900px;
    padding: 35px 35px 15px;
    margin: 0 auto;
    transform: translateX(-10%);
  }

  .step {
    & {
      margin-bottom: 50px;
    }
  }
}
</style>
