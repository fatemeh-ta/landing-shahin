<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t("dashboard.title"),
  meta: [
    { name: "description", content: "shahin" },
    { property: "og:title", content: "shahin" },
    { property: "og:description", content: "My page shahin" },
    { name: "twitter:card", content: "shahin" },
  ],
});

const { items } = usePublicDashboardMenu();

const activeSection = ref("dnsResponseTime");

function onActiveChange(id: string) {
  activeSection.value = id;
}

onMounted(() => {
  activeSection.value = location.hash.replace("#", "") || "dnsResponseTime";
});
</script>

<template>
  <h1 class="text-lg md:text-2xl-custom font-semibold pb-2 md:pb-3">
    {{ t("dashboard.publicShahin") }}
  </h1>

  <span class="text-sm md:text-base text-[var(--ContentNeutralLevel9)]">
    {{ t("dashboard.publicShahinDesc") }}
  </span>

  <HomeTimeRange class="mt-6 mb-5" />

  <div class="lg:flex gap-6 items-start">
    <BaseMenu :items="items" @active-change="onActiveChange" />
    <div class="w-full">
      <div
        id="dnsResponseTime"
        class="h-[600px]"
        :class="activeSection === 'dnsResponseTime' ? 'shadow-box-level1' : ''"
      >
        bo first
      </div>
      <div
        id="pageDownloadTime"
        class="h-[600px]"
        :class="activeSection === 'pageDownloadTime' ? 'shadow-box-level1' : ''"
      >
        bo second
      </div>
      <div
        id="tcpConnectionTime"
        class="h-[600px]"
        :class="
          activeSection === 'tcpConnectionTime' ? 'shadow-box-level1' : ''
        "
      >
        bo third
      </div>
      <div
        id="hourlyPattern"
        class="h-[600px]"
        :class="activeSection === 'hourlyPattern' ? 'shadow-box-level1' : ''"
      >
        bo four
      </div>
      <div
        id="patternByDayTime"
        class="h-[600px]"
        :class="activeSection === 'patternByDayTime' ? 'shadow-box-level1' : ''"
      >
        bo four
      </div>
      <div
        id="patternWeekdays"
        class="h-[600px]"
        :class="activeSection === 'patternWeekdays' ? 'shadow-box-level1' : ''"
      >
        bo four
      </div>
      <div
        id="monthlyPattern"
        class="h-[600px]"
        :class="activeSection === 'monthlyPattern' ? 'shadow-box-level1' : ''"
      >
        bo four
      </div>
      <div
        id="browser"
        class="h-[600px]"
        :class="activeSection === 'browser' ? 'shadow-box-level1' : ''"
      >
        bo four
      </div>
      <div
        id="operatingSystem"
        class="h-[600px]"
        :class="activeSection === 'operatingSystem' ? 'shadow-box-level1' : ''"
      >
        bo four
      </div>
    </div>
  </div>
</template>
