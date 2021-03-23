# misc-blocks

![Styleguide](https://img.shields.io/badge/Style%20Guide-Airbnb-%23FB5057)
![Tested with Jest](https://img.shields.io/badge/Tested%20with-Jest-%23BF1524)
![License](https://img.shields.io/badge/License-MIT-orange)

<p align="right"><img src="./public/blocks-154x154.png" /></p>

Blocks of code written in TypeScript, compiled into pure functional JavaScript modules 💙

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
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUgBAHAhgJ0QW0oyBBZqCeUMCK6kARjnoodHMgKYAuArsgHYDOkA8uQFYMAxkyLBw4IQHsuTSADMAluwAmAWURMhACwBCzAO4MG7ACoGpuAtwC8kABSIAXFQIAedizTkGyAHwANBQuVjQeXj7+AJSQNn6QAN5QClLI9gBuKJCK2eyYMQmQRclFivKOAHTKKgwAHjzl5ADaigC6MfEAtACMBSVFkIysHImQnEyaLJwuTMgsDEFonADmLs1tkAC+ANz9O8n7RUNseYXjk9MKiAA2nAxbu-uSMuOQNWhS3bEK1RpaeoZjGYLKF8Jx7E1ugEAEwBADMrSCTThAQArAEACww9q7aSyN4MD7Q75KVR-HT6JhGEzmSzUMEQqHQxGQZFogIAThxEjxnCk1wYFWuUmW9iSRXenwCyUl0PAmyiu3AwGAkG0TCY8GmKuWiiY2hY5Aq0jQwG0ik6aE05ENwDQik4Qk65GFQgA1txALwbgGkdyDgIA)

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

### misc-blocks/qty-of-matches

[![View Docs](https://shields.io/badge/-View_Docs-orange)](./lib/qty-of-matches)
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUgBAHAhgJ0QW0gR0gOQK5oBGApspAD6QDKALsgJYB2A5hZAEID2nANsYoygwEKdJBRkAgslQBPADyMCJMpQDOdJq0qFufAQD4hcZMRp5kjNZADyhAFbEAxjSHBw4J5ys0sNWTYAZgCyiDROABbE1gC8kAAUmABcuMqkbLQMLGxcvPyMkAA0EinScoppqpAaWdqQunmGAJSQMQaQAN5QkHy+mP6tkAAMANzdgZzI8b2Q9LMFEi30gQnYMeviMgDa9AC6Lf2ykADUcQCMY92m5pZ+RwD8ndU0YXhqKXR4xIV3kAC+kBSHWer3ekECiB4amI-zGf0uXh8kAAJsQ0JwzoNDkFQuEomp4gBmH5bM6FABMhWJABZCrTiYT9iNIMBgE8AEQaUHsj7IL4-dmHHmQQn-TzeDQotGcclY-w4sKRaLxT7fSBbVWFCFQ76a1VMlls4Gcl7mNTCzWQQX+YWiv7ipGo9GiuLYkKK-HxdkAKU4EQKABFOMR2SSfX7A8HQ5TtdDCuH-ZAgyGDayOVyzRa+WrrbJhbL7YjJU7ONS5QF3XjleyAMKcQKBYghsMB5yIQLRrWQ6Gpo1WjNvYWxmH2h1qPIAOh4nGY8S6kCl6LJ3RLlJX0uJ6-RtPAfyaHjTERoNHg71ZzHoNAieEIE68aGAEXoAFo0GFCDfgGh6GonM-CNOTgANbWEAA)

Accepts a Variable to search and Array to query through. Returns and Object containing number of repeated occurances.

```js
qtyOfMatches(3, [1,2,3,4,4,3,3]); // { "status": true, "qty": 3 }
```
<br/>

### misc-blocks/find-minimum-value

[![View Docs](https://shields.io/badge/-View_Docs-orange)](./lib/find-minimum-value)
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUqYAQA4EMBOyC2k2sgQVXQE9ZpJ5UBTAFwFdUA7AZ0gDlaMAjS1OYccAGMA9s2qQAZgEsGAEwCyMqRg4A1ZABtalSAF5IAChwAufIWREAPAw7dUAPgCUe+5ADeUSBpqQAHnuxCAG0ABgBdAG5PCWFcAy8fKUgZQNRnKQkDf1ccIKkw5399XPyoyEgqOkY-KIBfKKFRJnFZSgxhAEYA6TlFBmU1TW0DIIBWABoOgCZJgE5xgA4AdgKokTFIVvap7pkFJRUMdS1KEYAWcYBmcanrqdWBdaZhbwA6DWEAcwMPcq3O8aef5TcC1RxRIA)

Accepts an Array of Numbers, returns the least greatest number.

```js
findMinimumValue([4,3,23,2]); // 4
```
<br/>

### misc-blocks/find-maximum-value

[![View Docs](https://shields.io/badge/-View_Docs-orange)](./lib/find-maximum-value)
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUqYAQA4EMBOyC2k2sgQVXQE9ZpJ5UBTAFwFdUA7AZ0gDlaMAjS1OYccAGMA9s2qQAZgEsGAEwCyyAB5SMHAGrIANrUqQAvJAAUOAFz5CyIgB4GHbqgB8ASgOPIAbyiQtNSEoNsQgBtAAYAXQBubwlhXCMfPylIGSDUVykJIwD3HGCpcNcAwzyC6MhIKjpGf2iAX2ihUSZxWUoMYQBGQOk5RRU1DE0dSiNggFYAGk6AJmmATkmADgB2QsjIYGBIVaaxSDaOmZ6ZBWVVDW1dMYAWSYBmSZnHmfXN7eeBEWZhXwA6LTCADmRi8FUOXUm3ghM3AdWc0SAA)

Accepts an Array of Numbers, returns the greatest number.

```js
findMaximumValue([4,3,23,2]); // 23
```
<br/>
