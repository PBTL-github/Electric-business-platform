import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ums_member_receive_address", { schema: "mall" })
export class UmsMemberReceiveAddress {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "member_id", nullable: true })
  memberId: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "收货人名称",
    length: 100,
  })
  name: string | null;

  @Column("varchar", { name: "phone_number", nullable: true, length: 64 })
  phoneNumber: string | null;

  @Column("int", {
    name: "default_status",
    nullable: true,
    comment: "是否为默认",
  })
  defaultStatus: number | null;

  @Column("varchar", {
    name: "post_code",
    nullable: true,
    comment: "邮政编码",
    length: 100,
  })
  postCode: string | null;

  @Column("varchar", {
    name: "province",
    nullable: true,
    comment: "省份/直辖市",
    length: 100,
  })
  province: string | null;

  @Column("varchar", {
    name: "city",
    nullable: true,
    comment: "城市",
    length: 100,
  })
  city: string | null;

  @Column("varchar", {
    name: "region",
    nullable: true,
    comment: "区",
    length: 100,
  })
  region: string | null;

  @Column("varchar", {
    name: "detail_address",
    nullable: true,
    comment: "详细地址(街道)",
    length: 128,
  })
  detailAddress: string | null;
}
