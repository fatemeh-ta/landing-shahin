<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: "bg-[var(--SurfaceNeutralLevel18)]",
  },
});
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
