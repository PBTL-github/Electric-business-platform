import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_product_vertify_record", { schema: "mall" })
export class PmsProductVertifyRecord {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("varchar", {
    name: "vertify_man",
    nullable: true,
    comment: "审核人",
    length: 64,
  })
  vertifyMan: string | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("varchar", {
    name: "detail",
    nullable: true,
    comment: "反馈详情",
    length: 255,
  })
  detail: string | null;
}
