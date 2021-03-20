/**
 * @param arr Array
 * @returns Object
 */

module.exports = (arr: Array<number | string>) => {
  const obj: {[index: string]: any} = {};
  for(let i = 0; i < arr.length; i += 1) {
    if (obj[arr[i]]) {
      return { status: true, msg: arr[i] };
    };
    obj[arr[i]] = true;
  };
  return { status: false };;
};