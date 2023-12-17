import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_member_statistics_info", { schema: "mall" })
export class UmsMemberStatisticsInfo {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "member_id", nullable: true })
  memberId: string | null;

  @Column("decimal", {
    name: "consume_amount",
    nullable: true,
    comment: "累计消费金额",
    precision: 10,
    scale: 2,
  })
  consumeAmount: string | null;

  @Column("int", { name: "order_count", nullable: true, comment: "订单数量" })
  orderCount: number | null;

  @Column("int", {
    name: "coupon_count",
    nullable: true,
    comment: "优惠券数量",
  })
  couponCount: number | null;

  @Column("int", { name: "comment_count", nullable: true, comment: "评价数" })
  commentCount: number | null;

  @Column("int", {
    name: "return_order_count",
    nullable: true,
    comment: "退货数量",
  })
  returnOrderCount: number | null;

  @Column("int", { name: "login_count", nullable: true, comment: "登录次数" })
  loginCount: number | null;

  @Column("int", { name: "attend_count", nullable: true, comment: "关注数量" })
  attendCount: number | null;

  @Column("int", { name: "fans_count", nullable: true, comment: "粉丝数量" })
  fansCount: number | null;

  @Column("int", { name: "collect_product_count", nullable: true })
  collectProductCount: number | null;

  @Column("int", { name: "collect_subject_count", nullable: true })
  collectSubjectCount: number | null;

  @Column("int", { name: "collect_topic_count", nullable: true })
  collectTopicCount: number | null;

  @Column("int", { name: "collect_comment_count", nullable: true })
  collectCommentCount: number | null;

  @Column("int", { name: "invite_friend_count", nullable: true })
  inviteFriendCount: number | null;

  @Column("datetime", {
    name: "recent_order_time",
    nullable: true,
    comment: "最后一次下订单时间",
  })
  recentOrderTime: Date | null;
}
