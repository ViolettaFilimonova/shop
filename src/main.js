import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import './assets/styles/reset.css'
import store from "@/store";
import  "axios";

createApp(App).use(store).mount('#app')
