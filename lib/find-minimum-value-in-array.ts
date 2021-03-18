/**
 * 
 * @param array 
 * @returns minimum value
 */

const findMinimumValue = (array: Array<number>) => {
  let currentMinimumValue = array[0];

  for ( let i = 0; i < array.length; i += 1){
    if(currentMinimumValue > array[i]) {
      currentMinimumValue = array[i];
    };
  };

  return currentMinimumValue;
}

let array = [5, 3, 7, 8, 10, 15, 18, 24, 111, 1, 12, 19, 87];
const demo = findMinimumValue(array);

console.log(demo);
