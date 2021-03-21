# misc-blocks/find-minimum-value

[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUqYAQA4EMBOyC2k2sgQVXQE9ZpJ5UBTAFwFdUA7AZ0gDlaMAjS1OYccAGMA9s2qQAZgEsGAEwCyMqRg4A1ZABtalSAF5IAChwAufIWREAPAw7dUAPgCUe+5ADeUSBpqQAHnuxCAG0ABgBdAG5PCWFcAy8fKUgZQNRnKQkDf1ccIKkw5399XPyoyEgqOkY-KIBfKKFRJnFZSgxhAEYA6TlFBmU1TW0DIIBWABoOgCZJgE5xgA4AdgKokTFIVvap7pkFJRUMdS1KEYAWcYBmcanrqdWBdaZhbwA6DWEAcwMPcq3O8aef5TcC1RxRIA)
[![View Test Suite](https://shields.io/badge/-View_Test_Suite-yellow)](../../test/find-minimum-value.test.ts)

Accepts an Array of Numbers, returns the least greatest Number.

```js
const findMinimumValue = (arr: Array<number>) => {
  let x = arr[0];
  for ( let i in arr) if(x > arr[i]) x = arr[i];
  return x;
};
```


### Example use case 
```ts
const findMinimumValue = require('misc-blocks/find-minimum-value');

findMinimumValue([5,12,19,87]); // 5
findMinimumValue([4,3,23,2]); // 4
```