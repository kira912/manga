import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../app/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  { path: '/anime', name: 'AnimePage', component: () => import('../app/anime/views/Home.vue') },
  { path: '/anime/:id', name: 'AnimeEpisodesDetail', component: () => import('../app/anime/views/AnimeDetails.vue') },
  { path: '/scan', name: 'ScanPage', component: () => import('../app/scan/views/Home.vue') },
  { path: '/scan/:id', name: 'AnimeScanDetail', component: () => import('../app/scan/views/AnimeScanDetails.vue') },
  { path: '/scan/chapter/book/:bookId', name: 'AnimeScanChapterBook', component: () => import('../app/scan/views/AnimeScanChapterBook.vue') },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
