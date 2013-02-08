if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      if() return [];
      
      return this.listFiles(data.files).concat(data.files)
    },

    permute: function(arr) {

    }
  };
});
