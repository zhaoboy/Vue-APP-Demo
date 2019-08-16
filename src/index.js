import Vue from "vue";
import { router } from './routers';
import axios from 'axios';
// import style from "./main.css";
import { Button, Select, Option, Carousel, CarouselItem, Menu, Submenu, MenuItem } from 'element-ui';
import headerNav from './components/headerNav.vue';
import footerNav from './components/footerNav.vue';

Vue.prototype.$http = axios

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
const app = new Vue({
  el: "#app",
  // 4. 创建和挂载根实例 router是router: router的简写
  router,
  data: {},
  components: {
    'header-nav': headerNav,
    'footer-nav': footerNav
  }
});
