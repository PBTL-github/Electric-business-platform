interface ListQuery {
  proKeyWord: string | null; // 商品名称关键字
  proNO: string | null; // 商品货号
  proAttrbuteClassifitionID: string | null; // 商品属性分类
  brandID: string | null; // 商品品牌分类
  publishState: string | null; // 商品商家状态
  reviewState: number | null; // 审核状态
  pageNum: number; // 页面索引
  pageSize: number; // 页面长度
}

const defaultListQuery: ListQuery = {
  proKeyWord: null,
  proNO: null,
  proAttrbuteClassifitionID: null,
  brandID: null,
  publishState: null,
  reviewState: null,
  pageNum: 1,
  pageSize: 5,
};

export { defaultListQuery };
export type { ListQuery };
