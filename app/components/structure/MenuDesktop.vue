<script setup lang="ts">
const { itemsMainMenu } = useMainMenu();
const { locale } = useI18n();
</script>

<template>
  <UNavigationMenu
    orientation="horizontal"
    :items="itemsMainMenu"
    color="primary"
    :ui="{
      root: `${locale === 'fa' ? '[direction:rtl]' : '[direction:ltr]'}`,
      list: 'gap-4',
      item: ' min-lg:first:hidden min-lg:border-b-0 ',
      linkTrailingIcon: 'size-4',
      childList: 'flex flex-col gap-3',
      viewport: 'w-[250px]',
      linkLabel: 'hover:text-primary transition-colors duration-200',
      childLinkLabel: 'transition-colors duration-200 hover:text-primary',
    }"
    variant="link"
  >
  </UNavigationMenu>
</template>
