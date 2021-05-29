import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "./styles/tailwind.css";

import Toast, { PluginOptions, POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);
const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
};

app.use(Toast, options);

app.use(store).use(router).mount("#app");
