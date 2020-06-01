import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'//解决移动端300ms延迟问题
import 'styles/reset.css'//引入样式初始化
import 'styles/border.css'//解决1px边框问题
import 'styles/iconfont/iconfont.css'//引入阿里图标库
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

fastClick.attach(document.body)
Vue.prototype.axios = axios
Vue.use(VueAwesomeSwiper)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
