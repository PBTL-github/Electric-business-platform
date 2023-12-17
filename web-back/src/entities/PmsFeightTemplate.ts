import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_feight_template", { schema: "mall" })
export class PmsFeightTemplate {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 64 })
  name: string | null;

  @Column("int", {
    name: "charge_type",
    nullable: true,
    comment: "计费类型:0->按重量；1->按件数",
  })
  chargeType: number | null;

  @Column("decimal", {
    name: "first_weight",
    nullable: true,
    comment: "首重kg",
    precision: 10,
    scale: 2,
  })
  firstWeight: string | null;

  @Column("decimal", {
    name: "first_fee",
    nullable: true,
    comment: "首费（元）",
    precision: 10,
    scale: 2,
  })
  firstFee: string | null;

  @Column("decimal", {
    name: "continue_weight",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  continueWeight: string | null;

  @Column("decimal", {
    name: "continme_fee",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  continmeFee: string | null;

  @Column("varchar", {
    name: "dest",
    nullable: true,
    comment: "目的地（省、市）",
    length: 255,
  })
  dest: string | null;
}
