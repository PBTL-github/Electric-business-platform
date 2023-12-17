import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_role_permission_relation", { schema: "mall" })
export class UmsRolePermissionRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "role_id", nullable: true })
  roleId: string | null;

  @Column("bigint", { name: "permission_id", nullable: true })
  permissionId: string | null;
}
