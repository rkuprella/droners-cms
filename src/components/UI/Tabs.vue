<template>
  <div class="tabs">
    <ul class="tabs-menu center-v">
      <li
        class="tabs-item"
        @click="currentTab = i"
        :class="{ active : currentTab == i}"
        v-for="(tab, i) in tabs"
        :key="i"
      >
        <font-awesome :icon="['fa', tab.icon]" size="2x" class="tabs-icon" />
        <span class="tabs-text" v-if="currentTab == i" v-html="tab.title" />
      </li>
    </ul>
    <div class="tabs-content">
      <p v-html="tabs[currentTab].content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentTab: 0
    };
  }
};
</script>

<style>
.tabs-menu {
  list-style: none;
  color: var(--color-light);
}
.tabs-item {
  cursor: pointer;
  border-bottom: 2px solid var(--color-light);
  padding: var(--size-md) var(--size-md) 0;
  display: flex;
  align-items: center;
}
.tabs-item.active {
  border: 2px solid var(--color-light);
  border-bottom: none;
}
.tabs-icon {
  opacity: 0.25;
}
.tabs-item.active .tabs-icon {
  opacity: 1;
  transform: translate(-2px, -2px);
}
.tabs-text {
  margin-left: var(--size-md);
  font-size: 700;
  font-style: italic;
}
.tabs-content {
  margin-top: var(--size-lg);
  color: var(--color-light);
}
</style>
