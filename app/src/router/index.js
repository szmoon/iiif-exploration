import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import StaticTileDemo from '../views/StaticTileDemo';
import ImageApiDemo from '../views/ImageApiDemo'

const env = process.env.NODE_ENV
export const basePath = env === 'production' ? '/iiif-exploration/' : '/'

const routes = [
  { path: basePath, component: Home },
  { path: basePath + 'static-tile-demo', component: StaticTileDemo },
  { path: basePath + 'image-api-demo', component: ImageApiDemo }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
