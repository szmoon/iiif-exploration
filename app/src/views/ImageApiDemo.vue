<template>
  <div>
    <div class="container has-text-left mb-5">
      <p class="title is-3">Image API Demo</p>
      <p class="subtitle is-5">Uses a hosted IIIF Image Server</p>
    </div>
    <MiradorViewer
      manifestUrl="https://szmoon.github.io/iiif-exploration/using-internet-archive/B01/manifest.json"
    />
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
