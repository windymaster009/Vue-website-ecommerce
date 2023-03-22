import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

createApp(App).use(router).mount('#app')

