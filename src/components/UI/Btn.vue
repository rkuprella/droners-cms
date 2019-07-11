<template>
  <g-link
    class="btn"
    :class="[{inverted : inverted, dark: dark}, 'color-' + color]"
    :to="to"
  >{{ title }}</g-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    inverted: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "light"
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.btn {
  padding: var(--size-md) var(--size-lg);
  text-decoration: none;
  border-radius: 30px;
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background: var(--color-light);
  color: var(--color-bg);
  white-space: nowrap;
  margin: var(--size-sm) 0;
}
.btn:not(:last-of-type) {
  margin-right: var(--size-md);
}
.btn.inverted {
  background: transparent;
  color: var(--color-light);
  border: 2px solid var(--color-light);
}
.btn.inverted:hover,
.btn.inverted:focus,
.btn.inverted:active {
  background: var(--color-light);
  color: var(--color-bg);
}
.btn.color-red {
  background: var(--color-red);
}
.btn.color-red.inverted {
  background: transparent;
  color: var(--color-red);
  border: 2px solid var(--color-red);
}
.btn.color-red.inverted:hover,
.btn.color-red.inverted:focus,
.btn.color-red.inverted:active {
  background: var(--color-red);
  color: var(--color-bg);
}

.btn.color-blue {
  background: var(--color-blue);
}
.btn.color-blue.inverted {
  background: transparent;
  color: var(--color-blue);
  border: 2px solid var(--color-blue);
}
.btn.color-blue.inverted:hover,
.btn.color-blue.inverted:focus,
.btn.color-blue.inverted:active {
  background: var(--color-blue);
  color: var(--color-bg);
}

.btn.color-green {
  background: var(--color-green);
}
.btn.color-green.inverted {
  background: transparent;
  color: var(--color-green);
  border: 2px solid var(--color-green);
}
.btn.color-green.inverted:hover,
.btn.color-green.inverted:focus,
.btn.color-green.inverted:active {
  background: var(--color-green);
  color: var(--color-bg);
}

.btn.color-yellow {
  background: var(--color-yellow);
}
.btn.color-yellow.inverted {
  background: transparent;
  color: var(--color-yellow);
  border: 2px solid var(--color-yellow);
}
.btn.color-yellow.inverted:hover,
.btn.color-yellow.inverted:focus,
.btn.color-yellow.inverted:active {
  background: var(--color-yellow);
  color: var(--color-bg);
}

.btn.dark {
  background: var(--color-bg);
  color: var(--color-light);
}
.btn.dark.inverted {
  background: transparent;
  color: var(--color-bg);
  border: 2px solid var(--color-bg);
}
.btn.dark.inverted:hover,
.btn.dark.inverted:focus,
.btn.dark.inverted:active {
  background: var(--color-bg);
  color: var(--color-light);
}
</style>
