<template>
  <div class="faq">
    <div class="container">
      <Title headline="FAQ" level="3" />
      <ul>
        <li
          v-for="(item, i) in list"
          :key="i"
          class="faq-item"
          @click="onClickItem(i)"
          :class="{active:currentItem == i}"
        >
          <div class="faq-question">
            <h4 v-html="item.question" />
            <font-awesome
              :icon="['fa', 'chevron-up']"
              size="md"
              class="openings-chevron"
              :class="{active : currentItem == i}"
            />
          </div>
          <div class="faq-answer" v-show="currentItem == i">
            <p v-html="item.answer" />
            <div class="faq-outro">
              <span class="faq-o">Noch Fragen?</span>

              <Btn icon="phone" type="tel" dark to="02018398293" inverted />

              <span class="faq-o">oder</span>
              <Btn icon="envelope" type="email" dark to="/" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from "~/components/UI/Title";
import Btn from "~/components/UI/Btn";

export default {
  components: {
    Title,
    Btn
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentItem: null
    };
  },
  methods: {
    onClickItem(i) {
      if (this.currentItem == i) {
        this.currentItem = -1;
      } else {
        this.currentItem = i;
      }
    }
  }
};
</script>

<style>
.faq {
  padding: calc(var(--size-gap) / 2) 0;
  position: relative;
  z-index: 3;
}
.faq-item {
  list-style: none;
  cursor: pointer;
  width: 100%;
  border: 2px solid var(--color-light);
  padding: var(--size-sm) var(--size-md);
  color: var(--color-light);
  transition: all 0.15s ease-out;
}
.faq-item:not(:last-of-type) {
  margin-bottom: var(--size-md);
}
.faq-item.active {
  border: 2px solid var(--color-green);
  background: var(--color-green);
  color: var(--color-bg);
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.faq-item.active .faq-question {
  font-weight: 700;
}
.faq-answer {
  margin-top: var(--size-md);
}
.faq-item.active .faq-answer p {
  color: var(--color-bg);
}
.faq-outro {
  display: flex;
  margin-top: var(--size-md);
  align-items: center;
  justify-content: flex-end;
}
.faq-o {
  margin: 0 var(--size-sm);
  font-size: 0.85em;
}

@media screen and (min-width: 990px) {
  .faq {
    padding: var(--size-gap) 0;
  }
  .faq-item {
    font-size: 1.25em;
  }
}
</style>
