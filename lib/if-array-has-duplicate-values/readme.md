# misc-blocks/if-array-has-duplicate-values
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUgBAHAhgJ0QW0i5kCCzUCeUMsyApgC4CuyAdgM6QDyARgFZkDGFxw44nAPYMKkABaJ6AESrwANgEtOiCmQBqiOVTKMAvJAAUWAFy58iAgB5aVNCzLYAPpHoVkC2gHMAfAEpIut6QAN5QkEIikILspsEA2h4AJmQAHqau7l4AuqaItAQAvgEhBQDcYQBmgsgGcpSQCsUADKUNkJaY+AB0dV4UYq2NANT6AIz+oZBTDRWG0WxxWAlZWRNh05Dk1HQhLhQqVPSmbtoANJBo9J65+MuQZev35Rvzi7cKK8UnZM9PYVs0Wi7VwHI6QCqaehkJ7lB4CYSuSDJNCCUbFCTSWSKZSqDRaHQGOIAFlOAFZTgA2U5E1atYDAXYAIhB1HojOOyDOkEZl087MgRPu8MiyMEACZ0ZIZPIlCp1JptPRCQBmamnVU03x0hnBbksw7877nHlXfnKoURRGi836DHS7FyvGKlVqgCcpzFtMg9KZ+rZpghcihQuF9EEdR6gk8BkmSLIKNGpzCorFSam1vABV8-B9YgoFHgR3pngU-SoLC6QjQwDECgAtGgVCxy8A0Ap6Jw6yw5IJOABrejANxkMitxAeYCKFjABQVOtYCx1jF1xJY2WqOsANwVOnAPsAvBuAaR3IEA)
[![View Test Suite](https://shields.io/badge/-View_Test_Suite-yellow)](../../test/if-array-has-duplicate-values.test.ts)

Accepts an Array and returns an Object with first matched item. Else return an Object with a falsey value.

```ts
const hasDuplicateValues = (arr: Array<number | string>) => {
  const obj: {[index: string]: any} = {};
  for(let i = 0; i < arr.length; i += 1) {
    if (obj[arr[i]]) {
      return { status: true, msg: arr[i] };
    };
    obj[arr[i]] = true;
  };
  return { status: false };;
};
```

### Example use case 

```ts
const hasDuplicateValues = require('misc-blocks/if-array-has-duplicate');

hasDuplicateValues([3,4,3,4]); // { "status": true, "msg": 3 }
hasDuplicateValues([3,4,9,2]); // { "status": false }
```
