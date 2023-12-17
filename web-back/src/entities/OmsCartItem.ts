import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("oms_cart_item", { schema: "mall" })
export class OmsCartItem {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("bigint", { name: "product_sku_id", nullable: true })
  productSkuId: string | null;

  @Column("bigint", { name: "member_id", nullable: true })
  memberId: string | null;

  @Column("int", { name: "quantity", nullable: true, comment: "购买数量" })
  quantity: number | null;

  @Column("decimal", {
    name: "price",
    nullable: true,
    comment: "添加到购物车的价格",
    precision: 10,
    scale: 2,
  })
  price: string | null;

  @Column("varchar", {
    name: "product_pic",
    nullable: true,
    comment: "商品主图",
    length: 1000,
  })
  productPic: string | null;

  @Column("varchar", {
    name: "product_name",
    nullable: true,
    comment: "商品名称",
    length: 500,
  })
  productName: string | null;

  @Column("varchar", {
    name: "product_sub_title",
    nullable: true,
    comment: "商品副标题（卖点）",
    length: 500,
  })
  productSubTitle: string | null;

  @Column("varchar", {
    name: "product_sku_code",
    nullable: true,
    comment: "商品sku条码",
    length: 200,
  })
  productSkuCode: string | null;

  @Column("varchar", {
    name: "member_nickname",
    nullable: true,
    comment: "会员昵称",
    length: 500,
  })
  memberNickname: string | null;

  @Column("datetime", {
    name: "create_date",
    nullable: true,
    comment: "创建时间",
  })
  createDate: Date | null;

  @Column("datetime", {
    name: "modify_date",
    nullable: true,
    comment: "修改时间",
  })
  modifyDate: Date | null;

  @Column("int", {
    name: "delete_status",
    nullable: true,
    comment: "是否删除",
    default: () => "'0'",
  })
  deleteStatus: number | null;

  @Column("bigint", {
    name: "product_category_id",
    nullable: true,
    comment: "商品分类",
  })
  productCategoryId: string | null;

  @Column("varchar", { name: "product_brand", nullable: true, length: 200 })
  productBrand: string | null;

  @Column("varchar", { name: "product_sn", nullable: true, length: 200 })
  productSn: string | null;

  @Column("varchar", {
    name: "product_attr",
    nullable: true,
    comment:
      '商品销售属性:[{key:"颜色",\value:"颜色"},{key:"容量",\value:"4G"}]',
    length: 500,
  })
  productAttr: string | null;
}
