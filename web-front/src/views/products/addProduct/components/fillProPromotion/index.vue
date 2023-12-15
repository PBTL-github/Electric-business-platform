<!--
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-12 22:05:24
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-15 02:33:41
 * @FilePath: \web-front\src\views\products\addProduct\components\fillProPromotion\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { reactive, ref, Ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { EpPropMergeType } from 'element-plus/es/utils/vue/props/types';
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

/**
 * @desc 前往下一步之前检查
 * @param formEl
 */
const beforeNextCheckRule = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      emit('change-steps', 1);
    } else {
      console.log('error submit!', fields);
    }
  });
};

/**
 * @desc 返回上一步
 */
const returnPrevStep = () => {
  emit('change-steps', -1);
};

/**
 * @desc 计算不可使用时间, 可用返回false，不可用返回true
 * @param time
 */
const disabledDateFn = (time: Date): boolean => {
  // // 计算当月当天之前的每一天到1970年1月1日的毫秒数，比较现在的时间
  // if (new Date().getDate() == time.getDate()) {
  //   return false;
  // }
  return time.getTime() < Date.now();
};

const addLevelPriceListItem = () => {
  props.addGoodsForm.levelPriceList.push({ count: 0, discount: 0 });
};
const deleteLevelPriceListItem = (idx: number) => {
  if (props.addGoodsForm.levelPriceList.length == 1) return;
  props.addGoodsForm.levelPriceList.splice(idx, 1);
};

const addfullReductionPriceListItem = () => {
  props.addGoodsForm.fullReductionPriceList.push({ fullPrice: 0, reducePrice: 0 });
};

const deletefullReductionPriceListItem = (idx: number) => {
  if (props.addGoodsForm.fullReductionPriceList.length == 1) return;
  props.addGoodsForm.fullReductionPriceList.splice(idx, 1);
};
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
    <el-form-item label="赠送积分:" prop="gift-points">
      <el-input v-model="addGoodsForm.giftPoints" />
    </el-form-item>
    <el-form-item label="赠送成长值:" prop="gift-grow-up-value">
      <el-input v-model="addGoodsForm.giftGrowUpValue" />
    </el-form-item>
    <el-form-item label="积分购买限制:" prop="points-buy-astrict">
      <el-input v-model="addGoodsForm.pointsBuyAstrict" />
    </el-form-item>
    <el-form-item label="预告商品:" prop="foreshow-goods">
      <el-switch v-model="addGoodsForm.foreshowGoods" />
    </el-form-item>
    <el-form-item label="商品上架:" prop="goods-shelf">
      <el-switch v-model="addGoodsForm.goodsShelf" />
    </el-form-item>
    <el-form-item label="商品推荐:" prop="goods-recommendation">
      <span style="margin-right: 10px">新品</span>
      <el-switch
        v-model="(addGoodsForm.goodsRecommendation.newStatus as number)"
        :active-value="1"
        :inactive-value="0"
      />
      <span style="margin-right: 10px; margin-left: 10px">推荐</span>
      <el-switch
        v-model="addGoodsForm.goodsRecommendation.recommendation"
        :active-value="1"
        :inactive-value="0"
      />
    </el-form-item>
    <el-form-item label="服务保证" prop="server_assure">
      <el-checkbox-group v-model="addGoodsForm.serverAssure">
        <el-checkbox :label="1">无忧退货</el-checkbox>
        <el-checkbox :label="2">快速退款</el-checkbox>
        <el-checkbox :label="3">免费包邮</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="详细页标题:" prop="detail-page-heading">
      <el-input v-model="addGoodsForm.detailPageHeading" />
    </el-form-item>
    <el-form-item label="详细页描述:" prop="detail-page-desc">
      <el-input v-model="addGoodsForm.detailPageDesc" />
    </el-form-item>
    <el-form-item label="商品关键字:" prop="goods-keyword">
      <el-input v-model="addGoodsForm.goodsKeyword" />
    </el-form-item>
    <el-form-item label="商品备注:" prop="goods-remark">
      <el-input
        v-model="addGoodsForm.goodsRemark"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="请输入内容"
      />
    </el-form-item>
    <el-form-item label="选择优惠方式：" prop="select-discounts-mode">
      <el-radio-group v-model="addGoodsForm.selectDiscountsMode">
        <el-radio-button label="none">无优惠</el-radio-button>
        <el-radio-button label="specialPromotion">特惠促销</el-radio-button>
        <el-radio-button label="memberPrice">会员价格</el-radio-button>
        <el-radio-button label="level">阶梯价格</el-radio-button>
        <el-radio-button label="fullReductionPrice">满减价格</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <!-- 特惠促销 -->
    <el-form-item
      prop="specialPromotion"
      class="discounts"
      v-if="addGoodsForm.selectDiscountsMode == 'specialPromotion'"
    >
      <el-form-item label-width="auto" label="开始时间：" prop="promotionStartTime">
        <el-date-picker
          v-model="addGoodsForm.promotionStartTime"
          type="datetime"
          placeholder="选择开始时间"
          :disabled-date="disabledDateFn"
        />
      </el-form-item>
      <el-form-item label-width="auto" label="结束时间：" prop="promotionEndTime">
        <el-date-picker
          v-model="addGoodsForm.promotionEndTime"
          type="datetime"
          placeholder="选择结束时间"
          :disabled-date="disabledDateFn"
        />
      </el-form-item>
      <el-form-item label-width="auto" label="促销价格：" prop="promotionPrice">
        <el-input v-model="addGoodsForm.promotionPrice" placeholder="请输入促销价格" />
      </el-form-item>
    </el-form-item>
    <!-- 会员价格 -->
    <el-form-item prop="memberPrice" class="discounts" v-if="addGoodsForm.selectDiscountsMode == 'memberPrice'">
      <el-form-item label-width="auto" label="黄金会员：" prop="promotionStartTime">
        <el-input v-model="addGoodsForm.memberPrice[0].memberPice" />
      </el-form-item>
      <el-form-item label-width="auto" label="白金会员：" prop="promotionEndTime">
        <el-input v-model="addGoodsForm.memberPrice[1].memberPice" />
      </el-form-item>
      <el-form-item label-width="auto" label="钻石会员：" prop="promotionPrice">
        <el-input v-model="addGoodsForm.memberPrice[2].memberPice" />
      </el-form-item>
    </el-form-item>
    <!-- 阶梯价格 -->
    <el-form-item prop="levelPrice" style="width: 800px" v-if="addGoodsForm.selectDiscountsMode == 'level'">
      <el-table
        :data="addGoodsForm.levelPriceList"
        :border="true"
        style="width: 543px"
        max-height="250"
      >
        <el-table-column prop="count" label="数量" width="120" :align="'center'">
          <template #default="scope">
            <el-input v-model.number="addGoodsForm.levelPriceList[scope.$index].count" />
          </template>
        </el-table-column>
        <el-table-column prop="discount" label="折扣" width="120" :align="'center'">
          <template #default="scope">
            <el-input v-model.number="addGoodsForm.levelPriceList[scope.$index].discount" />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="303" :align="'center'">
          <template #default="scope">
            <el-button link type="primary" size="small" @click.prevent="addLevelPriceListItem">
              添加
            </el-button>
            <el-button
              link
              type="primary"
              size="small"
              @click.prevent="deleteLevelPriceListItem(scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <!-- 满减价格 -->
    <el-form-item
      prop="fullReductionPrice"
      style="width: 800px"
      v-if="addGoodsForm.selectDiscountsMode == 'fullReductionPrice'"
    >
      <el-table
        :data="addGoodsForm.fullReductionPriceList"
        :border="true"
        style="width: 543px"
        max-height="250"
      >
        <el-table-column prop="count" label="数量" width="120" :align="'center'">
          <template #default="scope">
            <el-input
              v-model.number="addGoodsForm.fullReductionPriceList[scope.$index].fullPrice"
            />
          </template>
        </el-table-column>
        <el-table-column prop="discount" label="折扣" width="120" :align="'center'">
          <template #default="scope">
            <el-input
              v-model.number="addGoodsForm.fullReductionPriceList[scope.$index].reducePrice"
            />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="303" :align="'center'">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click.prevent="addfullReductionPriceListItem"
            >
              添加
            </el-button>
            <el-button
              link
              type="primary"
              size="small"
              @click.prevent="deletefullReductionPriceListItem(scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item class="handle-button">
      <el-button type="default" @click.prevent="returnPrevStep">上一步，填写商品属性</el-button>
      <el-button type="primary" @click.prevent="beforeNextCheckRule(ruleFormRef)">
        下一步，填写商品属性
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">
.discounts {
  & {
    width: 420px;
    display: block !important;
  }
  // ::v-depp()深度修改
  > ::v-deep(div.el-form-item__content) {
    display: block !important;
  }
  .el-form-item {
    & {
      margin-bottom: 18px;
    }
  }
}
.handle-button {
  ::v-deep(div.el-form-item__content) {
    justify-content: center;
  }
}
</style>
