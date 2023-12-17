import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_member_price", { schema: "mall" })
export class PmsMemberPrice {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("bigint", { name: "member_level_id", nullable: true })
  memberLevelId: string | null;

  @Column("decimal", {
    name: "member_price",
    nullable: true,
    comment: "会员价格",
    precision: 10,
    scale: 2,
  })
  memberPrice: string | null;

  @Column("varchar", { name: "member_level_name", nullable: true, length: 100 })
  memberLevelName: string | null;
}
