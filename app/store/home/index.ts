import { type TimeRangeId, defaultTimeRange } from "@/types/timeRange";

export const useHomePage = defineStore("home", () => {
  const selectedTime = ref<TimeRangeId>(defaultTimeRange);
  const { locale } = useI18n();
  const range = computed(() => calcTimeRange(selectedTime.value, locale.value));

  // console.log(range.value, "-----------------------------");

  return {
    selectedTime,
    range,
  };
});
