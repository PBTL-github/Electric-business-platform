/*
 * @Author: PBTL-github 2324009078@qq.com
 * @Date: 2023-12-13 16:21:20
 * @LastEditors: PBTL-github 2324009078@qq.com
 * @LastEditTime: 2023-12-15 02:33:12
 * @FilePath: \web-front\src\views\products\addProduct\utils\interfaces.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface GoodsRecommendation {
  newStatus: number; // 新品
  recommendation: number; // 推荐
}

interface memberPrice {
  memberLevelId: number;
  memberLevelName: '黄金会员' | '白金会员' | '钻石会员';
  memberPice?: number;
}

interface levelPriceList {
  count: number;
  discount: number;
  price?: number;
}

interface fullReductionPriceList {
  fullPrice: number;
  reducePrice: number;
}

interface addGoodsRuleForm {
  pro_classify: string; // 商品分类
  pro_name: string; // 商品名字
  subhead: string; // 副标题
  pro_brand: string; // 商品品牌
  pro_introduction?: string; // 商品介绍
  pro_SN?: string; // 商品货号
  pro_price: number; // 商品售价
  pro_market_price: number; // 商品市场价格
  pro_inventory: number; // 商品库存
  pro_unit?: string; // 计量单位
  pro_weight: number; // 商品重量
  pro_sort_size: number; // 商品排序sort
  giftPoints?: number; // 赠送积分
  giftGrowUpValue?: number; // 赠送成长值
  pointsBuyAstrict?: number; // 积分购买限制
  foreshowGoods?: boolean; // 预告商品
  goodsShelf?: boolean; // 商品上架
  goodsRecommendation?: GoodsRecommendation; // 商品推荐
  serverAssure?: Array<number>; // 服务保证
  detailPageHeading?: string; // 详细页标题
  detailPageDesc?: string; // 详细页描述
  goodsKeyword?: string; // 商品关键字
  goodsRemark?: string; // 商品备注
  promotionStartTime?: Date; // 促销开始时间
  promotionEndTime?: Date; // 促销结束时间
  promotionPrice?: number; // 促销价格
  memberPrice?: Array<memberPrice>; // 会员价格
  levelPriceList: Array<levelPriceList>; // 阶梯价格
  fullReductionPriceList: Array<fullReductionPriceList>; // 满减价格
  selectDiscountsMode: 'none' | 'specialPromotion' | 'memberPrice' | 'level' | 'fullReductionPrice'; // 选择优惠方式 无优惠 特惠促销 会员价格 阶梯价格 满减价格
}

export type { addGoodsRuleForm, GoodsRecommendation };
