import "./assets/main.css";


import { createApp } from "vue";

import App from "./App.vue";
import Router from '../router/index.js';
import Store from './stores.js'


createApp(App).use(Router).use(Store).mount('#app')

