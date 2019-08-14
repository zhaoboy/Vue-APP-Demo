import Vue from "vue";
import { router } from './routers'
import BootstrapVue from 'bootstrap-vue'
// import style from "./main.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import { Button, Select, Option, Carousel, CarouselItem } from 'element-ui';
import footerNav from './components/footerNav.vue';

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Carousel);
Vue.use(CarouselItem);

const app = new Vue({
    el: "#app",
    // 4. 创建和挂载根实例 router是router: router的简写
    router,
    data: {
        message: "Vue APP Demo",
    },
    components: {
        'footer-nav': footerNav
    }
});
