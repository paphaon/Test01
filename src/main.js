import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // นำเข้า Vuetify

createApp(App)
  .use(vuetify) // ใช้ Vuetify
  .mount('#app')
