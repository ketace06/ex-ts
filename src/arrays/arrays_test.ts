import { describe, it } from "@std/testing/bdd";
import {
  filterStringByLength,
  getOnlyTheLowercaseLettersOfTheString,
  removeNumbersBelowThreshold,
} from "./arrays.ts";
import { assertEquals } from "@std/assert/equals";
import { assertType, IsExact } from "@std/testing/types";

describe("removeNumbersBelowThreshold", () => {
  it("should have correct types", () => {
    assertType<
      IsExact<
        typeof removeNumbersBelowThreshold,
        (a: number[], b: number) => number[] | []
      >
    >(true);
  });
  it("should remove numbers below 2", () => {
    assertEquals(removeNumbersBelowThreshold([4, 1, 2], 2), [4, 2]);
  });

  it("should remove numbers below 10", () => {
    assertEquals(removeNumbersBelowThreshold([4, 12, 15, 5], 10), [12, 15]);
  });
});

describe("filterStringByLength", () => {
  it("should have correct types", () => {
    assertType<
      IsExact<
        typeof filterStringByLength,
        (a: string[], b: number, c: number) => string[] | []
      >
    >(true);
  });
  it("should remove numbers below 2", () => {
    assertEquals(filterStringByLength(["to", "toto", "t", "tit"], 2, 3), [
      "to",
      "tit",
    ]);
  });
});

describe("getOnlyTheLowercaseLettersOfTheString", () => {
  it("should have correct types", () => {
    assertType<
      IsExact<
        typeof getOnlyTheLowercaseLettersOfTheString,
        (a: string) => string
      >
    >(true);
  });
  it("should remove numbers below 2", () => {
    assertEquals(getOnlyTheLowercaseLettersOfTheString("Bonjour"), "onjour");
  });

  it("should remove numbers below 10", () => {
    assertEquals(getOnlyTheLowercaseLettersOfTheString("HeLlO"), "el");
  });
});