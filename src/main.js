import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

//全局注册elementIcon
import * as ElIcons from '@element-plus/icons-vue';
for (const name in ElIcons) {
    app.component(name, ElIcons[name]);
}

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
app.use(ElementPlus);

// global css
import './styles/index.scss';

import router from './router';
app.use(router);
// 使用pinia
import setupStore from '@/store/useStore.js';
setupStore(app);

app.mount('#app');
export default app;
