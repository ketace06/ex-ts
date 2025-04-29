# TypeScript exercises

**v2.2.1 :** [Read changelog](./CHANGELOG.md) <!-- x-release-please-version -->

This repo contains some basic exercises to discover TypeScript.
This allows you to understand the differences between JavaScript and TypeScript,
and understand how you can use types to allow better coding experience.

## Setup and installation

This repository use the [Deno](https://deno.com/) runtime, don't forget to install it first on your
system, [instructions here](https://docs.deno.com/runtime/getting_started/installation/).
We recommend you to
install [corresponding deno extension](https://docs.deno.com/runtime/getting_started/setup_your_environment/) in your
favorite editor.

Then, you can set up this repo on your computer :

```shell
# Clone the repository
git clone git@github.com:jobtrek/ex-ts.git

# Move into the exercises repository
cd ex-ts
```

## Complete the exercises

You are now ready to complete the exercises :

1. [Basic type exercises](src/basics/types.ts)
2. [Arrays](src/arrays/arrays.ts)
3. [Objects](src/objects/objects.ts)

### Test your code

```shell
# You can run all the tests with (this will check types, then run tests)
deno test src/
# You can run a specific test suite with the file name :
deno test src/basics/types_test.ts

# If you want to check only types, you can use the check subcommand
deno check src/
# Or for specific file
deno check src/basics/types_test.ts
```
