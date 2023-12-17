import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sms_flash_promotion_session", { schema: "mall" })
export class SmsFlashPromotionSession {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "编号" })
  id: string;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "场次名称",
    length: 200,
  })
  name: string | null;

  @Column("time", {
    name: "start_time",
    nullable: true,
    comment: "每日开始时间",
  })
  startTime: string | null;

  @Column("time", { name: "end_time", nullable: true, comment: "每日结束时间" })
  endTime: string | null;

  @Column("int", {
    name: "status",
    nullable: true,
    comment: "启用状态：0->不启用；1->启用",
  })
  status: number | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;
}
