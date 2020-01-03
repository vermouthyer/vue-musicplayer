import Vue from "vue";
import VueRouter from "vue-router";
import Recommend from "components/Recommend/Recommend";
import Singer from "components/Singer/Singer";
import Rank from "components/Rank/Rank";
import Search from "components/Search/Search";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/recommend",
      component: Recommend
    },
    {
      path: "/singer",
      component: Singer
    },
    {
      path: "/rank",
      component: Rank
    },
    {
      path: "/Search",
      component: Search
    }
  ]
});

export default router;
