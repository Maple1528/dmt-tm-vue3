import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import '@/styles/common.scss'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(ElementPlus, { locale: zhCn })
  .mount('#app')
