import * as T from "https://deno.land/std/testing/asserts.ts";

export const ID = (v: boolean): boolean => {
  return v;
};

console.log(ID(true));

Deno.test("ID", () => {
  T.assertEquals(ID(true), true);
  T.assertEquals(ID(false), false);
});
