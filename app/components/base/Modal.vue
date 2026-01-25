<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
}>();

const showModal = defineModel<boolean>("showModal");
const { t } = useI18n();
const open = ref(false);

watch(
  () => showModal.value,
  (newVal) => {
    open.value = newVal ?? false;
  },
);
</script>

<template>
  <UModal
    v-model:open="open"
    :title="t(title)"
    :description="t(description ?? '')"
    :ui="{
      footer: 'w-full',
      header: 'justify-between items-start border-none',
      body: 'border-none',
    }"
  >
    <UButton v-if="!showModal" label="Open" color="neutral" variant="subtle" />

    <template #body> ;;;;;;;;;;;;;;;;;; </template>
    <template #close>
      <UButton color="neutral" variant="ghost" icon="i-ph-x" size="md" />
    </template>

    <template #footer="{ close }">
      <div class="flex gap-3 w-full">
        <UButton
          label="Cancel"
          variant="outline"
          @click="close"
          class="grow justify-center"
          size="xl"
        />
        <UButton label="Submit" class="grow justify-center" size="xl" />
      </div>
    </template>
  </UModal>
</template>
