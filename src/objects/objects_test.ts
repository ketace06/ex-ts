import { describe, it } from "@std/testing/bdd";
import { assertType, IsExact } from "@std/testing/types";
import { returnObjects, User1, User2, YourDetailedUser } from "./objects.ts";
import { assertEquals } from "@std/assert/equals";

describe("retunrnObjects", () => {
  it("should return two user of each types", () => {
    assertType<IsExact<typeof returnObjects, () => [User1, User2]>>(true);
  });
  it("should return real users", () => {
    assertEquals(returnObjects(), [
      {
        first_name: "toto",
        last_name: "tutu",
      },
      {
        first_name: "",
        last_name: "",
      },
    ]);
  });
});

describe("YourDetailedUser", () => {
  it("should have the required keys", () => {
    assertType<
      IsExact<YourDetailedUser, {
        user_name: string;
        birth_date: Date;
        emails: string[];
        address: {
          street: string;
          city: string;
          zip: number;
        };
      }>
    >(true);
  });
});