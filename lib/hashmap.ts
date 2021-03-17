/**
 * 
 * @param arr 
 * @returns true if duplicate is found 
 */

const hashmap = (arr: any) => {
  const obj = {};
  for(let i = 0; i < arr.length; i += 1) {
    // if i matches item in object   
    if (obj[arr[i]]) {
      return true;
    };
    // set key to true
    obj[arr[i]] = true;
  };
  return false;
};
