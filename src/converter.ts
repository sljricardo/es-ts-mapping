import { builder } from "./builder.ts";

/**
 * Convert the elasticsearch object to typescript types|interfaces
 *
 * @param {Object} object ElasticSearch object
 * @param {string} type type|interface
 * @returns {string} Typescript object
 */
export function convertToTypescript(
  // deno-lint-ignore no-explicit-any
  object: { [key: string]: any },
  type: "type" | "interface" = "type"
) {
  let output = "";
  for (const key in object) {
    if (object[key].mappings) {
      output += `\nexport ${type} ${key}ElasticType = {\n`;
      output += builder(
        object[key].mappings.properties
      );
      output += `}\n`;
    }
  }
  return output;
}
