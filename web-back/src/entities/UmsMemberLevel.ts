import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_member_level", { schema: "mall" })
export class UmsMemberLevel {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("int", { name: "growth_point", nullable: true })
  growthPoint: number | null;

  @Column("int", {
    name: "default_status",
    nullable: true,
    comment: "是否为默认等级：0->不是；1->是",
  })
  defaultStatus: number | null;

  @Column("decimal", {
    name: "free_freight_point",
    nullable: true,
    comment: "免运费标准",
    precision: 10,
    scale: 2,
  })
  freeFreightPoint: string | null;

  @Column("int", {
    name: "comment_growth_point",
    nullable: true,
    comment: "每次评价获取的成长值",
  })
  commentGrowthPoint: number | null;

  @Column("int", {
    name: "priviledge_free_freight",
    nullable: true,
    comment: "是否有免邮特权",
  })
  priviledgeFreeFreight: number | null;

  @Column("int", {
    name: "priviledge_sign_in",
    nullable: true,
    comment: "是否有签到特权",
  })
  priviledgeSignIn: number | null;

  @Column("int", {
    name: "priviledge_comment",
    nullable: true,
    comment: "是否有评论获奖励特权",
  })
  priviledgeComment: number | null;

  @Column("int", {
    name: "priviledge_promotion",
    nullable: true,
    comment: "是否有专享活动特权",
  })
  priviledgePromotion: number | null;

  @Column("int", {
    name: "priviledge_member_price",
    nullable: true,
    comment: "是否有会员价格特权",
  })
  priviledgeMemberPrice: number | null;

  @Column("int", {
    name: "priviledge_birthday",
    nullable: true,
    comment: "是否有生日特权",
  })
  priviledgeBirthday: number | null;

  @Column("varchar", { name: "note", nullable: true, length: 200 })
  note: string | null;
}
