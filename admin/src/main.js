import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "vue3-particles";
import './util/axios.config'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.use(Particles)
app.use(ElementPlus)
app.mount('#app')
