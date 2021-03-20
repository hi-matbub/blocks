/**
 * @param a Array
 * @param b Array
 * @returns Object
 */

module.exports = (a: Array<number>, b: Array<number>) => {
  for(let i in a) {   
    if(a.indexOf(b[i]) > -1) {
      return { status: true, msg: b[i] };
    };
  };
  return { status: false };
};
