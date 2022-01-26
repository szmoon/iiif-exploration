<template>
  <div id="mirador"></div>
</template>

<script>
import { loadScript } from 'vue-plugin-load-script';

export default {
  name: 'MiradorViewer',
  props: {
    manifestUrl: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.loadMirador();
  },
  methods: {
    async loadMirador() {
      loadScript('https://unpkg.com/mirador@3.0.0-alpha.6')
        .then(() => {
          this.initViewer();
        })
        .catch(() => {
          console.error('failed to load mirador script');
        });
    },
    initViewer() {
      window.Mirador.viewer({
        id: 'mirador',
        windows: [
          {
            loadedManifest: this.manifestUrl
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
#mirador {
  position: relative;
  height: 500px;
}
</style>
