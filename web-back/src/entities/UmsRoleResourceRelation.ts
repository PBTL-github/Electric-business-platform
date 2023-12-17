import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_role_resource_relation", { schema: "mall" })
export class UmsRoleResourceRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "role_id", nullable: true, comment: "角色ID" })
  roleId: string | null;

  @Column("bigint", { name: "resource_id", nullable: true, comment: "资源ID" })
  resourceId: string | null;
}
