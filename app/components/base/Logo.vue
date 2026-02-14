<script setup lang="ts">
import logoFullFa from "@/assets/images/logo-full-fa.svg";
import logoFullFaDark from "@/assets/images/logo-full-fa-dark.svg";
import logoFullEnDark from "@/assets/images/full-logo-en-dark.svg";
import logoFullEn from "@/assets/images/full-logo-en.svg";

const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    isDark?: boolean;
  }>(),
  {
    width: "109",
    height: "24",
    isDark: false,
  },
);
const { t, locale } = useI18n();
const colorMode = useColorMode();

const logo = computed<string>(() => {
  if (locale.value === "fa") {
    return colorMode.value === "light" && !props.isDark
      ? logoFullFa
      : logoFullFaDark;
  } else {
    return colorMode.value === "dark"
      ? logoFullEn
      : !props.isDark
        ? logoFullEnDark
        : logoFullEn;
  }
});
</script>

<template>
  <a href="/" :title="t('shahin')">
    <img :src="logo" :alt="t('shahin')" :width="width" :height="height" />
  </a>
</template>
