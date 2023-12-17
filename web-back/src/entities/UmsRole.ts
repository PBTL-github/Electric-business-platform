import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_role", { schema: "mall" })
export class UmsRole {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "名称",
    length: 100,
  })
  name: string | null;

  @Column("varchar", {
    name: "description",
    nullable: true,
    comment: "描述",
    length: 500,
  })
  description: string | null;

  @Column("int", {
    name: "admin_count",
    nullable: true,
    comment: "后台用户数量",
  })
  adminCount: number | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("int", {
    name: "status",
    nullable: true,
    comment: "启用状态：0->禁用；1->启用",
    default: () => "'1'",
  })
  status: number | null;

  @Column("int", { name: "sort", nullable: true, default: () => "'0'" })
  sort: number | null;
}
