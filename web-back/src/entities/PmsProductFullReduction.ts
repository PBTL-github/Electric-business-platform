import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_product_full_reduction", { schema: "mall" })
export class PmsProductFullReduction {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("decimal", {
    name: "full_price",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  fullPrice: string | null;

  @Column("decimal", {
    name: "reduce_price",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  reducePrice: string | null;
}
