/**
 * 
 * @param arr1: array
 * @param arr2: array
 * @returns matching value if found
 */

const findMatchInArray = (arr1: any, arr2: any) => {
  for(var i in arr1) {   
      if(arr1.indexOf(arr2[i]) > -1){
          console.log('match', arr2[i]);
      }
  }
  return;
}

findMatchInArray([1,2,3], [3,5,4,2])
findMatchInArray([1,2,4], [3,5,4,2])
