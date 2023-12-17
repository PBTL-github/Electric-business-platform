import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_sku_stock", { schema: "mall" })
export class PmsSkuStock {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("varchar", { name: "sku_code", comment: "sku编码", length: 64 })
  skuCode: string;

  @Column("decimal", { name: "price", nullable: true, precision: 10, scale: 2 })
  price: string | null;

  @Column("int", {
    name: "stock",
    nullable: true,
    comment: "库存",
    default: () => "'0'",
  })
  stock: number | null;

  @Column("int", { name: "low_stock", nullable: true, comment: "预警库存" })
  lowStock: number | null;

  @Column("varchar", {
    name: "pic",
    nullable: true,
    comment: "展示图片",
    length: 255,
  })
  pic: string | null;

  @Column("int", { name: "sale", nullable: true, comment: "销量" })
  sale: number | null;

  @Column("decimal", {
    name: "promotion_price",
    nullable: true,
    comment: "单品促销价格",
    precision: 10,
    scale: 2,
  })
  promotionPrice: string | null;

  @Column("int", {
    name: "lock_stock",
    nullable: true,
    comment: "锁定库存",
    default: () => "'0'",
  })
  lockStock: number | null;

  @Column("varchar", {
    name: "sp_data",
    nullable: true,
    comment: "商品销售属性，json格式",
    length: 500,
  })
  spData: string | null;
}
