<script setup lang="ts">
import type { TimeRangeResult } from "@/types/timeRange";

defineProps<{
  title: string;
  description?: string;
}>();

const showModal = defineModel<boolean>("showModal");
const { t } = useI18n();
const open = ref(false);
const customDate = ref<TimeRangeResult>({ fromDateTime: "", endDateTime: "" });
watch(
  () => showModal.value,
  (newVal) => {
    open.value = newVal ?? false;
  },
);

watch(open, (newVal) => {
  console.log(newVal, "newValnewValnewValnewVal");
});
</script>

<template>
  <UModal
    v-model:open="open"
    :title="t(title)"
    :description="t(description ?? '')"
    :ui="{
      header: 'justify-between items-start border-none',
      body: 'border-none',
      description: 'text-[var(-ContentNeutralLevel6)] pt-1',
      content: 'overflow-visible',
    }"
  >
    <template #body>
      <div class="flex gap-3">
        <BaseDatePickerRange v-model:customDate="customDate" />
      </div>
    </template>
    <template #close>
      <UButton color="neutral" variant="ghost" icon="i-ph-x" size="md" />
    </template>

    <template #footer="{ close }">
      <div class="flex gap-3 w-full">
        <BaseCancelBtn :label="'cancel'" @close="close" />

        <BaseSubmitBtn :label="'save'" :isDisable="false" />
      </div>
    </template>
  </UModal>
</template>
