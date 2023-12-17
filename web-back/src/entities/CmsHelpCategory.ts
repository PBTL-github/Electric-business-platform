import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cms_help_category", { schema: "mall" })
export class CmsHelpCategory {
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

  @Column("int", { name: "help_count", nullable: true, comment: "专题数量" })
  helpCount: number | null;

  @Column("int", { name: "show_status", nullable: true })
  showStatus: number | null;

  @Column("int", { name: "sort", nullable: true })
  sort: number | null;
}
