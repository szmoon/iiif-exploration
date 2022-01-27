import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import IiifUses from '../views/IiifUses'
import ImageApiDemo from '../views/ImageApiDemo'
import StaticTileDemo from '../views/StaticTileDemo';

const env = process.env.NODE_ENV
export const basePath = env === 'production' ? '/iiif-exploration/' : '/'

const routes = [
  { path: basePath, component: Home },
  { path: basePath + 'static-tile-demo', component: StaticTileDemo },
  { path: basePath + 'image-api-demo', component: ImageApiDemo },
  { path: basePath + 'iiif-uses', component: IiifUses }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
