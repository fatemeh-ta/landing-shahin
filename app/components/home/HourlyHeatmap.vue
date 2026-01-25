<script setup lang="ts">
import type { EChartsOption } from "echarts";

const hours = Array.from(
  { length: 24 },
  (_, i) => `${String(i).padStart(2, "0")}:00`,
);

const data = [
  1200, 4800, 2200, 1800, 5200, 7300, 8600, 2100, 3200, 7900, 6100, 4300, 2900,
  3100, 4100, 2600, 3900, 5400, 6800, 8200, 9000, 2500, 2700, 2300,
];

const heatmapData = data.map((value, hourIndex) => [hourIndex, 0, value]);

const option: EChartsOption = {
  grid: {
    top: 30,
    left: 0,
    right: 0,
    bottom: 50,
  },

  xAxis: {
    type: "category",
    data: hours,
    axisLine: { show: false },
    axisTick: { show: false },
  },

  yAxis: {
    type: "category",
    data: [""],
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
  },

  visualMap: {
    show: true,
    type: "continuous", // ✅ REQUIRED
    min: 0,
    max: 100,
    orient: "horizontal",
    left: "center",
    bottom: 0,
    inRange: {
      color: ["#eef2ff", "#c7d2fe", "#818cf8", "#4f46e5"],
    },
  },

  series: [
    {
      type: "heatmap",
      data: heatmapData,
      cellSize: [28, 28],
      itemStyle: {
        borderRadius: 6,
      },
      label: {
        show: true,
        formatter: ({ value }: any) => value[2],
      },
    },
  ],
};
</script>

<template>
  <BaseChart :option="option" height="180px" />
</template>
