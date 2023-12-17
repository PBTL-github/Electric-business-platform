import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_member_login_log", { schema: "mall" })
export class UmsMemberLoginLog {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "member_id", nullable: true })
  memberId: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("varchar", { name: "ip", nullable: true, length: 64 })
  ip: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 64 })
  city: string | null;

  @Column("int", {
    name: "login_type",
    nullable: true,
    comment: "登录类型：0->PC；1->android;2->ios;3->小程序",
  })
  loginType: number | null;

  @Column("varchar", { name: "province", nullable: true, length: 64 })
  province: string | null;
}
