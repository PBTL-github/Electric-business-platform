interface PagingOption {
  currentPage: number;
  pageSize: number;
  pageSizes?: Array<number>;
  // 是否使用小型分页样式
  small?: boolean;
  // 是否禁用分页
  disabled?: boolean;
  // 是否使用背景
  background?: boolean;
  // 组件布局
  layout: string; // sizes / prev / pager / next / jumper / -> / total / slot
  // 页数
  pageCount?: number;

  total: number;

  handleSizeChange?(): void;

  handleCurrentChange?(): void;
}

export type { PagingOption };
