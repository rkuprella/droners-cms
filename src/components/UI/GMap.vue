<template>
  <!-- <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.6586039467647!2d7.67097588693503!3d51.5378212796401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b913477951f1df%3A0xc3ff63a165ba23c5!2sHochstra%C3%9Fe+10%2C+59425+Unna!5e0!3m2!1sen!2sde!4v1563170944292!5m2!1sen!2sde"
      frameborder="0"
      class="gmap"
      allowfullscreen
  ></iframe>-->
  <GmapMap :center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain" class="gmap">
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
export default {};
</script>

<style>
.gmap {
  width: 100%;
  height: 180px;
  border: 2px solid var(--color-blue);
}

@media screen and (min-width: 990px) {
  .gmap {
    height: 260px;
  }
}
</style>
