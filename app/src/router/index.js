import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';

const env = process.env.NODE_ENV
const basePath = env === 'production' ? '/iiif-exploration/' : '/'

const routes = [{ path: basePath, component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
