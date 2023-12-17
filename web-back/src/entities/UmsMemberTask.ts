import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_member_task", { schema: "mall" })
export class UmsMemberTask {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("int", { name: "growth", nullable: true, comment: "赠送成长值" })
  growth: number | null;

  @Column("int", { name: "intergration", nullable: true, comment: "赠送积分" })
  intergration: number | null;

  @Column("int", {
    name: "type",
    nullable: true,
    comment: "任务类型：0->新手任务；1->日常任务",
  })
  type: number | null;
}
