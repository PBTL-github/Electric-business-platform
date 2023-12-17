import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_product_category", { schema: "mall" })
export class PmsProductCategory {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", {
    name: "parent_id",
    nullable: true,
    comment: "上机分类的编号：0表示一级分类",
  })
  parentId: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 64 })
  name: string | null;

  @Column("int", {
    name: "level",
    nullable: true,
    comment: "分类级别：0->1级；1->2级",
  })
  level: number | null;

  @Column("int", { name: "product_count", nullable: true })
  productCount: number | null;

  @Column("varchar", { name: "product_unit", nullable: true, length: 64 })
  productUnit: string | null;

  @Column("int", {
    name: "nav_status",
    nullable: true,
    comment: "是否显示在导航栏：0->不显示；1->显示",
  })
  navStatus: number | null;

  @Column("int", {
    name: "show_status",
    nullable: true,
    comment: "显示状态：0->不显示；1->显示",
  })
  showStatus: number | null;

  @Column("int", { name: "sort", nullable: true })
  sort: number | null;

  @Column("varchar", {
    name: "icon",
    nullable: true,
    comment: "图标",
    length: 255,
  })
  icon: string | null;

  @Column("varchar", { name: "keywords", nullable: true, length: 255 })
  keywords: string | null;

  @Column("text", { name: "description", nullable: true, comment: "描述" })
  description: string | null;
}
