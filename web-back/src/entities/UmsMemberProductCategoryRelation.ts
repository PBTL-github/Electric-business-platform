import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_member_product_category_relation", { schema: "mall" })
export class UmsMemberProductCategoryRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "member_id", nullable: true })
  memberId: string | null;

  @Column("bigint", { name: "product_category_id", nullable: true })
  productCategoryId: string | null;
}
