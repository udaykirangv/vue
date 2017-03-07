// declaring a global component

Vue.component('global-component', {
  template: '<div>Check out this global Vue component</div>'
})




var app1 = new Vue({
  el: '#app-1'
})

// local components

var localComponent = Vue.component('local-component', {
  template: '<div>Check out this local Vue component</div>'
})

var evenCounter = Vue.component('even-counter', {
  template: '<button v-on:click="count += 2">{{count}}</button>',
  data: function() {
    return {
      count: 0
    }
  }
});

var app2 = new Vue({
  el: '#app-2',
  components: {
    'local-component': localComponent,
    'even-counter': evenCounter
  }
})


// props

// lion theme
var cubComponent = Vue.component('cub', {
  props: ['furColor', 'numTeeth'],

  // place cleaning logic within a computed property because
  // you cannot modify the passed props data and expect it to modify parent state
  computed: {
    trueFur: function() {
      return this.furColor.toLowerCase();
    },
    trueTeeth: function() {
      return this.numTeeth > 40 ? 40 : this.numTeeth;
    }
  },

  // props becomes available within the template,
  // just like data from the data object

  // arbitrary operations on numTeeth to show that we pass an actual JS number.
  template: '<span>I sport {{trueFur}} fur as a cub. I have {{trueTeeth}} teeth.</span>'
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    furColor: 'maroon',
    numTeeth: 30
  },
  components: {
    'cub': cubComponent
  }
})


var strictCubComponent = Vue.component('strict-cub', {
  props: {
    // the value is the type - String, Number, Boolean, Function, Object, Array
    furColor: {
        type: String,
        required: true
    },
    numTeeth: {
      type: Number,
      default: 30
    }
  },
  template: '<div>A strict lion with {{furColor}} fur and {{numTeeth}} teeth.</div>'
})

var app4 = new Vue({
  el: '#app-4',
  components: {
    'strict-cub': strictCubComponent
  }
});


// CONTINUE WITH CUSTOM EVENTS IN COMPONENTS