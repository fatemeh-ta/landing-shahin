<script setup lang="ts">
const { locale } = useI18n();

if (import.meta.server) {
  useHead({
    htmlAttrs: {
      dir: locale.value === "fa" ? "rtl" : "ltr",
      lang: locale.value,
    },
  });
}
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
