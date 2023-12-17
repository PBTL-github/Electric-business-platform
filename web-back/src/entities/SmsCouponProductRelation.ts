import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sms_coupon_product_relation", { schema: "mall" })
export class SmsCouponProductRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "coupon_id", nullable: true })
  couponId: string | null;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("varchar", {
    name: "product_name",
    nullable: true,
    comment: "商品名称",
    length: 500,
  })
  productName: string | null;

  @Column("varchar", {
    name: "product_sn",
    nullable: true,
    comment: "商品编码",
    length: 200,
  })
  productSn: string | null;
}
