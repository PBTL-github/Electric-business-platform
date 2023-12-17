import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_album", { schema: "mall" })
export class PmsAlbum {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 64 })
  name: string | null;

  @Column("varchar", { name: "cover_pic", nullable: true, length: 1000 })
  coverPic: string | null;

  @Column("int", { name: "pic_count", nullable: true })
  picCount: number | null;

  @Column("int", { name: "sort", nullable: true })
  sort: number | null;

  @Column("varchar", { name: "description", nullable: true, length: 1000 })
  description: string | null;
}
