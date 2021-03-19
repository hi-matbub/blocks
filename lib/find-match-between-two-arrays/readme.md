# misc-blocks/find-match-between-two-arrays
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUgBAHAhgJ0QW0oyBBZqCeUMCK6kARjnoodHMgKYAuArsgHYDOkA8uQFYMAxkyLBw4IQHsuTSADMAluwAmAWURMhACwBCzAO4MG7ACoGpuAtwC8kABSIAXFQIAedizTkGyAHwANBQuVjQeXj7+AJSQNn6QAN5QClLI9gBuKJCK2eyYMQmQRclFivKOAHTKKgwAHjzl5ADaigC6MfEAtACMBSVFkIysHImQnEyaLJwuTMgsDEFonADmLs1tkAC+ANz9O8n7RUNseYXjk9MKiAA2nAxbu-uSMuOQNWhS3bEK1RpaeoZjGYLKF8Jx7E1ugEAEwBADMrSCTThAQArAEACww9q7aSyN4MD7Q75KVR-HT6JhGEzmSzUMEQqHQxGQZFogIAThxEjxnCk1wYFWuUmW9iSRXenwCyUl0PAmyiu3AwGAkG0TCY8GmKuWiiY2hY5Aq0jQwG0ik6aE05ENwDQik4Qk65GFQgA1pxgLNjHbEMpgNdFORgKSVJbNDpnYCTJ0qVJOihrJBlarALwbgGkd5NAA)
[![Try me in the TS Playground](https://shields.io/badge/-View_Test_suite-yellow)](../../test/find-match-between-two-arrays.test.ts)


Function accepts 2 Arrays as arguments and returns a Object response for both matches and no-matches. 

```ts
const findMatchBetweenTwoArrays = (a: Array<number>, b: Array<number>) => {
  for(var i in a) {   
    if(a.indexOf(b[i]) > -1) {
      return { status: true, msg: b[i] };
    };
  };
  return { status: false };
};
```


### Example use case 
```ts
import findMatchBetweenTwoArrays from = 'misc-blocks/find-match-between-two-arrays'

findMatchBetweenTwoArrays([1,2,5], [5,3,6]); // { status: true, msg: 5 }
findMatchBetweenTwoArrays([0,0,0], [1,1,1]); // { status: false }
```