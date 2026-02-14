<script setup lang="ts">
import type { Colors, Variant } from "@/types/global";
withDefaults(
  defineProps<{
    label?: string;
    icon?: string;
    className?: string;
    variant?: Variant;
    color?: Colors;
  }>(),
  {
    label: "",
    icon: "",
    className: "rounded-2xl text-xs px-6 py-3",
    color: "neutral",
    variant: "solid",
  },
);

const { t } = useI18n();
</script>

<template>
  <UButton
    :label="t(label)"
    :icon="icon"
    :class="className"
    :color="color"
    :variant="variant"
  >
  </UButton>
</template>
