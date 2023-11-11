import { assertEquals } from "https://deno.land/std@0.206.0/assert/mod.ts";
import { builder } from "../src/builder.ts";

Deno.test("builder", () => {
  assertEquals(
    builder({
      name: { type: "text" },
      age: { type: "integer" },
      address: {
        properties: {
          street: { type: "text" },
          city: { type: "text" },
          state: { type: "text" },
          zip: { type: "integer" },
        },
      },
    }),
    `  name?: string | string[] | null
  age?: number | number[] | string | string[] | null
  address?: {
    street?: string | string[] | null
    city?: string | string[] | null
    state?: string | string[] | null
    zip?: number | number[] | string | string[] | null
  },
`
  );
});
