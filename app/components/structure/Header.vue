<script setup lang="ts">
import logoFa from "@/assets/images/logo-fa.svg";
const { t } = useI18n();
const colorMode = useColorMode();
const route = useRoute();

const open = ref(false);

const closeMenu = () => (open.value = false);

watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
</script>

<template>
  <header class="bg-red-500 py-4">
    <UContainer>
      <div
        class="bg-[var(--BaseBlack)] p-3 lg:py-3 lg:px-6 rounded-2xl flex items-center justify-between"
      >
        <a href="/" :title="t('shahin')">
          <img :src="logoFa" width="41" height="33" :alt="t('shahin')" />
        </a>

        <StructureMenuDesktop class="hidden min-lg:flex" />
        <div class="flex gap-2 items-center">
          <UButton
            class="rounded-xl font-semibold py-3 px-4 bg-[var(--Neutral03)] text-[var(--ui-text)]"
            >{{ t("startFree") }}
          </UButton>

          <UColorModeButton
            class="max-lg:hidden"
            :ui="{
              base: 'bg-[var(--Neutral03)] rounded-xl  cursor-pointer size-[48px] flex justify-center',
            }"
          />

          <UDrawer
            v-model:open="open"
            :ui="{ content: 'px-4  gap-6 rounded-2xl' }"
            :handle="false"
          >
            <UButton
              class="min-lg:hidden py-3 px-4 bg-[var(--Neutral03)] rounded-2xl text-[var(--ui-text)]"
              icon="i-ph-list"
            />
            <template #content>
              <div class="flex justify-between items-center pt-5">
                <BaseLogo />
                <UButton
                  variant="ghost"
                  color="secondary"
                  class="w-4 h-4 shrink-0 p-0 me-2"
                  @click="closeMenu()"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <rect width="16" height="16" fill="none" />
                    <line
                      x1="200"
                      y1="56"
                      x2="56"
                      y2="200"
                      :stroke="colorMode.value === 'dark' ? '#fff' : '#000'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="56"
                      y2="56"
                      :stroke="colorMode.value === 'dark' ? '#fff' : '#000'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    />
                  </svg>
                </UButton>
              </div>
              <StructureMenuMobile />
            </template>
          </UDrawer>
        </div>
      </div>
    </UContainer>
  </header>
</template>
