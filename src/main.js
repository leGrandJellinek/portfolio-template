import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/styles/style.scss"
import "@/assets/scripts/burger"

import "animate.css"
import "wowjs/css/libs/animate.css"
createApp(App).use(store).use(router).mount('#app')
