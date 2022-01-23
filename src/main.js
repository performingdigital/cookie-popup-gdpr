import { createApp } from "vue";
import App from "./App.vue";

window.useCookies = ((settings, callback) => {
  let div = document.createElement("div");
  document.body.appendChild(div);
  createApp(App, { settings, callback }).mount(div);
});
