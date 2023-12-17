import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cms_topic", { schema: "mall" })
export class CmsTopic {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "category_id", nullable: true })
  categoryId: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("datetime", { name: "start_time", nullable: true })
  startTime: Date | null;

  @Column("datetime", { name: "end_time", nullable: true })
  endTime: Date | null;

  @Column("int", { name: "attend_count", nullable: true, comment: "参与人数" })
  attendCount: number | null;

  @Column("int", {
    name: "attention_count",
    nullable: true,
    comment: "关注人数",
  })
  attentionCount: number | null;

  @Column("int", { name: "read_count", nullable: true })
  readCount: number | null;

  @Column("varchar", {
    name: "award_name",
    nullable: true,
    comment: "奖品名称",
    length: 100,
  })
  awardName: string | null;

  @Column("varchar", {
    name: "attend_type",
    nullable: true,
    comment: "参与方式",
    length: 100,
  })
  attendType: string | null;

  @Column("text", { name: "content", nullable: true, comment: "话题内容" })
  content: string | null;
}
