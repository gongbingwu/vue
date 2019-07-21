import VueRouter from 'vue-router'
// 导入对应路由模块
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newLIst from "./components/news/newlist.vue"
import newsInfo from "./components/news/newsInfo.vue"
import photoList from "./components/photo/photoList.vue"
import photoInfo from "./components/photo/photoInfo.vue"
import goodsList from "./components/goods/goodsList.vue"

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: "/home" },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/home/newLIst', component: newLIst },
        { path: '/home/newsInfo/:id', component: newsInfo },
        { path: '/home/photoList', component: photoList },
        { path: '/home/photoInfo/:id', component: photoInfo },
        { path: '/home/goodsList', component: goodsList }


    ],
    linkActiveClass: "mui-active"
})

// 把路由对象暴露出去
export default router