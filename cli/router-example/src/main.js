// recode this from scratch in an example
import Vue from 'vue'
// make sure to run npm install 'vue-router' --save-dev
import VueRouter from 'vue-router'
import App from './App.vue'
// import other components
import One from './components/One.vue'
import Two from './components/Two.vue'
import Num from './components/Num.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/one', component: One },
  { path: '/two', component: Two },
  { path: '/num/:num', component: Num }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
