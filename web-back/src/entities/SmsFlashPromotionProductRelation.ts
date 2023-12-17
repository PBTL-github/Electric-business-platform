import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sms_flash_promotion_product_relation", { schema: "mall" })
export class SmsFlashPromotionProductRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "编号" })
  id: string;

  @Column("bigint", { name: "flash_promotion_id", nullable: true })
  flashPromotionId: string | null;

  @Column("bigint", {
    name: "flash_promotion_session_id",
    nullable: true,
    comment: "编号",
  })
  flashPromotionSessionId: string | null;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("decimal", {
    name: "flash_promotion_price",
    nullable: true,
    comment: "限时购价格",
    precision: 10,
    scale: 2,
  })
  flashPromotionPrice: string | null;

  @Column("int", {
    name: "flash_promotion_count",
    nullable: true,
    comment: "限时购数量",
  })
  flashPromotionCount: number | null;

  @Column("int", {
    name: "flash_promotion_limit",
    nullable: true,
    comment: "每人限购数量",
  })
  flashPromotionLimit: number | null;

  @Column("int", { name: "sort", nullable: true, comment: "排序" })
  sort: number | null;
}
