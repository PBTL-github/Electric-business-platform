import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pms_comment", { schema: "mall" })
export class PmsComment {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("varchar", { name: "member_nick_name", nullable: true, length: 255 })
  memberNickName: string | null;

  @Column("varchar", { name: "product_name", nullable: true, length: 255 })
  productName: string | null;

  @Column("int", { name: "star", nullable: true, comment: "评价星数：0->5" })
  star: number | null;

  @Column("varchar", {
    name: "member_ip",
    nullable: true,
    comment: "评价的ip",
    length: 64,
  })
  memberIp: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("int", { name: "show_status", nullable: true })
  showStatus: number | null;

  @Column("varchar", {
    name: "product_attribute",
    nullable: true,
    comment: "购买时的商品属性",
    length: 255,
  })
  productAttribute: string | null;

  @Column("int", { name: "collect_couont", nullable: true })
  collectCouont: number | null;

  @Column("int", { name: "read_count", nullable: true })
  readCount: number | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", {
    name: "pics",
    nullable: true,
    comment: "上传图片地址，以逗号隔开",
    length: 1000,
  })
  pics: string | null;

  @Column("varchar", {
    name: "member_icon",
    nullable: true,
    comment: "评论用户头像",
    length: 255,
  })
  memberIcon: string | null;

  @Column("int", { name: "replay_count", nullable: true })
  replayCount: number | null;
}
