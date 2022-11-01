<script lang="ts" setup>
import BlockWrapper from "./components/block-wrapper.vue";
import TotalChart from "./components/TotalChart.vue";
import { Ref, ref, reactive } from "vue";

/**
 * @description: 绑定日期控件
 */
const orderDate = ref<Array<Date>>(new Array<any>());
orderDate.value = [new Date("2018-11-01"), new Date("2018-11-10")];

const xAxisData = ref(new Array<any>());
const orderCountList = ref(new Array<number>());
const orderTotalList = ref(new Array<number>());
/**
 * @description: 当日期控件的数值变化时，更新图表
 * @param {Array<Date>} val
 * @return {*}
 */
const changeChart = (val: Array<Date>): void => {
  setOrderData();
};

const setOrderData = () => {
  resetOrderData();
  let start = orderDate.value[0].getTime();
  let end = orderDate.value[1].getTime();
  orderData.forEach((item) => {
    let itemTime = new Date(item.date);
    if (itemTime.getTime() >= start && itemTime.getTime() <= end) {
      xAxisData.value.push(item.date);
      orderCountList.value.push(item.orderCount);
      orderTotalList.value.push(item.orderAmount);
    }
  });
};

const resetOrderData = () => {
  xAxisData.value.length = 0;
  orderCountList.value.length = 0;
  orderTotalList.value.length = 0;
};

const orderData = [
  { date: "2018-11-01", orderCount: 10, orderAmount: 1093 },
  { date: "2018-11-02", orderCount: 20, orderAmount: 2230 },
  { date: "2018-11-03", orderCount: 33, orderAmount: 3623 },
  { date: "2018-11-04", orderCount: 50, orderAmount: 6423 },
  { date: "2018-11-05", orderCount: 80, orderAmount: 8492 },
  { date: "2018-11-06", orderCount: 60, orderAmount: 6293 },
  { date: "2018-11-07", orderCount: 20, orderAmount: 2293 },
  { date: "2018-11-08", orderCount: 60, orderAmount: 6293 },
  { date: "2018-11-09", orderCount: 50, orderAmount: 5293 },
  { date: "2018-11-10", orderCount: 30, orderAmount: 3293 },
  { date: "2018-11-11", orderCount: 20, orderAmount: 2293 },
  { date: "2018-11-12", orderCount: 80, orderAmount: 8293 },
  { date: "2018-11-13", orderCount: 100, orderAmount: 10293 },
  { date: "2018-11-14", orderCount: 10, orderAmount: 1293 },
  { date: "2018-11-15", orderCount: 40, orderAmount: 4293 },
];

setTimeout(() => {
  setOrderData();
}, 500);
</script>

<template>
  <div class="app-contain">
    <div class="address-layout">
      <el-row :gutter="20">
        <el-col :span="6">
          <block-wrapper>
            <div class="title">前端项目</div>
            <div class="address-contain">
              <a
                href="https://github.com/PBTL-github/Electric-business-platform/tree/main/web-front"
                target="_blank"
                >Electric-web-front</a
              >
            </div>
          </block-wrapper>
        </el-col>
        <el-col :span="6">
          <block-wrapper>
            <div class="title">后端项目</div>
            <div class="address-contain">
              <a
                href="https://github.com/PBTL-github/Electric-business-platform/tree/main/web-back"
                target="_blank"
                >Electric-web-back</a
              >
            </div>
          </block-wrapper>
        </el-col>
      </el-row>
    </div>

    <div class="total-layout">
      <el-row :gutter="20">
        <el-col :span="6">
          <block-wrapper>
            <div class="total-wrapper">
              <el-icon class="total-icon"><component is="Tickets" /></el-icon>
              <div class="total-wrapper-contain">
                <div class="total-title">今日订单总数</div>
                <div class="total-value">200</div>
              </div>
            </div>
          </block-wrapper>
        </el-col>
        <el-col :span="6">
          <block-wrapper>
            <div class="total-wrapper">
              <el-icon class="total-icon"><component is="Money" /></el-icon>
              <div class="total-wrapper-contain">
                <div class="total-title">今日销售总额</div>
                <div class="total-value">￥5000.00</div>
              </div>
            </div>
          </block-wrapper>
        </el-col>
        <el-col :span="6">
          <block-wrapper>
            <div class="total-wrapper">
              <el-icon class="total-icon"><component is="Coin" /></el-icon>
              <div class="total-wrapper-contain">
                <div class="total-title">昨日销售总额</div>
                <div class="total-value">￥5000.00</div>
              </div>
            </div>
          </block-wrapper>
        </el-col>
      </el-row>
    </div>

    <div class="un-handle-layout">
      <block-wrapper>
        <div class="un-handle-title">待处理事务</div>
        <div class="un-handle-contain">
          <el-row :gutter="25">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-item">待付款订单</span>
                <span class="item-number">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-item">已完成订单</span>
                <span class="item-number">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-item">待确认收货订单</span>
                <span class="item-number">(10)</span>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="25">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-item">待发货订单</span>
                <span class="item-number">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-item">新缺货登记</span>
                <span class="item-number">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-item">待处理退款申请</span>
                <span class="item-number">(10)</span>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="25">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-item">已发货订单</span>
                <span class="item-number">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-item">待处理退货订单</span>
                <span class="item-number">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-item">广告位即将到期</span>
                <span class="item-number">(10)</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </block-wrapper>
    </div>

    <div class="overview-layout">
      <el-row :gutter="20">
        <el-col :span="12">
          <block-wrapper>
            <div class="title">商品总览</div>
            <div class="overview-contain">
              <el-row>
                <el-col :span="6" class="overview-item-value">100</el-col>
                <el-col :span="6" class="overview-item-value">40</el-col>
                <el-col :span="6" class="overview-item-value">50</el-col>
                <el-col :span="6" class="overview-item-value">500</el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="overview-item-title">已下架</el-col>
                <el-col :span="6" class="overview-item-title">已上架</el-col>
                <el-col :span="6" class="overview-item-title">库存紧张</el-col>
                <el-col :span="6" class="overview-item-title">全部商品</el-col>
              </el-row>
            </div>
          </block-wrapper>
        </el-col>
        <el-col :span="12">
          <block-wrapper>
            <div class="title">用户总览</div>
            <div class="overview-contain">
              <el-row>
                <el-col :span="6" class="overview-item-value">100</el-col>
                <el-col :span="6" class="overview-item-value">200</el-col>
                <el-col :span="6" class="overview-item-value">1000</el-col>
                <el-col :span="6" class="overview-item-value">5000</el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="overview-item-title">今日新增</el-col>
                <el-col :span="6" class="overview-item-title">昨日新增</el-col>
                <el-col :span="6" class="overview-item-title">本月新增</el-col>
                <el-col :span="6" class="overview-item-title">会员总数</el-col>
              </el-row>
            </div>
          </block-wrapper>
        </el-col>
      </el-row>
    </div>

    <div class="order-total-layout">
      <block-wrapper>
        <div class="title">订单统计</div>
        <el-row>
          <el-col :span="4">
            <div class="order-total-show">
              <div class="order-total-item">
                <div class="order-total-title">本月订单数</div>
                <div class="order-total-value">10000</div>
                <div class="contrast">
                  <span class="contrast-go-up">+10%</span>
                  <span class="contrast-target">同比上月</span>
                </div>
              </div>

              <div class="order-total-item">
                <div class="order-total-title">本周订单总数</div>
                <div class="order-total-value">1000</div>
                <div class="contrast">
                  <span class="contrast-fall">-10%</span>
                  <span class="contrast-target">同比上周</span>
                </div>
              </div>

              <div class="order-total-item">
                <div class="order-total-title">本月销售总额</div>
                <div class="order-total-value">100000</div>
                <div class="contrast">
                  <span class="contrast-go-up">+10%</span>
                  <span class="contrast-target">同比上月</span>
                </div>
              </div>

              <div class="order-total-item">
                <div class="order-total-title">本周销售总额</div>
                <div class="order-total-value">50000</div>
                <div class="contrast">
                  <span class="contrast-fall">-10%</span>
                  <span class="contrast-target">同比上周</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="order-total-char">
              <el-date-picker
                style="float: right"
                size="small"
                v-model="orderDate"
                type="daterange"
                unlink-panels
                start-placeholder="开始日期"
                range-separator="到"
                end-placeholder="结束日期"
                @change="changeChart"
              />
              <div class="line-char">
                <total-chart
                  :x-axis-data="xAxisData"
                  :order-count-list="orderCountList"
                  :order-total-list="orderTotalList"
                />
              </div>
            </div>
          </el-col>
        </el-row>
      </block-wrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-contain {
  & {
    width: 1000px;
    margin: 0 auto;
    font-size: 20px;
  }

  .title {
    & {
      padding: 15px 20px;
      font-weight: 600;
      background-color: #f2f6fc;
    }
  }

  .address-contain {
    & {
      padding: 20px;
      font-size: 18px;
    }

    a {
      color: #64a2ff;
    }
  }

  .total-layout {
    & {
      margin-top: 20px;
    }

    .total-wrapper {
      & {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .total-icon {
        & {
          width: 60px;
          height: 60px;
          color: #64a2ff;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      }

      &-contain {
        & {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .total-title {
          & {
            color: #909399;
          }
        }
      }
    }
  }

  .un-handle-layout {
    & {
      margin-top: 20px;
    }

    .un-handle-title {
      & {
        padding: 15px 20px;
        font-weight: 600;
        background-color: #f2f6fc;
      }
    }

    .un-handle-contain {
      & {
        padding: 20px 40px;
        font-size: 18px;
      }

      .un-handle-item {
        & {
          display: flex;
          justify-content: space-between;
          border-bottom: solid 1px #ebeef5;
          padding: 10px;
        }

        .font-item {
          & {
            color: #606266;
          }
        }

        .item-number {
          & {
            color: #f56c6c;
          }
        }
      }
    }
  }

  .overview-layout {
    & {
      margin-top: 20px;
    }

    .overview-contain {
      & {
        padding: 40px;
        text-align: center;
      }

      .overview-item-value {
        & {
          color: #f56c6c;
          font-size: 24px;
        }
      }

      .overview-item-title {
        & {
          margin-top: 10px;
          font-size: 16px;
        }
      }
    }
  }

  .order-total-layout {
    & {
      margin-top: 20px;
    }

    .order-total-show {
      & {
        padding: 20px;
        border-right: solid 1px #dcdfe6;
      }

      .order-total-item {
        &:not(:first-child) {
          margin-top: 20px;
        }

        .order-total-title {
          & {
            font-size: 14px;
            color: #909399;
          }
        }

        .order-total-value {
          & {
            padding: 10px 0;
            font-size: 24px;
            color: #606266;
          }
        }

        .contrast {
          & {
            font-size: 14px;
          }

          &-go-up {
            color: #67c23a;
            margin-right: 5px;
          }

          &-fall {
            color: #f56c6c;
            margin-right: 5px;
          }

          &-target {
            color: #c0c4cc;
          }
        }
      }
    }
    .order-total-char {
      & {
        width: 100%;
        height: 100%;
        padding: 10px;
      }

      .line-char {
        & {
          padding-top: 25px;
          margin: 0 auto;
          width: 95%;
          height: 98%;
        }
      }
    }
  }
}
</style>
