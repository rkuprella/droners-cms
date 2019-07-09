<template>
  <nav class="sidebar">
    <div class="sidebar-wrapper center">
      <a href="#" class="sidebar-link">FAQ</a>
      <font-awesome :icon="['fa', 'circle']" style="font-size:0.25em; margin:0 var(--size-md)" />
      <a href="#" class="sidebar-link">Merch</a>
    </div>
  </nav>
</template>

<style>
.sidebar {
  display: none;
  position: fixed;
  left: var(--size-lg);
  top: 50%;
  transform: translateY(-50%);
}
.sidebar-wrapper {
  transform: rotate(-90deg) translate(-50%, 20px);
  transform-origin: left;
  height: 40px;
  color: var(--color-light);
}
.sidebar-link {
  color: var(--color-light);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2em;
}
.sidebar-link:hover,
.sidebar-link:focus {
  color: var(--color-blue);
}

@media screen and (min-width: 990px) {
  .sidebar {
    display: block;
  }
}
</style>
