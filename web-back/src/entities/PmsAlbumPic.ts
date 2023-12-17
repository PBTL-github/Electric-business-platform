import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_album_pic", { schema: "mall" })
export class PmsAlbumPic {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "album_id", nullable: true })
  albumId: string | null;

  @Column("varchar", { name: "pic", nullable: true, length: 1000 })
  pic: string | null;
}
