<template>
  <div>
    <div class="container has-text-left mb-5">
      <p class="title is-3">Viewer using Presentation API & Level 2 Image API</p>
      <p class="subtitle is-5">Uses a hosted IIIF Image Server</p>
    </div>
    <!-- image viewer -->
    <MiradorViewer
      manifestUrl="https://szmoon.github.io/iiif-exploration/using-internet-archive/B01/manifest.json"
    />
    <!-- demo info -->
    <div class="container has-text-left mt-5">
      <h2 class="title is-5">About</h2>
      <p>
        Using/implementing a true IIIF Image API gives access to the additional
        features and APIs available. There are multiple ways to utilize an image server:
        <ol>
        <li>Update an existing image server to handle IIIF images (likely
        the best option for institutions that already host their own images, to
        avoid hosting them in multiple locations)</li>
        <li>Upload images to an
        existing service that has a IIIF server (generally the options are paid
        services)</li>
        <li>Host your own server, using one of the open source
        options available (Cantaloupe, Loris)</li>
        </ol>
      </p>
      <h2 class="title is-5">Pros</h2>
      <p>
        Supports custom cropping, regions, sizes, etc - this means that
        annotations and the Search API can be used, and also means that images
        be more compatible with image viewers (for example, custom sizes means
        that thumbnails will be supported).
      </p>
      <h2 class="title is-5">Cons</h2>
      <p>
        It's pretty difficult to set up even a simple IIIF image server! Also
        more resource intensive than a Level 0 implementation. Alternatively,
        there are paid services that will host them for you.
      </p>
      <h2 class="title is-5">Tech Details</h2>
      <p>
        The images in this demo are hosted for free on the Internet Archive and
        served with their provided IIIF Image API. This
        <a
          href="https://training.iiif.io/iiif-online-workshop/day-two/image-servers/iiif-hosting-ia.html"
          >guide from the IIIF workshop</a
        >
        details how to do this.
      </p>
      <p>
        The viewer on this page is powered by
        <a href="https://projectmirador.org/">Mirador</a>, wrapped in a custom
        Vue component. It's displaying images and annotations via the
        <a
          href="https://szmoon.github.io/iiif-exploration/using-internet-archive/B01/manifest.json"
          >manifest</a
        >.
      </p>
      <p>
        <b>Manifest: </b>
        <a
          href="https://szmoon.github.io/iiif-exploration/using-internet-archive/B01/manifest.json"
        >https://szmoon.github.io/iiif-exploration/using-internet-archive/B01/manifest.json</a>
      </p>
      <p>
        <b>info.json for 1st image: </b>
        <a href="https://iiif.archivelab.org/iiif/b01-n01-2022/info.json">https://iiif.archivelab.org/iiif/b01-n01-2022/info.json</a>
      </p>
      <p>
        <b>full-size jpg for 1st image: </b>
        <a
          href="https://iiif.archivelab.org/iiif/b01-n01-2022/full/full/0/default.jpg"
        >https://iiif.archivelab.org/iiif/b01-n01-2022/full/full/0/default.jpg</a>
      </p>
      <p>
        <b>info.json for 2nd image: </b>
        <a href="https://iiif.archivelab.org/iiif/b01-n02-2022/info.json">https://iiif.archivelab.org/iiif/b01-n02-2022/info.json</a>
      </p>
      <p>
        <b>full-size jpg for 2nd image: </b>
        <a
          href="https://iiif.archivelab.org/iiif/b01-n02-2022b/full/full/0/default.jpg"
        >https://iiif.archivelab.org/iiif/b01-n02-2022b/full/full/0/default.jpg</a>
      </p>
    </div>
  </div>
</template>

<script>
import MiradorViewer from '../components/MiradorViewer';
export default {
  name: 'Home',
  components: {
    MiradorViewer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
</style>
