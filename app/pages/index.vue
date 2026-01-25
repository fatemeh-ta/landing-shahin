<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t("dashboard.title"),
});
</script>

<template>
  <h1 class="text-lg md:text-2xl-custom font-semibold pb-2 md:pb-3">
    {{ t("dashboard.publicShahin") }}
  </h1>
  <span class="text-sm md:text-base text-[var(--ContentNeutralLevel6)]">
    {{ t("dashboard.publicShahinDesc") }}
  </span>
  <HomeTimeRange />
</template>
