import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from './pages/home.vue';
import minePage from './pages/mine.vue';

// 0. 调用 VueRouter
Vue.use(VueRouter);

// 1. 定义（路由）组件，也可以从其他文件 import 进来
const found = { template: '<div>found</div>' }
// 2. 定义路由，每个路由应该映射一个组件
const routes = [
    { path: '/', component: homePage },
    { path: '/found', component: found },
    { path: '/mine', component: minePage }
]
// 3. 创建 router 实例，然后传 `routes` 配置
export const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})


