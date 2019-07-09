<template>
  <div class="header hero">
    <div class="container center">
      <div class="svg-text-wrapper center">
        <video class="svg-text-video" autoplay playsinline muted loop preload>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
          />
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
              <text class="svg-text-bottom" x="50%" y="85%" fill="red" text-anchor="middle">Reality</text>
            </mask>
          </defs>
          <rect x="0" y="0" height="100%" width="100%" />
        </svg>
      </div>

      <ul class="menu-wrapper">
        <li>
          <button class="menu-arrow"></button>
        </li>
        <li class="menu-item" v-for="item in slider" :key="item.name">
          <button class="menu-link">
            <g-image
              class="menu-img"
              :class="{ active : item.active }"
              :src="'/assets/static/src/assets/' + item.image"
            />
            <!-- <div class="menu-title">{{ item.name }}</div> -->
          </button>
        </li>
        <li>
          <button class="menu-arrow arrow-forward"></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: [
        { name: "One", image: "img/copter.png", active: true },
        { name: "Two whats up yo", image: "img/copter.png", active: false },
        { name: "Three", image: "img/copter.png", active: false }
      ]
    };
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Titillium+Web:900");

.header {
  padding: 150px 0;
}

/* svg-text */
.svg-text-wrapper {
  flex-direction: column;
  width: 100%;
  height: 30vw;
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
  font-size: 9.9vw;
}
.svg-text-bottom {
  font-size: 21.3vw;
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
  bottom: -100px;
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
}
.arrow-forward {
  background: url("../../assets/img/chevron-right.png") 50% 50% no-repeat;
  margin-right: 0;
}
.menu-item {
  width: 20%;
  max-width: 140px;
}
.menu-link {
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.menu-img {
  width: 100%;
  height: 32px;
  object-fit: cover;
}
.menu-img.active {
  border: 2px solid var(--color-red);
}
.menu-title {
  width: 100%;
  height: 32px;
  color: var(--color-light);
  text-align: center;
  margin-top: var(--size-sm);
}
.menu-item:hover .menu-title {
  color: var(--color-red);
}

@media screen and (min-width: 990px) {
  .header {
    padding: 0;
    height: 90vh;
    min-height: 660px;
  }
  .menu-wrapper {
    bottom: 10%;
    left: 0;
    width: 100%;
  }
}

@media screen and (min-width: 1500px) {
  .svg-text-wrapper,
  .svg-text {
    height: 450px;
  }
  .svg-text-top {
    font-size: 149px;
  }
  .svg-text-bottom {
    font-size: 320px;
  }
}
</style>
