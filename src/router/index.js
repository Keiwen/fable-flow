import { createRouter, createWebHashHistory } from 'vue-router'
import ChapterPlay from '../views/ChapterPlayView.vue'
import BookSelection from '../views/BookSelectionView'

const routes = [
  {
    path: '/',
    name: 'chapter',
    component: ChapterPlay
  },
  {
    path: '/book',
    name: 'book',
    component: BookSelection
  },
  {
    path: '/settings',
    name: 'settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingsView')
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SetupView.vue')
  },
  {
    path: '/chapters',
    name: 'chapterList',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChapterListView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
