if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      var binNum = num.toString(2);
      return +binNum[binNum.length - bit]
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var bin = parseFloat(num).toString(2);
      return Array( 9 - bin.length ).join('0') + bin;
    },

    multiply: function(a, b) {
      return a * 1e10 * b * 1e10 / 1e20
    }
  };
});

