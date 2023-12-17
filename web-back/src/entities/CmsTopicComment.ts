import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cms_topic_comment", { schema: "mall" })
export class CmsTopicComment {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "member_nick_name", nullable: true, length: 255 })
  memberNickName: string | null;

  @Column("bigint", { name: "topic_id", nullable: true })
  topicId: string | null;

  @Column("varchar", { name: "member_icon", nullable: true, length: 255 })
  memberIcon: string | null;

  @Column("varchar", { name: "content", nullable: true, length: 1000 })
  content: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("int", { name: "show_status", nullable: true })
  showStatus: number | null;
}
