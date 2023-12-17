import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cms_prefrence_area", { schema: "mall" })
export class CmsPrefrenceArea {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "sub_title", nullable: true, length: 255 })
  subTitle: string | null;

  @Column("varbinary", {
    name: "pic",
    nullable: true,
    comment: "展示图片",
    length: 500,
  })
  pic: Buffer | null;

  @Column("int", { name: "sort", nullable: true })
  sort: number | null;

  @Column("int", { name: "show_status", nullable: true })
  showStatus: number | null;
}
