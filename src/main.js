import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

require('/public/style.scss');
    
createApp(App)
    .use(router)
    .mount('#app');

