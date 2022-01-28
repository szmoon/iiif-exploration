<template>
  <div>
    <div class="container has-text-left mb-5">
      <h1 class="title is-3">Viewer using Level 0 Image API</h1>
      <p class="subtitle is-5">
        Uses pre-generated tiles and static web hosting
      </p>
    </div>
    <!-- image viewer -->
    <LeafletIiifViewer
      manifestUrl="https://szmoon.github.io/iiif-exploration/static-tiles/B01-manifest.json"
    />
    <!-- demo info -->
    <div class="container has-text-left mt-5">
      <h2 class="title is-5">About</h2>
      <p>
        Also called a Level 0 implementation of the IIIF Image API, this example
        uses
        <a
          href="https://github.com/szmoon/iiif-exploration/tree/main/static-tiles/B01-N01"
          >pre-generated image tiles</a
        >, organized in a folder structure that mimics the url structure of an
        actual IIIF Image API. "Level 0" refers to the
        <a
          href="https://iiif.io/api/image/3.0/#6-compliance-level-and-profile-document"
          >level</a
        >
        of compliance the json has with the IIIF Image API (minimum required).
      </p>
      <h2 class="title is-5">Pros</h2>
      <p>
        No image server required (only file storage), so it's cheaper to host
        images this way. Cons: doesn't support custom sizes and cropping.
      </p>
      <h2 class="title is-5">Cons</h2>
      <p>
        Doesn't support custom sizes, regions and cropping, which means that
        images won't perform well in many popular viewers (thumbnails won't
        populate). Annotations also won't compatible because of this.
      </p>
      <h2 class="title is-5">Tech Details</h2>
      <p>
        The images in this example were created using the
        <a href="https://github.com/glenrobson/iiif-tiler"
          >iiif-tiler by Glen Robson</a
        >. There's also a new
        <a
          href="https://training.iiif.io/iiif-online-workshop/day-two/image-servers/level0-workbench.html"
          >Github Workbench</a
        >
        to lead you through the process of creating a Level 0 implementation.
      </p>
      <p>
        The viewer on this page is powered by
        <a href="https://leafletjs.com/">leaflet</a> and
        <a href="https://github.com/mejackreed/Leaflet-IIIF">leaflet-iiif</a>,
        wrapped in a custom Vue component.
        <!-- It's displaying the images via the
        <a
          href="https://szmoon.github.io/iiif-exploration/static-tiles/B01-manifest.json"
          >manifest</a
        >
        (rather than the info.json files directly). -->
      </p>
      <!-- <p>
        <b>Manifest: </b>
        <a
          href="https://szmoon.github.io/iiif-exploration/static-tiles/B01-manifest.json"
          >https://szmoon.github.io/iiif-exploration/static-tiles/B01-manifest.json</a
        >
      </p> -->
      <p>
        <b>Generated tile files: </b>
        <a
          href="https://github.com/szmoon/iiif-exploration/tree/main/static-tiles/B01-N01"
          >https://github.com/szmoon/iiif-exploration/tree/main/static-tiles/B01-N01</a
        >
      </p>
      <p>
        <b>info.json: </b>
        <a
          href="https://szmoon.github.io/iiif-exploration/static-tiles/B01-N01/info.json"
          >https://szmoon.github.io/iiif-exploration/static-tiles/B01-N01/info.json</a
        >
      </p>
      <p>
        <b>full-size jpg: </b>
        <a
          href="https://szmoon.github.io/iiif-exploration/static-tiles/B01-N01/full/full/0/default.jpg"
          >https://szmoon.github.io/iiif-exploration/static-tiles/B01-N01/full/full/0/default.jpg</a
        >
      </p>
      <!-- <p>
        <b>info.json for 2nd image: </b>
        <a
          href="https://szmoon.github.io/iiif-exploration/static-tiles/B01-N02/info.json"
          >https://szmoon.github.io/iiif-exploration/static-tiles/B01-N02/info.json</a
        >
      </p>
      <p>
        <b>full-size jpg for 2nd image: </b>
        <a
          href="https://szmoon.github.io/iiif-exploration/static-tiles/B01-N02/full/full/0/default.jpg"
          >https://szmoon.github.io/iiif-exploration/static-tiles/B01-N02/full/full/0/default.jpg</a
        >
      </p> -->
    </div>
  </div>
</template>

<script>
import LeafletIiifViewer from '../components/LeafletIiifViewer';
export default {
  name: 'Home',
  components: {
    LeafletIiifViewer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
</style>
