import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import PortfolioView from "@/views/PortfolioView.vue"
import SkillView from "@/views/SkillView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/skills',
    name: 'skill',
    component: SkillView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
