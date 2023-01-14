import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import SwiperMain from "./components/SwiperMain.vue";
import Soon from "./components/Soon.vue";
import App from "./App.vue";

import "./assets/main.css";

const routes = [
  {
    path: "/",
    name: "home",
    component: SwiperMain,
  },
  {
    path: "/soon",
    name: "soon",
    component: Soon,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
