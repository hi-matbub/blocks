# Has Duplicate Values

Function will return `true` on first match found and `false` if no match was found. Not intended to account for more than one match.

```ts
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
```


### Example use case 
```ts
import { hasDuplicateValues } from = 'block/has-duplicate-values'

hasDuplicateValues([4,5,6,4]); // true
hasDuplicateValues([3,2,5,6]); // false
```