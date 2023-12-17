import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cms_subject_category", { schema: "mall" })
export class CmsSubjectCategory {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("varchar", {
    name: "icon",
    nullable: true,
    comment: "分类图标",
    length: 500,
  })
  icon: string | null;

  @Column("int", { name: "subject_count", nullable: true, comment: "专题数量" })
  subjectCount: number | null;

  @Column("int", { name: "show_status", nullable: true })
  showStatus: number | null;

  @Column("int", { name: "sort", nullable: true })
  sort: number | null;
}
