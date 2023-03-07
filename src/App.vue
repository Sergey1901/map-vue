<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import { accessToken, mapLayers } from './data';

export default {
  name: 'App',
  mounted() {
    mapboxgl.accessToken = accessToken;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [37.6173, 55.7558],
      zoom: 10,
      projection: 'naturalEarth' // starting projection
    });

    map.on('load', () => {
      mapLayers.forEach(layer => {
        map.addLayer(layer);
      });

    });
    new mapboxgl.Marker()
        .setLngLat([37.409462, 55.831903])
        .addTo(map);

  }
}
</script>

<style>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>