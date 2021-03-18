/**
 * 
 * @param arrayOne
 * @param arrayTwo
 * @returns match if found
 */

const findMatchBetweenTwoArrays = (arrayOne: any, arrayTwo: any) => {
  let matchFound = false;
  
  for(var i in arrayOne) {   
    if(arrayOne.indexOf(arrayTwo[i]) > -1){
      matchFound = true;
      
      console.log(`match at: ${arrayTwo[i]}`);
    };
  };
  
  return matchFound;
};

// findMatchBetweenTwoArrays([1,2,3], [3,5,4,2]);
findMatchBetweenTwoArrays([1,2, 3,4], [3,5,4,2,5]);
