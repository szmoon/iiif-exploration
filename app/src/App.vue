<template>
  <div id="app">
    <Header />

    <div class="page-content">
      <div class="container is-max-desktop">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Home,
    Header
  }
};
</script>

<style lang="scss">
@import '@/assets/main.scss';
body {
  min-height: 100%;
}

#app {
  font-family: 'Philosopher', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* min-height: 100vh; */
  height: 100%;
  background-color: $bgcolor-white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page-content {
  height: 100%;
  padding: 50px;

  h2 {
    margin-top: 35px !important;
    margin-bottom: 15px !important;
  }
  p {
    margin-bottom: 15px;
  }

  ul {
    list-style-type: circle;
  }

  ol,
  ul {
    margin-bottom: 35px;
    margin-left: 35px;
    li {
      margin-top: 15px;
    }
  }
}
</style>
