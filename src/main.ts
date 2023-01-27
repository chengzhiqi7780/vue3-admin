import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import store from '@/store/store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import echarts from '@/utils/charts';
import router from './router';
import App from './App.vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus).use(router).use(store)
  .mount('#app');

app.provide('$echarts', echarts);
