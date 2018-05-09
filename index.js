'use strict';

/**
 * Filter path with ..
 * @param {string} sentance
 * @return {string}
 */
module.exports = function(sentance) {

     wordarr = sentance.split(" ");
  
  for (var i = 0, n = wordarr.length; i < n; i++) {
   wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1); 
  }
  str = wordarr.join(" ");
  
  return str; 
};
