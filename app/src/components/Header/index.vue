<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="basePath" class="navbar-item">
        <h1 class="title">iiif exploration</h1>
      </router-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link :to="basePath" class="navbar-item">Main</router-link>
        <router-link :to="basePath + 'image-api-demo'" class="navbar-item">
          Image API Demo
        </router-link>
        <router-link
          :to="basePath + 'presentation-api-demo'"
          class="navbar-item"
        >
          Presentation API Demo
        </router-link>
        <router-link :to="basePath + 'iiif-uses'" class="navbar-item">
          IIIF Uses
        </router-link>
        <a
          href="https://github.com/szmoon/iiif-exploration"
          class="navbar-item"
        >
          Github
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { basePath } from '../../router';
export default {
  name: 'Header',
  data() {
    return {
      basePath: basePath
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';

.title {
  font-family: 'Sacramento', cursive;
  color: $font-purple;
}
.navbar {
  background-color: $bgcolor-white;
  border-bottom: 1px solid $bgcolor-purple;
}

.navbar-item {
  display: flex;
}

.navbar-item,
.navbar-link {
  line-height: 2;
}

.navbar,
.navbar-menu,
.navbar-start,
.navbar-end {
  align-items: stretch;
  display: flex;
  padding: 0;
  box-shadow: none;
  background-color: transparent;
}

.navbar-menu {
  flex-grow: 1;
  flex-shrink: 0;
}
.navbar-start {
  justify-content: flex-start;
  margin-right: auto;
}
.navbar-end {
  justify-content: flex-end;
  margin-left: auto;
}
</style>
