import { createApp } from 'vue';
import LoadScript from "vue-plugin-load-script";
import App from './App.vue';
import '@/assets/main.scss';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(LoadScript);

app.mount('#app');
