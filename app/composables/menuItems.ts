import type { MenuItem } from "@/types/menu";

export function usePublicDashboardMenu() {
  const { t } = useI18n();
  const items = ref<MenuItem>([
    {
      header: t("networkPerformance"),
      icon: "i-ph-globe-simple",
      children: [
        {
          active: true,
          label: t("dnsResponseTime"),
          to: "#dnsResponseTime",
        },
        {
          active: false,
          label: t("pageDownloadTime"),
          to: "#pageDownloadTime",
        },
        {
          active: false,
          label: t("tcpConnectionTime"),
          to: "#tcpConnectionTime",
        },
      ],
    },

    {
      header: t("timeBehavior"),
      icon: "i-ph-clock",

      children: [
        {
          active: false,
          label: t("hourlyPatternUserPresence"),
          to: "#hourlyPattern",
        },
        {
          active: false,
          label: t("userPresencePatternByDayTime"),
          to: "#patternByDayTime",
        },
        {
          active: false,
          label: t("userPresencePatternWeekdays"),
          to: "#patternWeekdays",
        },
        {
          active: false,
          label: t("monthlyUserAttendancePattern"),
          to: "monthlyPattern",
        },
      ],
    },

    {
      header: t("userFeatures"),
      icon: "i-ph-laptop",

      children: [
        {
          active: false,
          label: t("browserDistribution"),
          to: "#browser",
        },
        {
          active: false,
          label: t("operatingSystemDistribution"),
          to: "#operatingSystem",
        },
        {
          active: false,
          label: t("usersDeviceType"),
          to: "#deviceType",
        },
        {
          active: false,
          label: t("deviceBrand"),
          to: "#deviceBrand",
        },
      ],
    },
  ]);

  return {
    items,
  };
}
