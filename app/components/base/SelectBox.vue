<script setup lang="ts">
import type { DropDownMenu } from "@/types/global";

const value = defineModel<string>("selectedTime");
withDefaults(
  defineProps<{
    items: DropDownMenu[];
    icon?: string;
  }>(),
  {
    icon: "i-ph-calendar-dots",
  },
);

const { locale } = useI18n();
const isRtl = computed(() => ["fa", "ar", "ur"].includes(locale.value));
</script>

<template>
  <USelect
    v-model="value"
    :items="items"
    :icon="icon"
    variant="none"
    class="w-48 border-1 border-[var(--BorderNeutralLevel1)] rounded-lg bg-[var(--SurfaceNeutralLevel2)]"
    :ui="{
      leadingIcon: 'text-[var(--ContentNeutralLevel4)] ',
      content: `max-h-[400px] bg-[var(--SurfaceNeutralLevel2)] ring-[var(--BorderNeutralLevel1)] ${isRtl ? '[direction:rtl]' : '[direction:ltr]'} `,
      item: 'text-sm p-3',
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
