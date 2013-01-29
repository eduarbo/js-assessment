if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      if(!arr.length) return 0;
      return arr.pop() + this.sum(arr);
    },

    remove : function(arr, item) {
      var index = arr.indexOf(item);

      if(index === -1) return arr;
      arr.splice(index, 1)
      return this.remove(arr, item);
    },
    
    removeWithoutCopy : function(arr, item) {
      var i;
      while( (i = arr.indexOf(item)) !== -1) {
        arr.splice(i, 1);
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      var before = arr.slice(0, index),
          after = arr.slice(index, arr.length);

      return before.concat([item].concat(after));
    },

    count : function(arr, item) {
      if(!arr.length) return 0;

      var inc = arr.pop() === item ? 1 : 0;
      return this.count(arr, item) + inc;
    },

    duplicates : function(arr) {
      if(!arr.length) return [];

      var item = arr.pop(),
          ret = arr.indexOf(item) !== -1 ? [item] : [];

      return this.duplicates(arr).concat(ret);
    },

    square : function(arr) {
      if(!arr.length) return [];

      var item = arr.pop();

      return this.square(arr).concat([item * item]);
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
