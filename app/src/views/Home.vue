<template>
  <div>
    <!-- <figure class="image is-full-width">
      <img src="" />
    </figure> -->
    <Viewer />
  </div>
</template>

<script>
import Viewer from '../components/Viewer';
export default {
  name: 'Home',
  components: {
    Viewer
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
</style>
