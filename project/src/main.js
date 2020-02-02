import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FastClick from "fastclick";
import VueLazyLoad from "vue-lazyload";
import "common/stylus/index.styl";

Vue.config.productionTip = false;
FastClick.attach(document.body);
Vue.use(VueLazyLoad, {
  loading: require("common/images/default.png")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
