/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */

import { arrayOfStringsToArrayOfStringLength } from "../basics/types.ts";

export function removeNumbersBelowThreshold(
  array: number[],
  threshold: number,
): number[] | [] {
  return array.filter((number) => number >= threshold);
}


export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  return array.filter((i) => i.length >= minLength && i.length <= maxLength);
}

export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char >= 'a' && char <= 'z') {
      result += char;
    }
  }
  return result;
}
