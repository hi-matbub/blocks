/**
 * 
 * @param search 
 * @param array 
 * @returns boolean on match
 */

const sequentialSearch = (search: Number | String, array: Array<number | string>) => {
  for (let i = 0; i < array.length; i += 1) {
    if(array[i] === search) {
      console.log(`Match found: ${search}`);
      return true;
    };
  };
  //item not found 
  return false;
};

const demoSearch = 24;
const demoArray = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];

sequentialSearch(demoSearch, demoArray);
