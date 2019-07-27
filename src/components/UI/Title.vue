<template>
  <div class="title center">
    <div class="title-flower-wrapper">
      <span v-for="(flower, i) in flowers" :key="i" class="title-flower">
        <span class="title-flower-inner" :class="['size-' + flower.size, 'color-' + flower.color]"></span>
      </span>
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
      type: String,
      default: "3"
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
        size: Math.floor(Math.random() * Math.floor(6)),
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
.title-flower-wrapper {
  display: flex;
  width: 32px;
  height: 18px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.title-flower {
  height: 4px;
  width: 15px;
  display: flex;
  justify-content: flex-end;
}
.title-flower:nth-child(even) {
  justify-content: flex-start;
}
.title-flower-inner {
  border-radius: 6px;
  height: 100%;
  width: 100%;
}
.title-flower:nth-child(even) .size-0 {
  transform: scaleX(0.5);
  transform-origin: left;
}
.title-flower:nth-child(odd) .size-0 {
  transform: scaleX(0.5);
  transform-origin: right;
}
.title-flower:nth-child(even) .size-1 {
  animation: enlarge 10s linear infinite;
  transform-origin: left;
}
.title-flower:nth-child(odd) .size-1 {
  animation: enlarge 10s linear infinite;
  transform-origin: right;
}
.title-flower:nth-child(even) .size-2 {
  animation: enlarge 10s linear infinite alternate;
  transform-origin: left;
}
.title-flower:nth-child(odd) .size-2 {
  animation: enlarge 10s linear infinite alternate;
  transform-origin: right;
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

@keyframes enlarge {
  0% {
    transform: scaleX(1);
  }
  20% {
    transform: scaleX(1);
  }
  22% {
    transform: scaleX(0.5);
  }
  35% {
    transform: scaleX(0.5);
  }
  37% {
    transform: scaleX(0.75);
  }
  50% {
    transform: scaleX(0.75);
  }
  52% {
    transform: scaleX(0.25);
  }
  61% {
    transform: scaleX(0.25);
  }
  63% {
    transform: scaleX(1);
  }
  80% {
    transform: scaleX(1);
  }
  82% {
    transform: scaleX(0.75);
  }
  89% {
    transform: scaleX(0.75);
  }
  91% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
