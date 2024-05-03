import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import i18n from './plugins/i18n.js';
import store from "@/store";




i18n(createApp(App)
  .use(router)
  .use(store))

  .mount('#app')
