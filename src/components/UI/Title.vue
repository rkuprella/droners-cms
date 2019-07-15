<template>
  <div class="title center">
    <div class="title-flower">
      <span
        v-for="flower in flowers"
        :key="flower"
        :class="['size-' + flower.size, 'color-' + flower.color]"
      ></span>
    </div>
    <h1 class="title-headline" v-if="level == 1" v-html="headline" />
    <h2 class="title-headline" v-if="level == 2" v-html="headline" />
    <h3 class="title-headline" v-if="level == 3" v-html="headline" />
    <h4 class="title-headline" v-if="level == 4" v-html="headline" />
    <h5 class="title-headline" v-if="level == 5" v-html="headline" />
    <h6 class="title-headline" v-if="level == 6" v-html="headline" />
  </div>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      flowers: []
    };
  },
  mounted() {
    for (let i = 0; i < 6; i++) {
      this.flowers.push({
        size: Math.floor(Math.random() * Math.floor(3)),
        color: Math.floor(Math.random() * Math.floor(8))
      });
    }
  }
};
</script>


<style>
.title {
  flex-direction: row;
  margin-bottom: var(--size-xl);
}
.title-flower {
  display: flex;
  width: var(--size-lg);
  height: var(--size-md);
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.title-flower span {
  grid-template: "span";
  height: 20%;
  border-radius: 6px;
}
.size-0 {
  width: 35%;
}
.size-1,
.size-2 {
  width: 45%;
}
.color-0,
.color-2 {
  background: var(--color-blue);
}
.color-1,
.color-3,
.color-4,
.color-5,
.color-6,
.color-7 {
  background: var(--color-light);
}
.title-headline {
  color: var(--color-light);
  margin-left: var(--size-md);
  font-weight: 300;
}
</style>
