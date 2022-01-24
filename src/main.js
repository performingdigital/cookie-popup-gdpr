import { createApp } from "vue";
import App from "./App.vue";
import './index.css';

window.useCookies = ((description, settings, callback) => {
  let div = document.createElement("div");
  document.body.appendChild(div);
  createApp(App, { description, settings, callback }).mount(div);
});
