<template>
  <div class="image-tabs">
    <section class="hero-section hero-imagination">
      <div class="hero-content center-v">
        <div class="hero-wrapper center it-img-wrapper">
          <g-image class="image-tabs-image" :src="tabs[currentTab].image" />
        </div>
        <div class="hero-wrapper center it-content-wrapper">
          <div class="image-tabs-wrapper">
            <ul class="image-tabs-menu">
              <li
                class="image-tabs-item"
                @click="currentTab = i"
                :class="[{ active : currentTab == i}, 'color-' + tab.color]"
                v-for="(tab, i) in tabs"
                :key="i"
              >
                <font-awesome :icon="['fa', tab.icon]" size="2x" class="image-tabs-icon" />
                <span class="image-tabs-title" v-html="tab.title" />
              </li>
            </ul>
            <div class="image-tabs-content">
              <p v-html="tabs[currentTab].content" />
              <div class="image-tabs-btn-wrapper">
                <Btn
                  title="Mehr erfahren"
                  :color="tabs[currentTab].color"
                  inverted
                  :to="tabs[currentTab].to"
                  v-if="tabs[currentTab].to"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          title: "Events",
          content:
            "Lorem ipsum dolor sit amet, colectequer elidit est. Lorem ipsum dolor sit amet, colectequer elidit est.",
          icon: "flag-checkered",
          to: "/",
          image: "/uploads/slider-one.jpg",
          color: "red"
        },
        {
          title: "Workshops",
          content:
            "Ipsum dolor sit amet. Lorem ipsum dolor sit amet, colectequer elidit est.",
          icon: "wrench",
          to: "/",
          image: "/uploads//slider-two.jpg",
          color: "blue"
        },
        {
          title: "Shop",
          content:
            "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, colectequer elidit est.",
          icon: "shopping-cart",
          to: "/",
          image: "/uploads/slider-four.jpg",
          color: "green"
        }
      ]
    };
  }
};
</script>

<style>
.image-tabs-wrapper {
  margin-top: var(--size-xl);
  width: 100%;
  padding: 0 var(--size-lg);
}
.image-tabs-menu {
  list-style: none;
  color: var(--color-light);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;
}
.image-tabs-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.image-tabs-item:nth-child(2) {
  margin: 0 var(--size-md);
}
.image-tabs-icon {
  color: var(--color-light);
  margin-bottom: var(--size-md);
  transition: transform 0.15s ease-in-out;
}
.image-tabs-item.active .image-tabs-icon {
  transform: translateY(-3px);
}
.image-tabs-title {
  font-size: 700;
  color: var(--color-light);
  padding: var(--size-md) var(--size-md);
}
.image-tabs-item.color-red.active .image-tabs-title {
  color: var(--color-bg);
  background: var(--color-red);
}
.image-tabs-item.color-blue.active .image-tabs-title {
  color: var(--color-bg);
  background: var(--color-blue);
}
.image-tabs-item.color-green.active .image-tabs-title {
  color: var(--color-bg);
  background: var(--color-green);
}
.image-tabs-content {
  margin-top: var(--size-lg);
  color: var(--color-light);
}
.image-tabs-btn-wrapper {
  margin-top: var(--size-lg);
  display: inline-block;
}
.image-tabs-image {
  width: 100%;
  height: 100%;
  max-height: 40vw;
  object-fit: cover;
  vertical-align: middle;
}

@media screen and (min-width: 990px) {
  .it-img-wrapper {
    width: 75%;
  }
  .it-content-wrapper {
    width: 25%;
  }
  .image-tabs-wrapper {
    position: absolute;
    margin: 0;
    min-height: 280px;
    left: -100%;
    padding: var(--size-md);
    width: calc(50vw - 50%);
    max-width: 600px;
  }
  .image-tabs-btn-wrapper {
    margin-top: var(--size-lg);
  }
  .image-tabs-image {
    width: 100%;
    min-height: 400px;
    max-height: 60vh;
    object-fit: cover;
    vertical-align: middle;
  }
  .image-tabs-title {
    padding: var(--size-md) var(--size-lg);
  }
  .image-tabs-item:not(.active):hover .image-tabs-icon {
    transform: translateY(-3px);
  }
}
</style>
