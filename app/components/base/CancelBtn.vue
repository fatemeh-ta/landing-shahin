<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    class?: string;
  }>(),
  {
    class: "grow justify-center",
  },
);

const emit = defineEmits<{
  (e: "close"): void;
}>();

const { t } = useI18n();

const closeFn = () => {
  emit("close");
};
</script>

<template>
  <UButton
    :label="t(label)"
    variant="outline"
    :class="class"
    size="xl"
    color="secondary"
    @click="closeFn"
  />
</template>
