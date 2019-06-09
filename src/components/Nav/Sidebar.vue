<template>
  <nav class="sidebar">
    <div class="sidebar-wrapper has-text-info is-size-5">
      <a href="#">FAQ</a>
      <font-awesome :icon="['fa', 'circle']" style="width:6px; margin:0 10px"/>
      <a href="#">Merch</a>
    </div>
  </nav>
</template>

<style>
.sidebar {
  position: fixed;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}
.sidebar-wrapper {
  transform: rotate(-90deg) translate(-50%, 16px);
  transform-origin: left;
}
</style>
