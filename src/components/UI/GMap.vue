<template>
  <!-- <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.6586039467647!2d7.67097588693503!3d51.5378212796401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b913477951f1df%3A0xc3ff63a165ba23c5!2sHochstra%C3%9Fe+10%2C+59425+Unna!5e0!3m2!1sen!2sde!4v1563170944292!5m2!1sen!2sde"
      frameborder="0"
      class="gmap"
      allowfullscreen
  ></iframe>-->
  <GmapMap :center="center" :zoom="zoom" :options="options" map-type-id="roadmap" class="gmap">
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      :icon="{ url: require('../../assets/img/gmap-marker.png')}"
    />
  </GmapMap>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 51.537718, lng: 7.673155 },
      zoom: 14,
      markers: [
        {
          position: { lat: 51.537718, lng: 7.673155 }
        }
      ],
      options: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#6c656c"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on"
              },
              {
                color: "#fff1d8"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#f0dab3"
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#f0dab3"
              },
              {
                weight: 1.2
              }
            ]
          },
          {
            featureType: "administrative.neighborhood",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "simplified"
              },
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#fff1d8"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#f0dab3"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#f0dab3"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#f0dab3"
              },
              {
                weight: 0.2
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#f0dab3"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#f0dab3"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#65e6b4"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#42b6ea"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style>
.gmap {
  width: 100%;
  height: 180px;
  border: 2px solid var(--color-green);
}

@media screen and (min-width: 990px) {
  .gmap {
    height: 260px;
  }
}
</style>
