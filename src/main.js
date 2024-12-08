import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App).use(store).use(router)

if (process.env.NODE_ENV !== 'production') {
  app.config.devtools = true
}

app.mount('#app')
