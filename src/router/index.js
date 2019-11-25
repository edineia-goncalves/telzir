import Vue from "vue";
import VueRouter from "vue-router";
import FaleMais from "@/views/fale-mais/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/fale-mais"
  },
  {
    path: "/fale-mais",
    name: "fale-mais",
    component: FaleMais
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
