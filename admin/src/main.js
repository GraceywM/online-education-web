import Vue from 'vue'
import App from './app.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios; //vue.prototype.xxx可以理解为VUE组件的全局变量。可以在任意VUE组件中，使用THIS.XXX来获取这个值。.
                             //$代表VUE全局属性的一个约定

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
