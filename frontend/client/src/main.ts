import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './index.css'
import factories from './plugins/factories';

createApp(App).use(router).use(factories).mount("#app");
