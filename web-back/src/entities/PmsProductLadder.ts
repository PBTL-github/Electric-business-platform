import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_product_ladder", { schema: "mall" })
export class PmsProductLadder {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("int", { name: "count", nullable: true, comment: "满足的商品数量" })
  count: number | null;

  @Column("decimal", {
    name: "discount",
    nullable: true,
    comment: "折扣",
    precision: 10,
    scale: 2,
  })
  discount: string | null;

  @Column("decimal", {
    name: "price",
    nullable: true,
    comment: "折后价格",
    precision: 10,
    scale: 2,
  })
  price: string | null;
}
