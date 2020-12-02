import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/common.css'
import './assets/font/iconfont.css'
import Tabs from './components/Tabs'
import Tab from './components/Tabs'
import BackTop from './components/BackTop'


Vue.config.productionTip = false
Vue.use(Tabs);
Vue.use(Tab);
Vue.use(BackTop);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
