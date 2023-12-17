import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_role_menu_relation", { schema: "mall" })
export class UmsRoleMenuRelation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "role_id", nullable: true, comment: "角色ID" })
  roleId: string | null;

  @Column("bigint", { name: "menu_id", nullable: true, comment: "菜单ID" })
  menuId: string | null;
}
