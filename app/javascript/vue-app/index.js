import Vue from 'vue/dist/vue.esm'
import Buefy from 'buefy'
import App from './components/app.vue'

document.addEventListener('turbolinks:ready', () => {
  const app = new Vue({
    el: 'app',
    data: {
      message: 'Can you say hello?',
    },
    components: { App },
  })
  app.$mount('#hello')
})
// document.addEventListener('DOMContentLoaded', () => {
//   let element = document.getElementById('vue-app');
//   let product = element.dataset.product;
//
//   const app = new Vue({
//     el: 'vue-app',
//     data: {product: product},
//     template: '<App></App>',
//     components: {App},
//   });
//
//   app.$mount(element)
// });

// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>

// import Vue from 'vue/dist/vue.esm'
// import App from './app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
