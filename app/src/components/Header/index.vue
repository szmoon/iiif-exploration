<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <h1 class="title">iiif demo</h1>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
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
</style>
