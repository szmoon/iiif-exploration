<template>
  <div id="map"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import 'leaflet';
import 'leaflet-iiif';
import $ from 'jquery';
const L = window.L;

export default {
  name: 'LeafletIiifViewer',
  props: {
    manifestUrl: {
      type: String
    },
    infoJson: {
      type: String
    }
  },
  mounted() {
    this.initViewer();
  },
  methods: {
    initViewer() {
      const map = L.map('map', {
        center: [0, 0],
        crs: L.CRS.Simple,
        zoom: 0
      });

      if (this.infoJson) {
        L.tileLayer.iiif(this.infoJson).addTo(map);
      }

      if (this.manifestUrl) {
        const iiifLayers = {};

        // Grab a IIIF manifest
        $.getJSON(this.manifestUrl, function (data) {
          // For each image create a L.TileLayer.Iiif object and add that to an object literal for the layer control
          $.each(data.sequences[0].canvases, function (_, val) {
            iiifLayers[val.label] = L.tileLayer.iiif(
              val.images[0].resource.service['@id'] + '/info.json'
            );
          });

          // Add layers control to the map
          L.control.layers(iiifLayers).addTo(map);

          // Access the first iiif object and add it to the map
          iiifLayers[Object.keys(iiifLayers)[0]].addTo(map);
        });
      }
    }
  }
};
</script>

<style scoped>
#map {
  height: 500px;
}
</style>
