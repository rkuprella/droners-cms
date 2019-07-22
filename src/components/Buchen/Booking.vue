<template>
  <div class="booking">
    <div class="container"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.booking {
  padding: 160px 0 calc(var(--size-gap) / 2);
}

@media screen and (min-width: 990px) {
  .booking {
    padding: 180px 0 var(--size-gap);
  }
}
</style>
