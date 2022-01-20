<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header />
    <!-- <router-view /> -->

    <div class="page-content">
      <router-view />
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

#app {
  font-family: 'Philosopher', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: $bgcolor-white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page-content {
  height: 100%;
  padding: 30px;
}
</style>
