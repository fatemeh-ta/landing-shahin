<script setup lang="ts">
import DatePicker from "vue3-persian-datetime-picker";

type PickerType = "date" | "datetime" | "time";

defineProps<{
  modelValue: any;
  type?: PickerType;
  range?: boolean;
  placeHolder?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", v: any): void;
}>();
</script>

<template>
  <DatePicker
    :value="modelValue"
    :type="type ?? 'date'"
    :range="range"
    locale="fa,en"
    display-format=" jDD jMMMM jYYYY - HH:mm"
    format="YYYY-MM-DD HH:mm"
    :auto-submit="false"
    :placeholder="placeHolder"
    color="var(--ContentNeutralLevel4)"
    compact-time
    @change="(v: any) => emit('update:modelValue', v)"
  >
  </DatePicker>
</template>
