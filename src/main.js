import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSession from 'vue-session';

require('/public/style.scss');
    
createApp(App)
    .use(router)
    .use(VueSession)
    .mount('#app');