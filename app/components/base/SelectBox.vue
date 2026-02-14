<script setup lang="ts">
import type { DropDownMenu, VariantSelected } from "@/types/global";

const value = defineModel<string>("innerValue");
withDefaults(
  defineProps<{
    items: DropDownMenu[];
    icon?: string;
    variant?: VariantSelected;
    width?: string;
    iconColor?: string;
  }>(),
  {
    icon: "i-ph-calendar-dots",
    variant: "subtle",
    width: "w-48",
    iconColor: "text-[var(--ContentNeutralLevel4)]",
  },
);

const { locale } = useI18n();
const isRtl = computed(() => ["fa"].includes(locale.value));
</script>

<template>
  <USelect
    v-model="value"
    :items="items"
    :icon="icon"
    :variant="variant"
    :class="['cursor-pointer rounded-lg', width]"
    :ui="{
      leadingIcon: iconColor,
      content: `max-h-[400px]  ${isRtl ? '[direction:rtl]' : '[direction:ltr]'} `,
      item: 'text-sm p-3 cursor-pointer',
      base: `text-sm h-10 ${isRtl ? '[direction:rtl]' : '[direction:ltr]'}`,
      leading: `${!icon && 'hidden'}`,
    }"
    valueKey="id"
    labelKey="title"
  >
    <template #trailing>
      <Icon
        name="ph:caret-down"
        class="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
      />
    </template>
  </USelect>
</template>
