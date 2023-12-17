import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_member_member_tag_relation", { schema: "mall" })
export class UmsMemberMemberTagRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "member_id", nullable: true })
  memberId: string | null;

  @Column("bigint", { name: "tag_id", nullable: true })
  tagId: string | null;
}
