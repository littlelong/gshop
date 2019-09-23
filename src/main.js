import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './fiters' // 加载过滤器

Vue.component(Button.name,Button) //<mt-button>
Vue.use(VueLazyload,{
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
