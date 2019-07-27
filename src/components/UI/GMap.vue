<template>
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
  props: {
    transport: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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
                color: "#fff1d8"
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
            featureType: "transit.station",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "on"
              },
              {
                hue: "#65e6b4"
              },
              {
                gamma: "0.70"
              },
              {
                saturation: "-20"
              },
              {
                lightness: "10"
              },
              {
                weight: "1"
              }
            ]
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#fff1d8"
              },
              { visibility: "on" }
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
  },
  computed: {
    zoom() {
      if (this.transport == 1) {
        return 16;
      } else if (this.transport == 2) {
        return 12;
      } else {
        return 10;
      }
    },
    center() {
      if (this.transport == 1) {
        return { lat: 51.538593, lng: 7.674163 };
      } else if (this.transport == 2) {
        return { lat: 51.531029, lng: 7.652769 };
      } else {
        return { lat: 51.537718, lng: 7.673155 };
      }
    }
  }
};
</script>

<style>
.gmap {
  width: 100%;
  height: 240px;
  border: 2px solid var(--color-green);
}

@media screen and (min-width: 990px) {
  .gmap {
    height: 280px;
  }
}
</style>
