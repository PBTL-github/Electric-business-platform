import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_product_attribute_value", { schema: "mall" })
export class PmsProductAttributeValue {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("bigint", { name: "product_attribute_id", nullable: true })
  productAttributeId: string | null;

  @Column("varchar", {
    name: "value",
    nullable: true,
    comment: "手动添加规格或参数的值，参数单值，规格有多个时以逗号隔开",
    length: 64,
  })
  value: string | null;
}
