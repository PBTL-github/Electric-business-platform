import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_admin_role_relation", { schema: "mall" })
export class UmsAdminRoleRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "admin_id", nullable: true })
  adminId: string | null;

  @Column("bigint", { name: "role_id", nullable: true })
  roleId: string | null;
}
