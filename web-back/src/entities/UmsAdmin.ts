import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_admin", { schema: "mall" })
export class UmsAdmin {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "username", nullable: true, length: 64 })
  username: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 64 })
  password: string | null;

  @Column("varchar", {
    name: "icon",
    nullable: true,
    comment: "头像",
    length: 500,
  })
  icon: string | null;

  @Column("varchar", {
    name: "email",
    nullable: true,
    comment: "邮箱",
    length: 100,
  })
  email: string | null;

  @Column("varchar", {
    name: "nick_name",
    nullable: true,
    comment: "昵称",
    length: 200,
  })
  nickName: string | null;

  @Column("varchar", {
    name: "note",
    nullable: true,
    comment: "备注信息",
    length: 500,
  })
  note: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("datetime", {
    name: "login_time",
    nullable: true,
    comment: "最后登录时间",
  })
  loginTime: Date | null;

  @Column("int", {
    name: "status",
    nullable: true,
    comment: "帐号启用状态：0->禁用；1->启用",
    default: () => "'1'",
  })
  status: number | null;
}
