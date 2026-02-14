<script setup lang="ts">
const { itemsMainMenu } = useMainMenu();
const { locale } = useI18n();
</script>

<template>
  <UNavigationMenu
    orientation="vertical"
    :items="itemsMainMenu"
    color="primary"
    :ui="{
      root: `${locale === 'fa' ? '[direction:rtl]' : '[direction:ltr]'}`,
      list: `flex flex-col gap-4`,
      item: 'pb-4 border-b border-b-[var(--ContentNeutralLevel5)] last:border-b-0 ',
      linkTrailingIcon: 'size-4',
      childList: 'border-0 px-4 pt-4 m-0',
      childItem: 'pb-2 ',
      link: 'h-8',
    }"
    highlight
    highlight-color="primary"
  >
    <template #item="{ item, index }">
      <div
        v-if="index === 0 && item.isItem"
        class="flex justify-between w-full min-lg:hidden"
      >
        <!-- <span>{{ item.label }}</span> -->
        <UColorModeSwitch
          class="min-lg:hidden"
          color="neutral"
          :label="item.label"
          :ui="{
            root: 'flex justify-between w-full',
            container: 'order-2',
            wrapper: 'w-50 text-start m-0',
          }"
        />
      </div>

      <div
        v-if="index === 1 && item.isItem"
        class="flex justify-between w-full min-lg:hidden items-center"
      >
        <span>{{ item.label }}</span>

        <BaseLangSwitcher
          :variant="'soft'"
          :className="'rounded-md bg-[var(--ContentNeutralLevel5)] '"
          :iconColorClass="'text-[var(--ui-text)]'"
        />
      </div>
    </template>
  </UNavigationMenu>
</template>
