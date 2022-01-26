<template>
  <div>
    <div class="container has-text-left mb-5">
      <p class="title is-3">An Intro to IIIF</p>
      <p class="subtitle is-5">
        Here you'll find basic information about IIIF, links to examples of
        interesting use cases, as well as a few practical demos. This site was
        created in January 2022 to accompany a presentation, and will not likely
        be updated later.
      </p>
    </div>
  </div>
</template>

<script>
import IiifViewer from '../components/IiifViewer';
export default {
  name: 'Home',
  components: {
    IiifViewer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
</style>
