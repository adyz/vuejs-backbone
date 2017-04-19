import Backbone from 'backbone'; 
import $ from 'jquery';


const Home = { template: '<p>vue page loaded, wuhu!</p>' }

var appRouter = Backbone.Router.extend({
    routes: {
        "vuepage(/)": "vuepage",
        "*notFound": "notFound"
    },
  
  
    initialize: function(){
      console.log('Init');
    },


    vuepage: function(){
      
      console.log('Vue');
      
        require.ensure([], function(){

            /*
             * Ensure Vue
             */
            window.Vue = require('vue');
          
          
          
          //Init
          new Vue({
            el: '#app',
            data: {
              currentRoute: 'Home'
            },
            computed: {
              ViewComponent () {
                return Home
              }
            },
            render: function(h) {
              console.log('Page rendered');
              return h(this.ViewComponent);
            },
            mounted: function (){
              console.log('Mounted and called after render');
            }
          });
        });
    }
});

var Router = new appRouter();
Backbone.history.start({
  pushState: true
});


$(function(){
  console.log('jQuery on');
  $('button').on('click', function(e){
    e.preventDefault();
    console.log('Click');
    Router.navigate('vuepage', {trigger: true});
  });
});
