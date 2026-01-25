import type { TimeRangeId } from "@/types/timeRange";

export function timesList() {
  const { t } = useI18n();

  const list = computed<{ id: TimeRangeId; title: string }[]>(() => [
    { title: t("timeRange.yesterday"), id: "yesterday" },
    { title: t("timeRange.today"), id: "now" },
    { title: t("timeRange.last7Day"), id: "7days" },
    { title: t("timeRange.last30Day"), id: "30days" },
    { title: t("timeRange.lastMont"), id: "month" },
    { title: t("timeRange.thisMonth"), id: "thisMonth" },
    { title: t("timeRange.selectDate"), id: "custom" },
  ]);

  return { list };
}
