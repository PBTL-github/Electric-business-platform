import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cms_subject_product_relation", { schema: "mall" })
export class CmsSubjectProductRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "subject_id", nullable: true })
  subjectId: string | null;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;
}
