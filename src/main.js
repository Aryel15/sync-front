import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiEyeSlash, BiEye, HiArrowRight, MdEditOutlined } from "oh-vue-icons/icons";
import { VueQueryPlugin } from '@tanstack/vue-query'

import './style.css'
import App from './App.vue'
import router from './router'

addIcons(BiEyeSlash, BiEye, HiArrowRight, MdEditOutlined)

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
app.component('v-icon', OhVueIcon)

app.mount('#app')
