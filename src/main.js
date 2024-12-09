import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import $ from "jquery";

const app = createApp(App);
app.config.globalProperties.$ = $;
app.mount("#app");
