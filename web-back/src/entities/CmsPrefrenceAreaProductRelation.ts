import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cms_prefrence_area_product_relation", { schema: "mall" })
export class CmsPrefrenceAreaProductRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "prefrence_area_id", nullable: true })
  prefrenceAreaId: string | null;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;
}
