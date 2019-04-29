/* 
    Created on : 31/01/2019, 11:13:00 AM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
});

var vue = new Vue({
    el: '#app',
    data: {
        searchText: ''
    },
});
