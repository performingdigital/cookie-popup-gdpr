import { createApp } from "vue";
import App from "./App.vue";
import './index.css';

window.useCookies = ((options, settings, callback) => {
  let div = document.createElement("div");
  document.body.appendChild(div);
  createApp(App, { options, settings, callback }).mount(div);
});
