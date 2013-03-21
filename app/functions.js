if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function ( fn, arr ) {
      return fn.apply ( fn, arr );
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function ( str ) {
      return function ( innerStr ) {
        return str + ', ' + innerStr;
      };
    },

    makeClosures : function(arr, fn) {
      var ret = [];
      arr.forEach( function( item, i ) {
        ret.push( function() { return fn(item); } );
      });

      return ret;
    },

    partial : function(fn, str1, str2) {
      return function(character) {
        return fn(str1, str2, character);
      };
    },

    useArguments : function() {
      var a = Array.prototype.slice.call(arguments);

      var sum = 0;
      a.forEach(function(item, i) {
        sum += item;
      });

      return sum;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments);
      return args.shift().apply(this, args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments);
      args.shift();
      return function() {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
      };
    },

    curryIt : function(fn) {
        function getCurriedFn(prev) {
            return function(arg) {
                var args = prev.concat(arg);
                if (args.length < fn.length) {
                    return getCurriedFn(args);
                } else {
                    return fn.apply(this, args);
                }
            };
        }

        return getCurriedFn([]);
    }
  };
});
