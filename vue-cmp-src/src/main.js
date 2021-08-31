import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from '../../loader';
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

// /!\ IMPORTANT
// You've got to tell Vue to ignore all components defined in a particular component library
// Prefixing all our components by a particular id should do the trick
Vue.config.ignoredElements = [/c?s?m-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: h => h(App),
}).$mount('#app');
