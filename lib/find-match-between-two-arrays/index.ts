/**
 * @param a array
 * @param b array
 * @returns true on match
 */

module.exports = (a: Array<number>, b: Array<number>) => {
  for(var i in a) {   
    if(a.indexOf(b[i]) > -1) {
      return true;
    };
  };
  return false;
};
