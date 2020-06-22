import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import EventBus from 'vue-bus-ts';
import { Carousel, CarouselItem, Tabs, TabPane } from 'element-ui';

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(EventBus);
const bus = new EventBus.Bus();

Vue.config.productionTip = false;

new Vue({
  bus,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
