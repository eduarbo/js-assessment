if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.apply(obj)
    },

    alterObjects : function(constructor, greeting) {
      return constructor.prototype.greeting = greeting
    },

    iterate : function(obj) {
      var keys = [];
      for ( var i  in obj ) {
        if( obj.hasOwnProperty(i) ) keys.push( i + ": " + obj[i] )
      }

      return keys;
    }
  };
});
