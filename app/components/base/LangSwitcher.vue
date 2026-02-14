<script setup lang="ts">
import type { DropDownMenu, VariantSelected } from "@/types/global";

withDefaults(
  defineProps<{
    width?: string;
    variant?: VariantSelected;
    iconColorClass?: string;
    className?: string;
  }>(),
  {
    width: "w-[130px]",
    variant: "none",
    iconColorClass: "text-white",
    className: "text-white",
  },
);
const { locale, locales, setLocale } = useI18n();

const items = computed<DropDownMenu[]>(() =>
  locales.value.map((i) => {
    return {
      title: i.name,
      id: i.code,
    };
  }),
);

watch(
  () => locale.value,
  (newVal) => {
    setLocale(newVal);
  },
);
</script>

<template>
  <BaseSelectBox
    v-model:innerValue="locale"
    :items="items"
    :icon="'i-ph-globe-simple'"
    :variant="variant"
    :width="width"
    :iconColor="iconColorClass"
    :class="className"
  />
</template>
