import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_product_operate_log", { schema: "mall" })
export class PmsProductOperateLog {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("decimal", {
    name: "price_old",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  priceOld: string | null;

  @Column("decimal", {
    name: "price_new",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  priceNew: string | null;

  @Column("decimal", {
    name: "sale_price_old",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  salePriceOld: string | null;

  @Column("decimal", {
    name: "sale_price_new",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  salePriceNew: string | null;

  @Column("int", {
    name: "gift_point_old",
    nullable: true,
    comment: "赠送的积分",
  })
  giftPointOld: number | null;

  @Column("int", { name: "gift_point_new", nullable: true })
  giftPointNew: number | null;

  @Column("int", { name: "use_point_limit_old", nullable: true })
  usePointLimitOld: number | null;

  @Column("int", { name: "use_point_limit_new", nullable: true })
  usePointLimitNew: number | null;

  @Column("varchar", {
    name: "operate_man",
    nullable: true,
    comment: "操作人",
    length: 64,
  })
  operateMan: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;
}
