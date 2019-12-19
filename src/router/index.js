import Vue from 'vue'
import Router from 'vue-router'
import dailyList from "../components/dailyList.vue";
import shareList from "../components/shareList.vue";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dailyList' 
    },
    {
      path: "/dailyList",
      component: dailyList
    },
    {
      path: "/shareList",
      component: shareList
    },
  ]
})
