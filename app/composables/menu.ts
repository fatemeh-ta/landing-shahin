import type { MainMenu } from "@/types/menu";
import type { FooterColumn } from "@nuxt/ui";

export function useMainMenu() {
  const colorMode = useColorMode();
  const { t } = useI18n();
  const localePath = useLocalePath();

  const itemsMainMenu = computed<MainMenu[]>(() => [
    {
      label: colorMode.value === "light" ? t("darkTheme") : t("lightTheme"),
      subMenu: false,
      to: "",
      isItem: true,
    },
    {
      label: t("language"),
      subMenu: false,
      to: "",
      isItem: true,
    },

    {
      label: t("shahinDashboard"),
      to: localePath("/shahin-dashboard"),
      subMenu: false,
    },
    {
      label: t("publicDashboard"),
      to: localePath("/public-dashboard"),
      subMenu: false,
    },
    {
      label: t("services"),
      to: "",
      subMenu: true,
      children: [
        { label: t("analyticsService"), to: localePath("/services/analytics") },
        { label: t("seoService"), to: localePath("/services/seo") },
        {
          label: t("performanceService"),
          to: localePath("/services/performance"),
        },
      ],
    },
    { label: t("pricing"), to: localePath("/pricing"), subMenu: false },
    { label: t("faq"), to: localePath("/faq"), subMenu: false },
  ]);

  const itemsFooterMenu = computed<FooterColumn[]>(() => [
    {
      label: t("lawsPolicies"),
      children: [
        {
          label: t("termsConditionsUse"),
          to: localePath("/"),
        },
        { label: t("privacyPolicy"), to: localePath("/") },
      ],
    },

    {
      label: t("resourcesTraining"),
      children: [
        { label: t("blog"), to: localePath("/services/analytics") },
        { label: t("helpCenter"), to: localePath("/services/seo") },
      ],
    },

    {
      label: t("contactInformation"),
      children: [
        {
          label: t("callNumber"),
          to: "tel:021-91008212",
          icon: "i-ph-phone-call",
        },
        {
          label: t("emailInfo"),
          to: "email:info@shahin.live",
          icon: "i-ph-envelope-simple",
        },
        { label: t("addressInfo"), to: "", icon: "i-ph-map-pin" },
      ],
    },
  ]);

  return { itemsMainMenu, itemsFooterMenu };
}
