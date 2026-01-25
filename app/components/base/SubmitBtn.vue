<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    class?: string;
    isDisable?: boolean;
  }>(),
  {
    class: "grow justify-center",
    isDisable: false,
  },
);

const { t } = useI18n();
</script>

<template>
  <UButton
    type="submit"
    :label="t(label)"
    :class="class"
    size="xl"
    :disabled="isDisable"
    color="primary"
    :ui="{
      base: 'text-[var(--white)] ',
    }"
  />
</template>
