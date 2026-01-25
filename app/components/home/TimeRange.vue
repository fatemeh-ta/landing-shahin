<script setup lang="ts">
import { useHomePage } from "@/store/home";
const { list } = timesList();
const homePage = useHomePage();

const showModal = computed<boolean>(() => homePage.selectedTime === "custom");
</script>

<template>
  <BaseSelectBox :items="list" v-model:selectedTime="homePage.selectedTime" />
  <HomeDatePickerModal
    :title="'selectRangeTime'"
    :description="'selectDateForEntry'"
    v-model:showModal="showModal"
  />
</template>
