import { types } from "./types.ts";

/**
 * Build the typescript object from the elasticsearch object
 *
 * @param {Object} object ElasticSearch object
 * @param {number} count Indentation counter
 * @returns {string} Typescript object
 */
export function builder(
  // deno-lint-ignore no-explicit-any
  object: { [key: string]: any },
  count = 1
) {
  let internal = "";
  for (const key in object) {
    const indentation = " ".repeat(count * 2);
    if (object[key]?.properties) {
      internal += `${indentation}${key}?: {\n${builder(
        object[key]?.properties,
        count + 1
      )}${indentation}},\n`;
    } else {
      internal += `${indentation}${key}?: ${types(
        object[key]?.type
      )}\n`;
    }
  }

  return internal;
}
