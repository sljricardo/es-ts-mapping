/**
 * Converts ElasticSearch types to Typescript types
 *
 * @param {string} value ElasticSearch type
 * @returns {string} Typescript type
 */
export function types(value: string) {
  const elasticSearchTypesToTypescript: Record<
    string,
    string
  > = {
    keyword: "string | string[] | null",
    text: "string | string[] | null",
    ip: "string | string[] | null",
    version: "string | string[] | null",
    float:
      "number | number[] | string | string[] | null",
    integer:
      "number | number[] | string | string[] | null",
    double:
      "number | number[] | string | string[] | null",
    long: "number | number[] | string | string[] | null",
    short:
      "number | number[] | string | string[] | null",
    date: "string | string[] | number | number[] | null",
    boolean: "boolean | boolean[] | null",
    nested: "any | any[] | null",
    object: "any | any[] | null",
    geo_point: "any | any[] | null",
    geo_shape: "any | any[] | null",
    completion: "any | any[] | null",
  };

  return (
    elasticSearchTypesToTypescript[value] ||
    "any | any[]"
  );
}
