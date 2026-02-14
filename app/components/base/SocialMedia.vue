<script lang="ts" setup>
const socialItems = [
  {
    title: "telegram",
    to: "https://tailwindcss.com/docs/grid-column",
    icon: "i-ph-telegram-logo",
  },

  {
    title: "instagram",
    to: "/instagram",
    icon: "i-ph-instagram-logo",
  },

  {
    title: "linkedin",
    to: "/linkedin",
    icon: "i-ph-linkedin-logo",
  },
];

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-4 items-center">
    <BaseButton
      v-for="(item, index) in socialItems"
      :key="index"
      :icon="item.icon"
      :variant="'link'"
      class="text-white"
      :className="'p-0 size-5 '"
      :href="item.to"
      target="_blank"
      rel="noopener noreferrer"
      :title="t(item.title)"
    />
  </div>
</template>
