import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sms_home_new_product", { schema: "mall" })
export class SmsHomeNewProduct {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("varchar", { name: "product_name", nullable: true, length: 500 })
  productName: string | null;

  @Column("int", { name: "recommend_status", nullable: true })
  recommendStatus: number | null;

  @Column("int", { name: "sort", nullable: true })
  sort: number | null;
}
