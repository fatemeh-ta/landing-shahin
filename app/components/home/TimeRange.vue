<script setup lang="ts">
import { useHomePage } from "@/store/home";
const { list } = timesList();
const { t } = useI18n();
const homePage = useHomePage();

// const showModal = computed<boolean>(() => homePage.selectedTime === "custom");
</script>

<template>
  <div class="flex gap-3 items-center">
    <span>{{ t("rageTime") }} :</span>
    <BaseSelectBox
      :items="list"
      v-model:innerValue="homePage.selectedTime"
      :style="{ width: '232px' }"
    />
  </div>
</template>
