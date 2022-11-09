import { reactive } from "vue";

const batchOperations: Array<any> = reactive([
  {
    label: "商品上架",
    value: "publishOn",
  },
  {
    label: "商品下架",
    value: "publishOff",
  },
  {
    label: "设为推荐",
    value: "recommendOn",
  },
  {
    label: "取消推荐",
    value: "recommendOff",
  },
  {
    label: "设为新品",
    value: "newProOn",
  },
  {
    label: "取消新品",
    value: "newProOff",
  },
  {
    label: "转移到分类",
    value: "transferCategory",
  },
  {
    label: "移入回收站",
    value: "recycle",
  },
]);

export { batchOperations };
