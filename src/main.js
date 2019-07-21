// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    // 导入APP组件
import app from './App.vue'

// 导入mint-ui里面的header组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// // 使用header组件
// Vue.component(Header.name, Header)
//     // 使用轮播图
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 导入mui组件的文件
import "./lib/mui-master/dist/css/mui.min.css"
import "./lib/mui-master/dist/css/icons-extra.css"
// 引入路由
import router from "./router.js"

// 引入轮播图数据
import vueSesource from 'vue-resource'
Vue.use(vueSesource)
    //设置总的路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'

//导入缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入时间模块
import moment from "moment"
//时间过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})