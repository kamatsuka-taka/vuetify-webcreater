/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
// p358 8-2-2 ルータの有効化
import router from './router'

const app = createApp(App)


// p358 8-2-2 ルータの有効化
// app.use(router).mount('#app')
registerPlugins(app)
app.mount('#app')