import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_product_attribute_category", { schema: "mall" })
export class PmsProductAttributeCategory {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 64 })
  name: string | null;

  @Column("int", {
    name: "attribute_count",
    nullable: true,
    comment: "属性数量",
    default: () => "'0'",
  })
  attributeCount: number | null;

  @Column("int", {
    name: "param_count",
    nullable: true,
    comment: "参数数量",
    default: () => "'0'",
  })
  paramCount: number | null;
}
