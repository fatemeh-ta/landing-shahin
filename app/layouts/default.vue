<script lang="ts" setup>
const { locale } = useI18n();
useHead(() => ({
  htmlAttrs: {
    dir: locale.value === "fa" ? "rtl" : "ltr",
    lang: locale.value,
  },
}));
</script>

<template>
  <StructureHeader />
  <main>
    <UContainer>
      <slot />
    </UContainer>
  </main>

  <StructureFooter />
</template>
