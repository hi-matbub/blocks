# misc-blocks/sequential-search
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?ssl=14&ssc=3&pln=1&pc=1#code/PQKhCgAIUgBAHAhgJ0QW0gD0gZwC7ICWAdgOZQwIrqQrK3KoCeFcyApngK7LE6QB7AEYArdgGM8FYOHDiBfPLnYBHLu2J5CiADYBldinEALSAF5IACkwAuSADkuaIe3oAfSHoIlSkDwCEBAR1DYgAaBmQ7AEFGRCYAHmInF3dcbzI-SCEgkMRiAD4ASnMCyABvKEgAMwF6SxClQnNIAAYAbkhmhMiAOhCyPGNO5oBqCwBGEsrIWa7qyzoAbUIAXXMzC0xpqrnIDm5eCvTEbhw7AnUItBxSO2W1iOaAX3bdyFeqz9mDnmJj-CnLjnGq6HDsD5vT5yBT4SAAE3YaAEExa4LUGi0ugMRmMlgATAAWCJLCYADgiRIiExpqyKnXAwGAs3KkAARICzmyLsgruybqRuZAqezCELUc9ZPJFAikQJ8WjVOpNNp9IZkCZLGyABLsHQ6ARsklsvToQ2U4ns3X6w10hlMlnsznAoWXdgRNkCoU6vUGo2ioUKyUwmWI5EAZkVGJV2PVmrdJITwstPptbLtjOZxw5eCBOFdvPd-NuBb5bLFdlaHylsKUYYEhKjyqxatxlgpkCWbPEKH9bJypz78B0+XY6fpkAd2ed+bs1TBEOD0pwwXY-QEpEsM1lyImYSq9fx+9m9fDx53DfAzyKsgdxjweHg5yZpEIQy4Ql68jQwGMhAAtGgpxCB+wBoIQODiP+QgGuIADW-CALwbgDSO5AQA)
[![View Test Suite](https://shields.io/badge/-View_Test_Suite-yellow)](../../test/sequential-search.test.ts)

Find's match within Array and returns an Object response 

```ts
const sequentialSearch = (x: Number | String | Boolean, arr: Array<number | string | boolean>) => {
  for (let i = 0; i < arr.length; i += 1) {
    if(arr[i] === x) {
      return { status: true, msg: arr[i], i };
    };
  };
  return { status: false };
};
```

### Example use case 

```ts
const sequentialSearch = require('misc-blocks/sequential-search');

const demo1 = sequentialSearch(24, [18, 24, 111]); 
//  { "status": true, "msg": 24, "i": 1 }

const demo2 = sequentialSearch("Hello", ["Seven", 24, "Hello"]); 
//  { "status": true, "msg": "Hello", "i": 2 }

const demo3 = sequentialSearch(true, [true, 24, "Hello"]);
//  { "status": true, "msg": true, "i": 0 }

const demo4 = sequentialSearch(8, ["car", "boat", "plane"]); //  { "status": false }
```