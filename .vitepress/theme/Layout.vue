<script setup>
import DefaultTheme from 'vitepress/theme'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'
const { Layout } = DefaultTheme

const {
  hasSidebar,
  isOpen,
  // open: openSidebar,
} = useSidebar()

function openSidebar() {
  const el = document.querySelector('div.VPLocalNav.has-sidebar.empty button');
  el.click();
}
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <button
        v-if="hasSidebar"
        class="menu"
        :aria-expanded="isOpen"
        aria-controls="VPSidebarNav"
        @click.prevent="openSidebar()"
      >
        <span class="vpi-align-left menu-icon"></span>
      </button>
    </template>
  </Layout>
</template>

<style scoped>
@media (min-width: 960px) {
  .menu {
    display: none !important;
  }
}

.menu {
  display: flex;
  padding-right: 12px;
  padding-bottom: 2px;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}

.menu:hover {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}
</style>
