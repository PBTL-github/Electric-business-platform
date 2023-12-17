import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_product_category_attribute_relation", { schema: "mall" })
export class PmsProductCategoryAttributeRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_category_id", nullable: true })
  productCategoryId: string | null;

  @Column("bigint", { name: "product_attribute_id", nullable: true })
  productAttributeId: string | null;
}
