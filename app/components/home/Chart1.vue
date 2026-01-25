<script setup lang="ts">
import type {
  ECBasicOption,
  CallbackDataParams,
} from "echarts/types/dist/shared";

interface BoxplotFormatterParams {
  value: number;
  dimension?: number;
}
const rawData = [
  [100, 150, 175, 200, 290], // Shatel (Shatel)
  [120, 170, 190, 220, 250], // Asiatech
  [100, 140, 160, 180, 230], // Hiweb
  [90, 130, 150, 170, 210], // Safirnet (1&1)
  [80, 120, 140, 160, 200], // Pars Online
  [70, 110, 130, 150, 190], // Mobinnet
  [60, 100, 120, 140, 180], // Fanava
  [50, 90, 110, 130, 170], // Pishgaman
  [50, 80, 100, 120, 160], // Datak
  [50, 80, 100, 120, 160], // Sabanet
  [20, 50, 70, 90, 500], // Afranet
  [50, 70, 80, 90, 110], // Shatel Mobile
  [40, 60, 70, 80, 100], // Irancell
  [30, 50, 60, 70, 90], // MCI
  [20, 40, 50, 60, 80], // Rightel
  [10, 20, 30, 40, 50], // Thunderbyte
  [5, 10, 20, 25, 30], // Sepanta
  [2, 5, 10, 15, 20], // Kish Online
];

const categories = [
  "Kish Online",
  "Sepanta",
  "Thunderbyte",
  "Rightel",
  "MCI",
  "Irancell",
  "Shatel Mobile",
  "Afranet",
  "Sabanet",
  "Datak",
  "Pishgaman",
  "Fanava",
  "Mobinnet",
  "Pars Online",
  "Safirnet (1&1)",
  "Hiweb",
  "Asiatech",
  "Shatel (Shatel)",
];

const boxplotOption = ref<ECBasicOption>({
  title: [
    {
      text: "زمان پاسخ‌دهی DNS",
      left: "center",
    },
    {
      text: "سرعت پاسخ سرورهای DNS در هنگام بارگذاری صفحات.",
      left: "center",
      top: 30,
      textStyle: {
        fontSize: 14,
        fontWeight: "normal",
      },
    },
  ],
  tooltip: {
    formatter: function (param: CallbackDataParams | CallbackDataParams[]) {
      const item = Array.isArray(param) ? param[0] : param;

      if (item && Array.isArray(item.data) && item.data.length === 6) {
        const data = item.data.slice(1) as number[];
        const categoryIndex = item.data[0] as number;

        return [
          `<span style="font-weight: bold;">${categoryIndex}</span>`,
          `Max: ${data[4]} ms`,
          `Q3: ${data[3]} ms`,
          `Median: ${data[2]} ms`,
          `Q1: ${data[1]} ms`,
          `Min: ${data[0]} ms`,
        ].join("<br/>");
      }
      return "";
    },
  },
  grid: {
    left: "10%",
    right: "10%",
    bottom: "10%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    name: "ms",
    // axisLabel: {
    //   formatter: "{value} ms",
    // },
  },
  yAxis: {
    type: "category",
    data: categories,
    boundaryGap: true,
    nameGap: 30,
    splitArea: {
      show: false,
    },
    axisLabel: {
      align: "right",
    },
  },
  dataset: [
    {
      source: rawData,
    },
    {
      transform: {
        type: "boxplot",
        config: {
          itemNameFormatter: function (params: BoxplotFormatterParams) {
            return categories[params.value];
          },
        },
      },
    },
  ],
  series: [
    {
      name: "DNS Response Time",
      type: "boxplot",
      datasetIndex: 1,
      //   boxWidth: [20, 50], // Adjust the width of the box
      itemStyle: {
        // Style for the box and whiskers
        borderColor: "#4a90e2",
        borderWidth: 1,
        color: "#d0e3f8",
      },
    },
  ],
});
</script>

<template>
  <BaseChart :option="boxplotOption" height="80vh" />
</template>
