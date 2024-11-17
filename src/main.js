import { createApp } from 'vue'
import App from './App.vue'
import store from './store/storage'
import Antd from 'ant-design-vue'
import './assets/css/common.css';
import 'ant-design-vue/dist/reset.css'
// createApp(App).mount('#app')

const app = createApp(App);

import router from './router.js'
app.use(router);
app.use(store);
app.use(Antd).mount("#app");