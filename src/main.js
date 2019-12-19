// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import axios from 'axios'
import Vuex from 'vuex'
import vueXcCity from 'vue-xc-city';  
import 'vue-xc-city/dist/xc-city.css';  

Vue.use(vueXcCity);

Vue.use(ElementUI,  { locale });
Vue.prototype.$http= axios;

Vue.use(Vuex);
const store=new Vuex.Store({
  //其他组件通过this.$store.state.变量名访问
  state:{
    signUp:false,
    id:'',
  },
  //其他组件通过this.$store.commit（方法名）访问
  mutations:{
    changeSign(state,id=null){
      state.signUp =! state.signUp;
      state.id=id;
      console.log('state.signUp:'+state.signUp);
    }
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
