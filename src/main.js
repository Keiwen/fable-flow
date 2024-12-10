import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import addNavigationGuards from '@/router/guards'
import '@/assets/scss/theme_main.scss'

addNavigationGuards(router, store)

const app = createApp(App).use(store).use(router)

if (process.env.NODE_ENV !== 'production') {
  app.config.devtools = true
}

app.mount('#app')
