<template>
  <div class="header hero">
    <div class="container center">
      <div
        class="slider center"
        v-for="(slide, i) in slider"
        :key="i"
        :class="{active : activeSlide(i)}"
      >
        <div class="slider-intro" v-if="activeSlide(0) && i == 0">
          <video class="svg-text-video" autoplay playsinline muted loop preload>
            <source src="../../assets/video/Racing.mp4" />
          </video>
          <svg class="svg-text">
            <defs>
              <mask id="mask" x="0" y="0" height="100%" width="100%">
                <rect x="0" y="0" height="100%" width="100%" />
                <text
                  class="svg-text-top"
                  x="50%"
                  y="30%"
                  fill="red"
                  text-anchor="middle"
                >Challenge your</text>
                <text
                  class="svg-text-bottom"
                  x="50%"
                  y="88%"
                  fill="red"
                  text-anchor="middle"
                >Reality</text>
              </mask>
            </defs>
            <rect x="0" y="0" height="100%" width="100%" />
          </svg>
        </div>
        <div class="slider-basic" v-else>
          <g-image class="slider-image" :src="'/assets/static/src/assets/' + slide.image" />
        </div>
      </div>

      <ul class="menu-wrapper">
        <li>
          <button
            class="menu-arrow"
            :class="{active : !activeSlide(0)}"
            @click="setSlide(currentSlide - 1)"
            :disabled="activeSlide(0)"
          ></button>
        </li>
        <li class="menu-item" v-for="(item, i) in slider" :key="i">
          <button class="menu-link" @click="setSlide(i)" :class="{ active : item.active }"></button>
        </li>
        <li>
          <button
            class="menu-arrow arrow-forward"
            :class="{active : !activeSlide(slider.length - 1)}"
            @click="setSlide(currentSlide + 1)"
            :disabled="activeSlide(slider.length - 1)"
          ></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderTimer: null,
      currentSlide: 0,
      slider: [
        { title: "One", image: "img/copter.png", active: true },
        {
          title: "Two whats up yo",
          image: "img/imagination-1.jpg",
          content: "Was geht ab",
          active: false
        },
        {
          title: "Three",
          image: "img/imagination-2.jpg",
          content: "Was geht ab",
          active: false
        }
      ]
    };
  },
  methods: {
    setSlide(i) {
      for (let j = 0; j < this.slider.length; j++) {
        this.slider[j].active = false;
      }
      this.slider[i].active = true;
      this.currentSlide = i;
    },
    activeSlide(i) {
      return this.slider[i].active;
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Titillium+Web:900");

.header {
  padding: 150px 0;
}

/* slider */
.slider {
  width: 100%;
  height: 30vw;
  display: none;
}
.slider.active {
  display: block;
}
.slider-basic {
  height: 100%;
  width: 100%;
}
.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* svg-text */
.slider-intro {
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.svg-text-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.svg-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vw;
  font-weight: 900;
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
}
.svg-text-top {
  font-size: 10.5vw;
}
.svg-text-bottom {
  font-size: 22.5vw;
}
.svg-text mask rect {
  fill: white;
}
.svg-text > rect {
  fill: var(--color-bg);
  mask: url(#mask);
}

/* menu */
.menu-wrapper {
  position: absolute;
  bottom: -110px;
  left: 5%;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}
.menu-arrow {
  background: url("../../assets/img/chevron-left.png") 50% 50% no-repeat;
  width: 44px;
  height: 80px;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.1;
  transition: opacity 0.3s ease-out;
}
.menu-arrow.active {
  opacity: 1;
}
.arrow-forward {
  background: url("../../assets/img/chevron-right.png") 50% 50% no-repeat;
  margin-right: 0;
}
.menu-item {
  width: var(--size-xl);
  height: var(--size-xl);
}
.menu-link {
  border: none;
  outline: none;
  background: var(--color-bg-dark);
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid transparent;
}
.menu-link.active {
  border: 2px solid var(--color-light);
}

@media screen and (min-width: 990px) {
  .header {
    padding: 0;
    height: 90vh;
    min-height: 760px;
  }
  .menu-wrapper {
    bottom: 8%;
    left: 0;
    width: 100%;
  }
  .svg-text-top {
    font-size: 9.9vw;
  }
  .svg-text-bottom {
    font-size: 21.3vw;
  }
}

@media screen and (min-width: 1400px) {
  .slider,
  .svg-text {
    height: 450px;
  }
  .slider-basic {
    margin-top: 25px;
    height: 80%;
  }
  .svg-text-top {
    font-size: 149px;
  }
  .svg-text-bottom {
    font-size: 320px;
  }
}
</style>
