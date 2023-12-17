import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_resource", { schema: "mall" })
export class UmsResource {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "资源名称",
    length: 200,
  })
  name: string | null;

  @Column("varchar", {
    name: "url",
    nullable: true,
    comment: "资源URL",
    length: 200,
  })
  url: string | null;

  @Column("varchar", {
    name: "description",
    nullable: true,
    comment: "描述",
    length: 500,
  })
  description: string | null;

  @Column("bigint", {
    name: "category_id",
    nullable: true,
    comment: "资源分类ID",
  })
  categoryId: string | null;
}
