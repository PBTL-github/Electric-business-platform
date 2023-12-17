import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_product_attribute", { schema: "mall" })
export class PmsProductAttribute {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_attribute_category_id", nullable: true })
  productAttributeCategoryId: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 64 })
  name: string | null;

  @Column("int", {
    name: "select_type",
    nullable: true,
    comment: "属性选择类型：0->唯一；1->单选；2->多选",
  })
  selectType: number | null;

  @Column("int", {
    name: "input_type",
    nullable: true,
    comment: "属性录入方式：0->手工录入；1->从列表中选取",
  })
  inputType: number | null;

  @Column("varchar", {
    name: "input_list",
    nullable: true,
    comment: "可选值列表，以逗号隔开",
    length: 255,
  })
  inputList: string | null;

  @Column("int", {
    name: "sort",
    nullable: true,
    comment: "排序字段：最高的可以单独上传图片",
  })
  sort: number | null;

  @Column("int", {
    name: "filter_type",
    nullable: true,
    comment: "分类筛选样式：1->普通；1->颜色",
  })
  filterType: number | null;

  @Column("int", {
    name: "search_type",
    nullable: true,
    comment: "检索类型；0->不需要进行检索；1->关键字检索；2->范围检索",
  })
  searchType: number | null;

  @Column("int", {
    name: "related_status",
    nullable: true,
    comment: "相同属性产品是否关联；0->不关联；1->关联",
  })
  relatedStatus: number | null;

  @Column("int", {
    name: "hand_add_status",
    nullable: true,
    comment: "是否支持手动新增；0->不支持；1->支持",
  })
  handAddStatus: number | null;

  @Column("int", {
    name: "type",
    nullable: true,
    comment: "属性的类型；0->规格；1->参数",
  })
  type: number | null;
}
