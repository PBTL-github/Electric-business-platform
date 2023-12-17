import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sms_flash_promotion_log", { schema: "mall" })
export class SmsFlashPromotionLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "member_id", nullable: true })
  memberId: number | null;

  @Column("bigint", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("varchar", { name: "member_phone", nullable: true, length: 64 })
  memberPhone: string | null;

  @Column("varchar", { name: "product_name", nullable: true, length: 100 })
  productName: string | null;

  @Column("datetime", {
    name: "subscribe_time",
    nullable: true,
    comment: "会员订阅时间",
  })
  subscribeTime: Date | null;

  @Column("datetime", { name: "send_time", nullable: true })
  sendTime: Date | null;
}
