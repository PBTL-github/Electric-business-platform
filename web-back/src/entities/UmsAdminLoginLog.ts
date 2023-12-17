import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_admin_login_log", { schema: "mall" })
export class UmsAdminLoginLog {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "admin_id", nullable: true })
  adminId: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("varchar", { name: "ip", nullable: true, length: 64 })
  ip: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 100 })
  address: string | null;

  @Column("varchar", {
    name: "user_agent",
    nullable: true,
    comment: "浏览器登录类型",
    length: 100,
  })
  userAgent: string | null;
}
