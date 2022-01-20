<template>
  <div>
    <!-- <figure class="image is-full-width">
      <img src="" />
    </figure> -->
    <IiifViewer
      manifestUrl="https://szmoon.github.io/using-internet-archive/B01/manifest.json"
    />
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
