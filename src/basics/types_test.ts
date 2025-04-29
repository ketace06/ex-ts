import { describe, it } from "@std/testing/bdd";
import { assertType, IsExact } from "@std/testing/types";
import { assertEquals } from "@std/assert";
import {
  addingStringsWithTypes,
  addTheRequiredTypes,
  arrayOfStringsToArrayOfStringLength,
  countElementsInAnArrayOfUnknown,
} from "./types.ts";

/**
 * Tests for types exercises
 */
describe("TypeScript types demo", () => {
  it("should have types correctly defined", () => {
    assertType<
      IsExact<
        typeof addingStringsWithTypes,
        (a: string, b: string) => string
      >
    >(true);
  });
  it("shoult concatenate the two given strings", () => {
    assertEquals(addingStringsWithTypes("toto", "tutu"), "tototutu");
  });
});

describe("Add required types to the function signature", () => {
  it("addTheRequiredTypes should have signature types correctly defined", () => {
    assertType<
      IsExact<
        typeof addTheRequiredTypes,
        (a: string, b: number) => number
      >
    >(true);
  });
  it("addTheRequiredTypes should compute the a length time b number", () => {
    assertEquals(addTheRequiredTypes("test", 2), 8);
  });
});

describe("Types with arrays 1", () => {
  it("countElementsInAnArrayOfAny should have the right signature", () => {
    assertType<
      IsExact<typeof countElementsInAnArrayOfUnknown, (a: unknown[]) => number>
    >(true);
  });
  it("countElementsInAnArrayOfAny should count elements in the array", () => {
    assertEquals(countElementsInAnArrayOfUnknown([1, 2, 3, 4, 5]), 5);
  });
});

describe("Types with arrays 2", () => {
  it("arrayOfStringsToArrayOfStringLength should have the right signature", () => {
    assertType<
      IsExact<
        typeof arrayOfStringsToArrayOfStringLength,
        (a: string[]) => number[]
      >
    >(true);
  });
  it("arrayOfStringsToArrayOfStringLength should return array with length of each initial strings", () => {
    assertEquals(
      arrayOfStringsToArrayOfStringLength(["toto", "tutu", "a", "ab"]),
      [4, 4, 1, 2],
    );
  });
});