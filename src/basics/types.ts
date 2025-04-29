/**
 * As you may have understood from the name "TypeScript", this language is
 * no more than an extension of JavaScript, with a type system.
 *
 * The next exercises are simple one that demonstrates the type system.
 *
 * Grafikart video : https://grafikart.fr/tutoriels/typescript-syntax-1951
 *
 * RUN tests for this file : `deno test src/basics/types_test.ts`
 */

/**
 * As you can see in the function below, functions in Typescript can now have types.
 * The syntax for adding types is similar to Rust or Java. Se the example function below.
 */
export function addingStringsWithTypes(
  userFirstName: string,
  userLastName: string,
): string {
  // You can see in the function signature that we have now types for the parameters, and a return type
  return userFirstName + userLastName; // Here we concatenate the two string, this operation creates a new string
  // This new string can be directly returned because the return type of the function is string
}

/**
 * In the next function, add the required types :
 * - The user param should be a string
 * - The age param should be a number
 * - The correct return type
 */
export function addTheRequiredTypes(
) /** Return type ? */ {
  // The purpose of this function is not important, you just have to complete the types
  return user.length * age;
}

/**
 * For the next function, we want tou count the number of elements in an array.
 * The user must give and array as parameter, but the type in the array is not important
 * You can deduce the return type of the function
 */
export function countElementsInAnArrayOfUnknown(
  array: unknown[],
) /** Return type ? */ {
  // Write your code here
}

/**
 * Now, write a function that takes and array of string, and return a new array with the length
 * of each initial strings at the same place in the array. For example :
 * Given ["toto", "tim"] would give [4, 3]
 *
 * Complete the types and write the logic
 */
export function arrayOfStringsToArrayOfStringLength(array: string[]) {
  // Write your code here
}