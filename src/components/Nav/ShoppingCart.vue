<template>
  <div class="shopping-cart">
    <a href="#" class="snipcart-checkout center" title="Mein Warenkorb">
      <font-awesome :icon="['fa', 'shopping-cart']" size="lg" />
      <div class="snipcart-summary">
        <span class="snipcart-total-items"></span>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>


<style>
.shopping-cart {
  position: absolute;
  display: flex;
  right: var(--size-lg);
  top: 16px;
  z-index: 5;
  right: 20px;
  justify-content: center;
  align-items: center;
}
.snipcart-checkout {
  color: var(--color-bg);
  width: var(--size-xl);
  height: var(--size-xl);
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
}
.snipcart-checkout:active {
  background: var(--color-white-accent);
}
.snipcart-summary {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: var(--color-blue);
  border-radius: var(--size-md);
  padding: 1px 3px;
  color: #fff;
  font-size: 0.6em;
  font-weight: 700;
  min-width: 14px;
  text-align: center;
}

@media screen and (min-width: 990px) {
  .shopping-cart {
    position: fixed;
  }
}
</style>
