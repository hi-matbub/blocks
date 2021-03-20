/**
 * @param x string
 * @param arr array
 * @returns object
 */

module.exports = (x: Number | String | Boolean, arr: Array<number | string | boolean>) => {
  for (let i = 0; i < arr.length; i += 1) {
    if(arr[i] === x) {
      return { status: true, msg: arr[i], i };
    };
  };
  return { status: false };
};
