import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cms_help", { schema: "mall" })
export class CmsHelp {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "category_id", nullable: true })
  categoryId: string | null;

  @Column("varchar", { name: "icon", nullable: true, length: 500 })
  icon: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 100 })
  title: string | null;

  @Column("int", { name: "show_status", nullable: true })
  showStatus: number | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("int", { name: "read_count", nullable: true })
  readCount: number | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;
}
