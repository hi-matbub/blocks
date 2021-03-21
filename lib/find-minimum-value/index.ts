/**
 * 
 * @param arr Array 
 * @returns Number
 */

module.exports = (arr: Array<number>) => {
  let x = arr[0];
  for ( let i in arr) if(x > arr[i]) x = arr[i];
  return x;
};
