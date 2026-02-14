<script setup lang="ts">
import type { MenuItem } from "@/types/menu";

const props = defineProps<{
  items: MenuItem;
}>();

const emit = defineEmits<{
  (e: "active-change", id: string): void;
}>();

const hasBottomMenu = useBottomMenu();

const menuRef = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;

const lockActiveUntil = ref(0);
const currentActiveId = ref("");

const flatChildren = computed(() =>
  props.items.flatMap((group) => group.children ?? []),
);

const sectionIds = computed(() =>
  flatChildren.value
    .map((c) => (c.to || "").toString())
    .filter((to) => to.startsWith("#"))
    .map((to) => to.slice(1)),
);

function setActive(id: string, updateHash = true) {
  if (!id) return;

  if (Date.now() < lockActiveUntil.value) return;

  if (currentActiveId.value === id) return;
  currentActiveId.value = id;

  props.items.forEach((group) => {
    group.children?.forEach((child) => {
      child.active = child.to === `#${id}`;
    });
  });

  emit("active-change", id);

  if (updateHash) {
    const newHash = `#${id}`;
    if (location.hash !== newHash) history.replaceState(null, "", newHash);
  }
}

function scrollActiveIntoView() {
  nextTick(() => {
    if (!menuRef.value) return;

    const activeEl = menuRef.value.querySelector(
      ".is-active",
    ) as HTMLElement | null;

    activeEl?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  });
}

watch(() => props.items, scrollActiveIntoView, { deep: true });

// function onMenuClick(to?: string) {
//   if (!to?.startsWith("#")) return;

//   lockActiveUntil.value = Date.now() + 600;

//   const id = to.slice(1);

//   currentActiveId.value = "";
//   setActive(id, true);
// }

onMounted(() => {
  hasBottomMenu.value = true;
  observer = new IntersectionObserver(
    (entries) => {
      const inView = entries.filter((e) => e.isIntersecting);
      if (!inView.length) return;

      const best = inView
        .map((e) => {
          const el = e.target as HTMLElement;
          return { id: el.id, top: el.getBoundingClientRect().top };
        })
        .sort((a, b) => Math.abs(a.top) - Math.abs(b.top))[0];

      if (best?.id) {
        setActive(best.id, false);
      }
    },
    {
      threshold: [0.2, 0.4, 0.6],

      rootMargin: "-20% 0px -60% 0px",
    },
  );

  sectionIds.value.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer?.observe(el);
  });

  const hashId = location.hash?.replace("#", "");
  if (hashId) {
    lockActiveUntil.value = 0;
    currentActiveId.value = "";
    setActive(hashId, false);
  } else {
    const first = flatChildren.value.find((c) => c.to?.startsWith("#"));
    if (first?.to) {
      lockActiveUntil.value = 0;
      currentActiveId.value = "";
      setActive(first.to.slice(1), false);
    }
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
  hasBottomMenu.value = false;
});
</script>

<template>
  <div
    ref="menuRef"
    class="fix-menu shadow-box z-1 p-4 fixed bottom-0 left-1 right-1 overflow-x-auto lg:right-0 lg:sticky lg:right-0 lg:left-0 lg:top-0 lg:overflow-x-visible bg-[var(--ui-bg)] lg:rounded-2xl lg:py-6 lg:px-4"
  >
    <ul
      class="inline-flex min-w-max gap-4 lg:flex lg:flex-col lg:sticky lg:right-0 lg:right-4 lg:top-4"
    >
      <li
        v-for="(group, index) in items"
        :key="group.header"
        class="inline-flex items-center gap-3 lg:flex lg:flex-col lg:items-start"
      >
        <span
          class="whitespace-nowrap text-[var(--ContentNeutralLevel7)] flex gap-2 items-center"
        >
          <Icon :name="group.icon ?? ''" size="16" />

          <span class="text-sm">
            {{ group.header }}
          </span>
        </span>

        <div class="inline-flex gap-4 lg:flex lg:flex-col lg:w-full">
          <a
            v-for="child in group.children"
            :key="child.to"
            :href="child.to"
            class="px-3 py-2 whitespace-nowrap text-sm max-lg:bg-[var(--Neutral02)] rounded-lg"
            :class="{ 'is-active': child.active }"
          >
            {{ child.label }}
          </a>
        </div>
        <USeparator
          orientation="horizontal"
          size="xs"
          :class="[
            'my-4 max-lg:hidden',
            index === items.length - 1 && 'hidden',
          ]"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.is-active {
  background-color: var(--SurfaceBrandLevel2) !important;
  color: var(--ContentBrandLevel1);
}

.shadow-box {
  box-shadow: 0px 0px 16px 0px var(--BoxShadow);
}
</style>
