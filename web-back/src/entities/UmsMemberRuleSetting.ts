import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_member_rule_setting", { schema: "mall" })
export class UmsMemberRuleSetting {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("int", {
    name: "continue_sign_day",
    nullable: true,
    comment: "连续签到天数",
  })
  continueSignDay: number | null;

  @Column("int", {
    name: "continue_sign_point",
    nullable: true,
    comment: "连续签到赠送数量",
  })
  continueSignPoint: number | null;

  @Column("decimal", {
    name: "consume_per_point",
    nullable: true,
    comment: "每消费多少元获取1个点",
    precision: 10,
    scale: 2,
  })
  consumePerPoint: string | null;

  @Column("decimal", {
    name: "low_order_amount",
    nullable: true,
    comment: "最低获取点数的订单金额",
    precision: 10,
    scale: 2,
  })
  lowOrderAmount: string | null;

  @Column("int", {
    name: "max_point_per_order",
    nullable: true,
    comment: "每笔订单最高获取点数",
  })
  maxPointPerOrder: number | null;

  @Column("int", {
    name: "type",
    nullable: true,
    comment: "类型：0->积分规则；1->成长值规则",
  })
  type: number | null;
}
