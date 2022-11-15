/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import router from '@/router'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'

const app = createApp(App)

registerPlugins(app)

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')
