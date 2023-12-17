import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_member_tag", { schema: "mall" })
export class UmsMemberTag {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("int", {
    name: "finish_order_count",
    nullable: true,
    comment: "自动打标签完成订单数量",
  })
  finishOrderCount: number | null;

  @Column("decimal", {
    name: "finish_order_amount",
    nullable: true,
    comment: "自动打标签完成订单金额",
    precision: 10,
    scale: 2,
  })
  finishOrderAmount: string | null;
}
