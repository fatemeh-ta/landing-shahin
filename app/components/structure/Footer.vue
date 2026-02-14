<script lang="ts" setup>
const { t } = useI18n();
const { itemsFooterMenu } = useMainMenu();

const hasBottomMenu = useBottomMenu();
</script>

<template>
  <footer class="bg-[var(--SurfaceNeutralLevel1)]">
    <UContainer>
      <div class="pt-6 md:pt-[80px]">
        <div
          class="flex flex-col gap-2 justify-center items-center rounded-3xl px-4 py-6 md:py-12 bg-[url('/images/pattern.svg')] bg-[var(--SurfaceNeutralLevel5)]"
        >
          <span
            class="text-[var(--ContentNeutralLevel3)] text-[27px] font-semiBold text-center"
          >
            {{ t("ensureTransparencyData") }}
          </span>

          <span class="text-[var(--ContentNeutralLevel3)] text-sm text-center">
            {{
              t(
                "joinLeadersSimplifiedDecisionMakingStartRelyingClarityAnalysis",
              )
            }}
          </span>

          <BaseButton
            :label="'shahinDashboard'"
            class="mt-4"
            :className="'bg-[var(--SurfaceNeutralLevel10)] text-[var(--ContentNeutralLevel8)] rounded-2xl text-xs px-6 py-3'"
          />
        </div>
      </div>

      <div class="mt-6 md:mt-[64px] lg:flex lg:gap-8">
        <div class="flex flex-col gap-4 items-start">
          <BaseLogo :width="'156'" :height="'32'" :isDark="true" />
          <span class="text-[#F5F5F5] text-sm">{{
            t("shahinVisibilityAnalyticsPlatformByDigitalManagers")
          }}</span>
          <BaseSocialMedia class="pt-2 lg:hidden" />
        </div>
        <UFooterColumns
          :columns="itemsFooterMenu"
          :ui="{
            label: 'font-bold text-[#F5F5F5] ',
            link: 'text-[#F5F5F5] hover:text-primary',
            center: 'lg:grid lg:grid-cols-[1fr_1fr_1fr] gap-8 xl:col-span-3',
            root: `mt-6 lg:mt-0 ${hasBottomMenu && 'pb-8'} lg:pb-0`,
            linkLabel: 'whitespace-pre-wrap lg:whitespace-nowrap text-start',
          }"
        />
      </div>
    </UContainer>

    <div class="bg-[var(--SurfaceNeutralLevel12)] p-2 lg:p-1 mt-6 lg:mt-[64px]">
      <UContainer>
        <div
          class="flex flex-col gap-2 items-center lg:flex-row lg:justify-between"
        >
          <div class="flex items-center hidden lg:flex">
            <BaseLangSwitcher />
            <div class="w-6 h-4 border-e-2 border-e-[#4D4D4D]"></div>
            <BaseSocialMedia class="ps-6" />
          </div>
          <span class="text-[#9A9A9A] text-sm">{{ t("copyRight") }}</span>
        </div>
      </UContainer>
    </div>
  </footer>
</template>
