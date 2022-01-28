<template>
  <div>
    <div class="container has-text-left mb-5">
      <div class="container">
        <h1 class="title is-3">Applications of IIIF</h1>
        <p class="subtitle is-5">
          A small sampling of practical uses or implementations of IIIF
        </p>
      </div>
      <!-- The Canterbury Tales and IIIF -->
      <div class="container">
        <h2 class="title is-5">Viewing resources from multiple institutions</h2>
        <p>
          Information:
          <a
            href="https://blalbrit.github.io/2015/07/14/fellow-travelers-the-canterbury-tales-and-iiif"
          >
            Fellow Travelers: The Canterbury Tales and IIIF
          </a>
        </p>
        <ul>
          <li>
            <b>Manifest from The National Library of Wales:</b>
            https://damsssl.llgc.org.uk/iiif/2.0/4628556/manifest.json
          </li>
          <li>
            <b>Manifest from Virtual Manuscript Library of Switzerland:</b>
            https://www.e-codices.unifr.ch/metadata/iiif/fmb-cb-0048/manifest.json
          </li>
          <li>
            <b>Try it out in Mirador:</b>
            <a href="https://projectmirador.org/">
              https://projectmirador.org/
            </a>
          </li>
        </ul>
      </div>
      <!-- canvas layers -->
      <div class="container">
        <h2 class="title is-5">Utilizing canvas layers</h2>
        <p>
          Information & Demo:
          <a href="https://demos.biblissima.fr/chateauroux/demo/">
            Virtual reconstruction of a damaged manuscript from Châteauroux in
            France
          </a>
        </p>
      </div>
      <!-- annotations -->
      <div class="container">
        <h2 class="title is-5">Annotations, search and crowdsourcing</h2>
        <p>
          Information:
          <a
            href="https://training.iiif.io/annotations/annotations/annotations-stores.html"
          >
            Transcribing the Book of Remembrance
          </a>
        </p>
        <ul>
          <li>
            <b>View/Add Annotations:</b>
            <a href="http://sas.gdmrdigital.com/examples/bor/lcc-en.html">
              http://sas.gdmrdigital.com/examples/bor/lcc-en.html
            </a>
          </li>
          <li>
            <b>Search Annotations:</b>
            <a href="http://hdl.handle.net/10107/4642022">
              http://hdl.handle.net/10107/4642022
            </a>
          </li>
        </ul>
      </div>
      <!-- video -->
      <div class="container">
        <h2 class="title is-5">IIIF as a video editor</h2>
        <p>
          Information: Two videos combined into one, using the manifest.json
        </p>
        <ul>
          <li>
            <b>Mirador Viewer:</b>
            <a
              href="https://dzkimgs.l.u-tokyo.ac.jp/videos/m3/embed.html?iiif-content=https://dzkimgs.l.u-tokyo.ac.jp/videos/cat2020/manifest.json"
            >
              走るネコの姿
            </a>
          </li>
          <li>
            <b>Manifest:</b>
            <a
              href="https://dzkimgs.l.u-tokyo.ac.jp/videos/cat2020/manifest.json"
            >
              https://dzkimgs.l.u-tokyo.ac.jp/videos/cat2020/manifest.json
            </a>
          </li>
        </ul>
      </div>
      <!-- video -->
      <div class="container">
        <h2 class="title is-5">
          Standardized data format between institutions
        </h2>
        <p>
          Because the IIIF data model is standardized, IIIF images from one
          institution can be used in another's applications
        </p>
        <ul>
          <li>
            <a href="https://experiments.getty.edu/ac-art-generator">
              <b>Animal Crossing Art Generator, Getty Museum</b>
            </a>
          </li>
          <li>
            <b>Open access work at the Smithsonian:</b>
            <a href="https://www.si.edu/object/frida-kahlo:npg_NPG.2015.136">
              Frida Kahlo
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IiifUses',
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
</style>
