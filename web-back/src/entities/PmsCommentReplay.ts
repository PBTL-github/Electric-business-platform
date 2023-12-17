import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_comment_replay", { schema: "mall" })
export class PmsCommentReplay {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "comment_id", nullable: true })
  commentId: string | null;

  @Column("varchar", { name: "member_nick_name", nullable: true, length: 255 })
  memberNickName: string | null;

  @Column("varchar", { name: "member_icon", nullable: true, length: 255 })
  memberIcon: string | null;

  @Column("varchar", { name: "content", nullable: true, length: 1000 })
  content: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("int", {
    name: "type",
    nullable: true,
    comment: "评论人员类型；0->会员；1->管理员",
  })
  type: number | null;
}
