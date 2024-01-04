import Vue from 'vue';
import MainPage from './components/pages/MainPage.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(MainPage) // Render MainPage directly without using App.vue
}).$mount('#app');