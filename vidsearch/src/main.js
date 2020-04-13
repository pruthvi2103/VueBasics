import Vue from 'vue';
import App from './App';

new Vue({
    
    render: h => h(App),

    // the above is equivalent to
   // render: function(h) {
   //     return h(App);
   // }
}).$mount('#app');