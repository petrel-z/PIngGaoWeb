import "./assets/css/base.css";
import "./assets/css/fonts.css";
import "@/assets/iconfont/icons/iconfont.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
