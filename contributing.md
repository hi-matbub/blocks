# Contributing

If you would like to get involed right away feel free to get in touch with me! 

## Local Setup

```sh
git clone https://github.com/hi-matbub/misc-blocks.git
cd misc-blocks && npm i
```

## New Feature Checklist

Before a new feature can be published a new feature we need to verify a few things.
To Summarize:
- Add the code in a new sub directry
- Export from main entry point
- Add test suites
- Create a minimul working demo in TS Playground
- Add a new entry point for the new module in the package.json `export` object.
- Add a readme for the new module. 


## Add feature `./lib/my-new-feature/index.ts`

Add the code in a new subdirectory with a descriptive but breif title. See examples of naming conventions in the [./lib](./lib) directory.

- [ ] source should be exported e.g `./lib/my-new-feature/index.ts`
```js
/**
 * @param
 * @returns
 */

module.exports = () => {
  // logic here
};
```

## Export from entry point `./lib/index.ts`

Export from main entry point. This is for accessibility for users who prefer to extract via `const { myAwesomeFeature } = require ('misc-blocks')`

```js
module.exports = {
  // ...
  myNewFeature: require('./my-new-feature/'),
};

```

## Create test suite `./test/my-new-feature.test.ts`

We are using Jest to unit test. Grab a copy of [the starter template here.](./examples/submodule-test-suite.md)

- [ ] Include both happy and uphappy test cases. Should have atleast 2 test cases.

## Add a demo version of the code to TS Playground
[![See me](https://shields.io/badge/-See_Me-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUgBAHAhgJ0QW0oyBBZqCeUMCK6kARjnoodHMgKYAuArsgHYDOkA8uQFYMAxkyLBw4IQHsuTSADMAluwAmAWURMhACwBCzAO4MG7ACoGpuAtwC8kABSIAXFQIAedizTkGyAHwANBQuVjQeXj7+AJSQNn6QAN5QClLI9gBuKJCK2eyYMQmQRclFivKOAHTKKgwAHjzl5ADaigC6MfEAtACMBSVFkIysHImQnEyaLJwuTMgsDEFonADmLs1tkAC+ANz9O8n7RUNseYXjk9MKiAA2nAxbu-uSMuOQNWhS3bEK1RpaeoZjGYLKF8Jx7E1ugEAEwBADMrSCTThAQArAEACww9q7aSyN4MD7Q75KVR-HT6JhGEzmSzUMEQqHQxGQZFogIAThxEjxnCk1wYFWuUmW9iSRXenwCyUl0PAmyiu3AwGAkG0TCY8GmKuWiiY2hY5Aq0jQwG0ik6aE05ENwDQik4Qk65GFQgA1pxgLNjHbEMpgNdFORgKSVJbNDpnYCTJ0qVJOihrJBlarALwbgGkd5NAA)

## Update the "exports" object within `./package.json`
- [ ] We will need to be able to import as a sub directory. This allows `const myNewFeature = require('misc-blocks')`

```json
"exports": {
  ".": "./dist/index.js",
  "./my-new-feature": "./dist/my-new-feature/index.js",
},
```


## Add a readme for the submodule 

[Start with a copy of the submodule readme template](./examples/submodule-readme.md). Click the view raw button in the upper right-hand corner.

<details>
  <summary>Whereis the view raw button?</summary>
  <a href="https://github.com/hi-matbub/markdown-guide" target="_blank">
    <img src="https://github.com/hi-matbub/markdown-guide/raw/master/how-to-use.gif?raw=true" alt="gif demo"/>
  </a>
</details>




