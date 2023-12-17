import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("oms_order_return_reason", { schema: "mall" })
export class OmsOrderReturnReason {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "退货类型",
    length: 100,
  })
  name: string | null;

  @Column("int", { name: "sort", nullable: true })
  sort: number | null;

  @Column("int", {
    name: "status",
    nullable: true,
    comment: "状态：0->不启用；1->启用",
  })
  status: number | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "添加时间",
  })
  createTime: Date | null;
}
