<script lang="ts" setup>
import ECharts from "echarts";
import VChart from "vue-echarts";
import { ref } from "vue";
import { use } from "echarts/core";
import { LineChart, LineSeriesOption } from "echarts/charts";
import {
  GridComponent,
  GridComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { UniversalTransition } from "echarts/features";

use([
  GridComponent,
  TooltipComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

type EChartsOption = ECharts.ComposeOption<
  LineSeriesOption | GridComponentOption | TooltipComponentOption | LegendComponentOption
>;

const Prop = defineProps({
  xAxisData: {
    type: Array<any>,
    defalut: new Array<any>(),
  },
  orderCountList: {
    type: Array<number>,
    defalut: new Array<number>(),
  },
  orderTotalList: {
    type: Array<number>,
    defalut: new Array<number>(),
  },
});
// console.log(Prop);

const setoption = (): EChartsOption => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    //   legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      axisLabel: {
        showMaxLabel: true,
        interval: Math.ceil(Prop.xAxisData.length / 5),
      },
      boundaryGap: false,
      data: Prop.xAxisData,
    },
    yAxis: [
      {
        name: "订单总金额(元)",
        type: "value",
        position: "right",
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            type: "solid",
            color: "#333",
          },
        },
        min: 0,
        max: Math.max(...Prop.orderTotalList) * 1.3,
        interval: Math.ceil((Math.max(...Prop.orderTotalList) * 1.3) / 4),
      },
      {
        name: "订单数量(单)",
        type: "value",
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            type: "solid",
            color: "#333",
          },
        },
        min: 0,
        max: Math.max(...Prop.orderCountList) * 1.5,
        interval: Math.ceil((Math.max(...Prop.orderCountList) * 1.5) / 4),
      },
    ],
    series: [
      {
        name: "订单总金额",
        type: "line",
        areaStyle: {
          color: "#5cc0e3",
          opacity: 1,
        },
        lineStyle: {
          color: "#5cc0e3",
        },
        emphasis: {
          focus: "none",
        },
        smooth: true,
        yAxisIndex: 0,
        data: Prop.orderTotalList,
      },
      {
        name: "订单数量",
        type: "line",
        areaStyle: {
          color: "#5ee1c6",
          opacity: 1,
        },
        lineStyle: {
          color: "#5ee1c6",
        },
        emphasis: {
          focus: "none",
        },
        smooth: true,
        yAxisIndex: 1,
        data: Prop.orderCountList,
      },
    ],
  };
};

const option = ref<EChartsOption>({});

setTimeout(() => {
  option.value = setoption();
}, 500);
</script>

<template>
  <v-chart class="vchart" :option="option" />
</template>

<style lang="scss" scoped>
.vchart {
  & {
    width: 100%;
    height: 100%;
  }
}
</style>
