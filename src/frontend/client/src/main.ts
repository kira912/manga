import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './index.css'
import factories from './plugins/factories';
import { store } from "./store";
import { animeFactory } from "../../interface-adapter";

const app = createApp(App);

app.config.globalProperties.$anime = animeFactory
app.use(router).use(factories).use(store).mount("#app");
