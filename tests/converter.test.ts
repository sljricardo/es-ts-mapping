import { assertEquals } from "https://deno.land/std@0.206.0/assert/mod.ts";
import { convertToTypescript } from "../src/converter.ts";

Deno.test("builder", () => {
  const input = {
    results: {
      mappings: {
        properties: {
          id: {
            type: "text",
          },
          field: {
            type: "integer",
          },
        },
      },
    },
    index: {
      mappings: {
        properties: {
          name: {
            type: "text",
          },
          age: {
            type: "integer",
          },
        },
      },
    },
  };

  const output = `
export type resultsElasticType = {
  id?: string | string[] | null
  field?: number | number[] | string | string[] | null
}

export type indexElasticType = {
  name?: string | string[] | null
  age?: number | number[] | string | string[] | null
}
`;

  assertEquals(
    convertToTypescript(input),
    output
  );
});
