import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_admin_permission_relation", { schema: "mall" })
export class UmsAdminPermissionRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "admin_id", nullable: true })
  adminId: string | null;

  @Column("bigint", { name: "permission_id", nullable: true })
  permissionId: string | null;

  @Column("int", { name: "type", nullable: true })
  type: number | null;
}
