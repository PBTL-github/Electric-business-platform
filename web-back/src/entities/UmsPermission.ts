import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_permission", { schema: "mall" })
export class UmsPermission {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "pid", nullable: true, comment: "父级权限id" })
  pid: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "名称",
    length: 100,
  })
  name: string | null;

  @Column("varchar", {
    name: "value",
    nullable: true,
    comment: "权限值",
    length: 200,
  })
  value: string | null;

  @Column("varchar", {
    name: "icon",
    nullable: true,
    comment: "图标",
    length: 500,
  })
  icon: string | null;

  @Column("int", {
    name: "type",
    nullable: true,
    comment: "权限类型：0->目录；1->菜单；2->按钮（接口绑定权限）",
  })
  type: number | null;

  @Column("varchar", {
    name: "uri",
    nullable: true,
    comment: "前端资源路径",
    length: 200,
  })
  uri: string | null;

  @Column("int", {
    name: "status",
    nullable: true,
    comment: "启用状态；0->禁用；1->启用",
  })
  status: number | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("int", { name: "sort", nullable: true, comment: "排序" })
  sort: number | null;
}
