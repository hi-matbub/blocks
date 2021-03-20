# misc-blocks

![Styleguide](https://img.shields.io/badge/Style%20Guide-Airbnb-%23FB5057)
![Tested with Jest](https://img.shields.io/badge/Tested%20with-Jest-%23BF1524)
![License](https://img.shields.io/badge/License-MIT-orange)

<p align="right"><img src="./public/blocks-154x154.png" /></p>

Blocks of code written in TypeScript, compiled into pure functional JavaScript 💙

## Getting Started

Install the `misc-blocks` package. 

```js
npm install misc-blocks
```

This is a utility driven project. Refer to the list below to view more information about specific methods available. 

Most common ways to import modules
```js
// preferred 
const findMatchBetweenTwoArrays = require('misc-blocks/find-match-between-two-arrays');

// less preferred
const { findMatchBetweenTwoArrays } = require('misc-blocks');
```

## Submodules

### misc-blocks/find-match-between-two-arrays

[![View Docs](https://shields.io/badge/-View_Docs-orange)](./lib/find-match-between-two-arrays)
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUgBAHAhgJ0QW0oyBBZqCeUMCK6kARjnoodHMgKYAuArsgHYDOkA8uQFYMAxkyLBw4IQHsuTSADMAluwAmAWURMhACwBCzAO4MG7ACoGpuAtwC8kABSIAXFQIAedizTkGyAHwANBQuVjQeXj7+AJSQNn6QAN5QClLI9gBuKJCK2eyYMQmQRclFivKOAHTKKgwAHjzl5ADaigC6MfEAtACMBSVFkIysHImQnEyaLJwuTMgsDEFonADmLs1tkAC+ANz9O8n7RUNseYXjk9MKiAA2nAxbu-uSMuOQNWhS3bEK1RpaeoZjGYLKF8Jx7E1ugEAEwBADMrSCTThAQArAEACww9q7aSyN4MD7Q75KVR-HT6JhGEzmSzUMEQqHQxGQZFogIAThxEjxnCk1wYFWuUmW9iSRXenwCyUl0PAmyiu3AwGAkG0TCY8GmKuWiiY2hY5Aq0jQwG0ik6aE05ENwDQik4Qk65GFQgA1pxgLNjHbEMpgNdFORgKSVJbNDpnYCTJ0qVJOihrJBlarALwbgGkd5NAA)

Find match between two Arrays. Accepts 2 Arrays and returns an Object with first matched item. 

```js
findMatchBetweenTwoArrays([1,2,5], [5,3,6]); // { status: true, msg: 5 }
```
<br/>

### misc-blocks/if-array-has-duplicate-values

[![View Docs](https://shields.io/badge/-View_Docs-orange)](./lib/if-array-has-duplicate-values)
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUgBAHAhgJ0QW0i5kCCzUCeUMsyApgC4CuyAdgM6QDyARgFZkDGFxw44nAPYMKkABaJ6AESrwANgEtOiCmQBqiOVTKMAvJAAUWAFy58iAgB5aVNCzLYAPpHoVkC2gHMAfAEpIut6QAN5QkEIikILspsEA2h4AJmQAHqau7l4AuqaItAQAvgEhBQDcYQBmgsgGcpSQCsUADKUNkJaY+AB0dV4UYq2NANT6AIz+oZBTDRWG0WxxWAlZWRNh05Dk1HQhLhQqVPSmbtoANJBo9J65+MuQZev35Rvzi7cKK8UnZM9PYVs0Wi7VwHI6QCqaehkJ7lB4CYSuSDJNCCUbFCTSWSKZSqDRaHQGOIAFlOAFZTgA2U5E1atYDAXYAIhB1HojOOyDOkEZl087MgRPu8MiyMEACZ0ZIZPIlCp1JptPRCQBmamnVU03x0hnBbksw7877nHlXfnKoURRGi836DHS7FyvGKlVqgCcpzFtMg9KZ+rZpghcihQuF9EEdR6gk8BkmSLIKNGpzCorFSam1vABV8-B9YgoFHgR3pngU-SoLC6QjQwDECgAtGgVCxy8A0Ap6Jw6yw5IJOABrejANxkMitxAeYCKFjABQVOtYCx1jF1xJY2WqOsANwVOnAPsAvBuAaR3IEA)

If Array has duplicate values. Accepts an Array and returns an Object with first matched item.

```js
hasDuplicateValues([3,4,3,4]); // { "status": true, "msg": 3 }
```
<br/>

### misc-blocks/execute-once

[![View Docs](https://shields.io/badge/-View_Docs-orange)](./lib/execute-once)
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?ssl=4&ssc=4&pln=1&pc=1#code/PQKhCgAIUgBAHAhgJ0QW0ig5pgdgTyhlmQFMAXAV2VwGc9DphxwAzS3AY3IEsB7XJFIAPUp0rlSAeS6kAFAEpIAbyiQANhSGjxkgCaQAvJFaJ1tUgG41ZKjRMdu-XHOwAuBktWQfvnq0g5AEIRMQlSPS81X19Q3QijSHJkSitomMhbakFsRWsMyABfdJ8smnyi60LrcE4BWnJIAU5SRLjwmRa8ljq6Rr1SND4ARkTm+UUjAD5IACIACVJ1dT4AGkgAdT5kdT0g2YVrXobIAaGAJjHZOUnDGYWllfWtnb2DmuO+TQA6Faw5bynQYjdZqM58c6rcCFQ4sYDASAAC3I5HgtDc8KwPHIiMoACNvnU0MBETwALRoRDkPH44B4lacADW9EAvBuAaR3IOAgA)

Execute once. Function must be set once then invoked as a new method. Will return `undefined` on repeated calls.

```js
const once = executeOnce();

once(() => "Hello, World!"); // "Hello, World!"
once(() => "Hello, World!"); // undefined 
```
<br/>

### misc-blocks/sequential-search

[![View Docs](https://shields.io/badge/-View_Docs-orange)](./lib/sequential-search)
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?ssl=14&ssc=3&pln=1&pc=1#code/PQKhCgAIUgBAHAhgJ0QW0gD0gZwC7ICWAdgOZQwIrqQrK3KoCeFcyApngK7LE6QB7AEYArdgGM8FYOHDiBfPLnYBHLu2J5CiADYBldinEALSAF5IACkwAuSADkuaIe3oAfSHoIlSkDwCEBAR1DYgAaBmQ7AEFGRCYAHmInF3dcbzI-SCEgkMRiAD4ASnMCyABvKEgAMwF6SxClQnNIAAYAbkhmhMiAOhCyPGNO5oBqCwBGEsrIWa7qyzoAbUIAXXMzC0xpqrnIDm5eCvTEbhw7AnUItBxSO2W1iOaAX3bdyFeqz9mDnmJj-CnLjnGq6HDsD5vT5yBT4SAAE3YaAEExa4LUGi0ugMRmMlgATAAWCJLCYADgiRIiExpqyKnXAwGAs3KkAARICzmyLsgruybqRuZAqezCELUc9ZPJFAikQJ8WjVOpNNp9IZkCZLGyABLsHQ6ARsklsvToQ2U4ns3X6w10hlMlnsznAoWXdgRNkCoU6vUGo2ioUKyUwmWI5EAZkVGJV2PVmrdJITwstPptbLtjOZxw5eCBOFdvPd-NuBb5bLFdlaHylsKUYYEhKjyqxatxlgpkCWbPEKH9bJypz78B0+XY6fpkAd2ed+bs1TBEOD0pwwXY-QEpEsM1lyImYSq9fx+9m9fDx53DfAzyKsgdxjweHg5yZpEIQy4Ql68jQwGMhAAtGgpxCB+wBoIQODiP+QgGuIADW-CALwbgDSO5AQA)

Sequential search. Find's dynamic match within Array and returns an Object response 

```js
sequentialSearch("Hello", ["Seven", 24, "Hello"]); //  { "status": true, "msg": "Hello", "i": 2 }
```
<br/>


## Coming soon 🕐

- find minimum value in array
[![Try me](https://shields.io/badge/-Try_me-informational)](https://www.typescriptlang.org/play?ssl=23&ssc=1&pln=1&pc=1#code/PQKhCgAIUqYAQA4EMBOyC2k3oJ62knlQFMAXAV1QDsBnSDAS2sYwqwDdkAbCkuYOHABjAPZ0ykAGbMAJgFlmrdgDUefSAF5IAChzJcALkgBBVHgA81dgCMSqAHwBKLQ8gBvKJG7lIwqqTUZIosbBhqvCRa2OYGANoADAC6ANxCkNKiqLrevozRCSmQ+RYxeAB0PtQA5mQAFkX5ANTaAIxOnhkZjFI6-uYkQSHK4epRbvq4cYxJLp1dGf2BwUphERrak9OpXhkAvmn7aV6klDR+AYMroapjaXtCPpKT0XEArAA0kADMXwDsXwAHF9WgkQZ9IK1gZAAEwAFhBrVaIJBMJBAE4gX8dmIJJBZCQMKJojJqApVrdInpYrgnMdcbRRD5KqJqjoCUS6eAgA)

- find greatest value in array
[![Try me](https://shields.io/badge/-Try_me-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUqYAQA4EMBOyC2k3oJ62knlQFMAXAV1QDsBnSDZADwEsMKsA3ZAGwpLjBw4AMYB7OmUgAzFtQAmAcVLIyJWmQBqvfpAC8kABQ5kuAFyQAgqjwAeahwBGJVAD4AlPteQA3lEg85JAiVKTUZAASLADmABbqWjok+tg2pgDaAAwAugDcwpAyYqhGAUEsKZm5kBW2qXgAdIHU0WSx1RUA1AYAjO5+hYUs0oYhNiThUXEJ2nzJdSa46SzZngODhWNhkTHxGrO6BovLef6FAL75F-n+pJQ0waETO9P7SfnnwoFSiynpAKwAGkgAGZgQB2YEADmBPUysKBkB6MMgACYACywno9WGw1GwgCc0PBp3Ekkg8hIGDEKVkCmUJFUMySxjSuHcNzJtDEgSaYmihkp1I5QA)

- find sum of two values
[![Try me](https://shields.io/badge/-Try_me-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUqYAQA4EMBOyC2kB2BXDARgKaoDy2RckSamO+xqAKgO4D2V8qRALrqtgDOkQfjjBwAYzZCekAGYBLbABMAyvkgBeSAAo8hEuSIAuSADkGJADT1Dzdmcv2AlNoB8Fq6n3fjbgGove197VjYXAG5wKRlBNgAbIgA6BLYAc10lVQ0MXQAmAAZbABZClyiYoA)

- convert minutes to seconds 
[![Try me](https://shields.io/badge/-Try_me-informational)](https://www.typescriptlang.org/play?ssl=13&ssc=1&pln=1&pc=1#code/PQKhCgAIUqYAQA4EMBOyC2kMEsB2ArgC4CmAzrNJPKiUQanhWSQMYD2eAJmXMOAI5MikIQDcSqIgFl8xcgBV2AZTacekALyQAFLkKkyALkgA5AhgBGkyAB9IyoqnwBzAJRaAfGYvXUeuUMPGAA2AAYAbkFOMnYAGxIAOjj2Fx1xSRlAxRU1bjIdAFY3NyihWITk1PTOCSlZAxzVIR4dAHIAZjaSspj4pJS0jPrssiVm9QKAJh7wIA)

- find perimeter of rectangle
[![Try me](https://shields.io/badge/-Try_me-informational)](https://www.typescriptlang.org/play?ssl=14&ssc=1&pln=1&pc=1#code/PQKhCgAIUqYAQA4EMBOyC2kDuBLAJgC4AWs0kSamkANgKYB2A5iWQqnYQK6oMDOkAHJcMAIzqo4wcOADGAe36FIAM1wN8ABQm4MnCQHkVAJTqzCyZvUgBeSAAo8RYgC4hI8agA0tRi1fuYhIAlLYAfA7CQaiOBCShMABMoQDUkR4S9vTM8eTJMgr88vQAdDTyTPZqGtqouvqoRqbmlkz09gBsPgDswcEA3HKKfMV0ZRVV6lo6eoSGJmYWVnT2AKxdkIkAzH2DhSOl5ZXV03Wz881LbStbACw9OwMyQA)


