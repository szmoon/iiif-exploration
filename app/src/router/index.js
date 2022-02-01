import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import IiifUses from '../views/IiifUses'
import PresentationApiDemo from '../views/PresentationApiDemo'
import ImageApiDemo from '../views/ImageApiDemo';

const env = process.env.NODE_ENV
export const basePath = env === 'production' ? '/iiif-exploration/' : '/'

const routes = [
  { path: basePath, component: Home },
  { path: basePath + 'image-api-demo', component: ImageApiDemo },
  { path: basePath + 'presentation-api-demo', component: PresentationApiDemo },
  { path: basePath + 'iiif-uses', component: IiifUses }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
