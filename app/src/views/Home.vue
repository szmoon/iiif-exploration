<template>
  <div>
    <div class="container has-text-left mb-5">
      <!-- site intro -->
      <div class="container box">
        <h1 class="title is-3">IIIF and its uses in cultural institutions</h1>
        <p class="subtitle is-5">
          Here you'll find basic information about IIIF, links to examples of
          interesting use cases, as well as a few practical demos. This site was
          created in January 2022 to accompany a presentation, and will not
          likely be updated later.
        </p>
      </div>
      <!-- iiif intro -->
      <div class="container mt-6">
        <h2 class="title is-4 mb-6">what is IIIF?</h2>
        <p class="subtitle is-5">
          "International Image Interoperability Framework"
        </p>
        <p>A technology for displaying art online.</p>
        <p>
          IIIF is a standardized way of delivering images and audio/video files
          online, most commonly used in academic and cultural institutions. It's
          also a community that develops and implements APIS using IIIF
          standards.
        </p>
      </div>
      <!-- iiif image -->
      <div class="container mt-6">
        <h2 class="title is-4 mb-6">a IIIF image</h2>
        <p class="subtitle is-5">
          <a
            href="https://iiif.archivelab.org/iiif/b01-n01-2022/full/full/0/default.jpg"
            ><b>
              https://iiif.archivelab.org/iiif/b01-n01-2022/full/full/0/default.jpg
            </b></a
          >
        </p>
        <p>
          <a href="https://www.learniiif.org/image-api/playground">
            Guided IIIF playground
          </a>
        </p>
      </div>
      <!-- additional resources -->
      <div class="container mt-6">
        <h2 class="title is-4">resources</h2>
        <li>
          <a href="https://iiif.io/"> IIIF Website </a>
        </li>
        <li>
          <a href="https://training.iiif.io/iiif-online-workshop/">
            IIIF Online Workshop
          </a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
.box {
  background-color: #fefefe;
}
</style>
