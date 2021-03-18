/**
 * @param arr 
 * @returns true on first duplicate found 
 */

const hasDuplicateValues = (arr: Array<number | string>) => {
  const obj: {[index: string]: any} = {};
  for(let i = 0; i < arr.length; i += 1) {
    if (obj[arr[i]]) {
      return true;
    };
    obj[arr[i]] = true;
  };
  return false;
};

const demo1 = hasDuplicateValues([4,5,6,4]); // true
const demo2 = hasDuplicateValues([3,4,3,4]); // true
const demo3 = hasDuplicateValues([3,4,9,2]); // false

console.log({
  demo1,
  demo2,
  demo3
})

// https://github.com/hi-matbub/blocks 👋 
