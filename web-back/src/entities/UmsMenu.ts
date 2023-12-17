import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_menu", { schema: "mall" })
export class UmsMenu {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "parent_id", nullable: true, comment: "父级ID" })
  parentId: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "菜单名称",
    length: 100,
  })
  title: string | null;

  @Column("int", { name: "level", nullable: true, comment: "菜单级数" })
  level: number | null;

  @Column("int", { name: "sort", nullable: true, comment: "菜单排序" })
  sort: number | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "前端名称",
    length: 100,
  })
  name: string | null;

  @Column("varchar", {
    name: "icon",
    nullable: true,
    comment: "前端图标",
    length: 200,
  })
  icon: string | null;

  @Column("int", { name: "hidden", nullable: true, comment: "前端隐藏" })
  hidden: number | null;
}
