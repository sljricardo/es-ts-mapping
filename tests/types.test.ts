import { assertEquals } from "https://deno.land/std@0.206.0/assert/mod.ts";
import { types } from "../src/types.ts";

Deno.test("types", () => {
  assertEquals(
    types("keyword"),
    "string | string[] | null"
  );
  assertEquals(
    types("text"),
    "string | string[] | null"
  );
  assertEquals(
    types("ip"),
    "string | string[] | null"
  );
  assertEquals(
    types("version"),
    "string | string[] | null"
  );
  assertEquals(
    types("float"),
    "number | number[] | string | string[] | null"
  );
  assertEquals(
    types("integer"),
    "number | number[] | string | string[] | null"
  );
  assertEquals(
    types("double"),
    "number | number[] | string | string[] | null"
  );
  assertEquals(
    types("long"),
    "number | number[] | string | string[] | null"
  );
  assertEquals(
    types("short"),
    "number | number[] | string | string[] | null"
  );
  assertEquals(
    types("date"),
    "string | string[] | number | number[] | null"
  );
  assertEquals(
    types("boolean"),
    "boolean | boolean[] | null"
  );
  assertEquals(
    types("nested"),
    "any | any[] | null"
  );
  assertEquals(
    types("object"),
    "any | any[] | null"
  );
  assertEquals(
    types("geo_point"),
    "any | any[] | null"
  );
  assertEquals(
    types("geo_shape"),
    "any | any[] | null"
  );
  assertEquals(
    types("completion"),
    "any | any[] | null"
  );
  assertEquals(types("random"), "any | any[]");
});
