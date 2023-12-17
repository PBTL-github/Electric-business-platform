import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_resource_category", { schema: "mall" })
export class UmsResourceCategory {
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
    comment: "分类名称",
    length: 200,
  })
  name: string | null;

  @Column("int", { name: "sort", nullable: true, comment: "排序" })
  sort: number | null;
}
