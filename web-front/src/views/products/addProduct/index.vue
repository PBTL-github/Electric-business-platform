<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
import VCharts from "echarts";
import { use } from "echarts/core";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import {
  GridComponent,
  GridComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption,
  TitleComponent,
  TitleComponentOption,
} from "echarts/components";
import { UniversalTransition } from "echarts/features";

type EChartsOption = VCharts.ComposeOption<
  GridComponentOption | TooltipComponentOption | LegendComponentOption | TitleComponentOption
>;

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  UniversalTransition,
  GridComponent,
]);
const option = ref<EChartsOption>({
  // title: {
  //   text: "Stacked Area Chart",
  // },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        show: false,
        // backgroundColor: "none",
      },
    },
  },
  legend: {
    data: ["Email", "Union Ads"],
  },
  // toolbox: {
  //   feature: {
  //     saveAsImage: {},
  //   },
  // },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
      position: "right",
      axisLine: {
        show: true,
        lineStyle: {
          color: "red",
          type: "solid",
          width: 1,
        },
      },
      axisLabel: {
        // show: true,
        fontStyle: "normal",
        color: "#333",
      },
    },
    {
      type: "value",
      position: "left",
      axisLine: {
        show: true,
        lineStyle: {
          color: "red",
          type: "solid",
          width: 1,
        },
      },
      axisLabel: {
        // show: true,
        fontStyle: "normal",
        color: "#333",
      },
    },
  ],
  series: [
    {
      name: "Email",
      type: "line",
      emphasis: {
        focus: "none",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
      // smooth: true,
    },
    {
      name: "Union Ads",
      type: "line",
      emphasis: {
        focus: "none",
      },
      data: [220, 182, 191, 234, 500, 330, 310],
      // smooth: true,
    },
  ],
});
</script>

<template>
  <v-chart class="chart" :option="option" />
</template>

<style lang="scss" scoped>
.chart {
  & {
    // width: 400px;
    height: 300px;
  }
}
</style>
