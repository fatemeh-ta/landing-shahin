<script setup lang="ts">
import type { ECBasicOption } from "echarts/types/dist/shared";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {
  BarChart,
  LineChart,
  PieChart,
  BoxplotChart,
  HeatmapChart,
} from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DatasetComponent,
  VisualMapComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  BoxplotChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DatasetComponent,
  HeatmapChart,
  VisualMapComponent,
]);

const props = withDefaults(
  defineProps<{
    option: ECBasicOption;
    theme?: string;
    height?: number | string;
  }>(),
  {
    theme: "light",
    height: "40vh",
  },
);

const initOptions = {
  renderer: "canvas" as const,
};

const chartStyle = computed(() => ({
  height: typeof props.height === "number" ? `${props.height}vh` : props.height,
}));
</script>

<template>
  <ClientOnly>
    <VChart
      :option="option"
      :init-options="initOptions"
      :style="chartStyle"
      autoresize
    />

    <template #fallback>
      <div :style="chartStyle" class="chart-skeleton" />
    </template>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.chart-skeleton {
  background: linear-gradient(
    90deg,
    var(--ui-primary) 25%,
    var(--ui-error) 37%,
    var(--ui-warning) 63%
  );
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
