<template>
  <div class="tabs">
    <ul class="tabs-menu center-v">
      <li
        class="tabs-item"
        @click="onClickTab(i)"
        :class="{ active : currentTab == i}"
        v-for="(tab, i) in tabs"
        :key="i"
      >
        <font-awesome :icon="['fa', tab.icon]" size="2x" class="tabs-icon" />
        <span class="tabs-title" v-if="currentTab == i" v-html="tab.title" />
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
  },
  methods: {
    onClickTab(i) {
      this.currentTab = i;
      if (i == 1 || i == 2) {
        this.$emit("transport", i);
      } else {
        this.$emit("transport", false);
      }
    }
  }
};
</script>

<style>
.tabs-menu {
  list-style: none;
  color: var(--color-light);
  max-width: 100%;
  overflow: hidden;
}
.tabs-item {
  cursor: pointer;
  border-bottom: 2px solid var(--color-light);
  padding: 0 var(--size-md);
  display: flex;
  align-items: center;
  height: 60px;
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
.tabs-title {
  margin-left: var(--size-md);
  font-size: 700;
  font-style: italic;
}
.tabs-content {
  margin-top: var(--size-lg);
  color: var(--color-light);
}

@media screen and (min-width: 990px) {
}
</style>
