<!--
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-12 22:05:24
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-14 01:54:51
 * @FilePath: \web-front\src\views\products\addProduct\components\fillProAttr\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus';
import { addGoodsRuleForm } from '../../utils/interfaces';

const emit = defineEmits(['change-steps']);
const props = defineProps<{
  addGoodsForm?: addGoodsRuleForm;
  addGoodsFormRef?: FormInstance;
  addGoodsFormRules?: FormRules<addGoodsRuleForm>;
}>();
</script>

<template></template>

<style scoped lang="scss"></style>
