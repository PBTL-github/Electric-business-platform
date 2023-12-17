import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_growth_change_history", { schema: "mall" })
export class UmsGrowthChangeHistory {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "member_id", nullable: true })
  memberId: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("int", {
    name: "change_type",
    nullable: true,
    comment: "改变类型：0->增加；1->减少",
  })
  changeType: number | null;

  @Column("int", {
    name: "change_count",
    nullable: true,
    comment: "积分改变数量",
  })
  changeCount: number | null;

  @Column("varchar", {
    name: "operate_man",
    nullable: true,
    comment: "操作人员",
    length: 100,
  })
  operateMan: string | null;

  @Column("varchar", {
    name: "operate_note",
    nullable: true,
    comment: "操作备注",
    length: 200,
  })
  operateNote: string | null;

  @Column("int", {
    name: "source_type",
    nullable: true,
    comment: "积分来源：0->购物；1->管理员修改",
  })
  sourceType: number | null;
}
