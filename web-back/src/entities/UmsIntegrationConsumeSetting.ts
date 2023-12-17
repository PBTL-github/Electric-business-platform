import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_integration_consume_setting", { schema: "mall" })
export class UmsIntegrationConsumeSetting {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("int", {
    name: "deduction_per_amount",
    nullable: true,
    comment: "每一元需要抵扣的积分数量",
  })
  deductionPerAmount: number | null;

  @Column("int", {
    name: "max_percent_per_order",
    nullable: true,
    comment: "每笔订单最高抵用百分比",
  })
  maxPercentPerOrder: number | null;

  @Column("int", {
    name: "use_unit",
    nullable: true,
    comment: "每次使用积分最小单位100",
  })
  useUnit: number | null;

  @Column("int", {
    name: "coupon_status",
    nullable: true,
    comment: "是否可以和优惠券同用；0->不可以；1->可以",
  })
  couponStatus: number | null;
}
