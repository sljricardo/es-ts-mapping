import { parse } from "https://deno.land/std@0.206.0/flags/mod.ts";
import { convertToTypescript } from "./src/converter.ts";

const { args } = Deno;
const parsedArgs = parse(args);

const input = parsedArgs.i || parsedArgs.input;
const output = parsedArgs.o || parsedArgs.output;
const string = parsedArgs.s || parsedArgs.string;
const type = parsedArgs.t || parsedArgs.type;

const helpMessage = `
Usage:
$ ./es2ts [[-s "stringify_version_of_mapping"] | [-i <input-file>]] [-o <output-file>] [-t <type|interface>]
`;

if (string) {
  console.log(
    convertToTypescript(
      JSON.parse(string),
      type || "type"
    )
  );
  Deno.exit();
}

if (!input) {
  console.log(helpMessage);
  Deno.exit();
}

const data = await Deno.readTextFile(input);

if (!output) {
  console.log(
    convertToTypescript(
      JSON.parse(data),
      type || "type"
    )
  );
  Deno.exit();
}

const encoder = new TextEncoder();

const encodedData = encoder.encode(
  convertToTypescript(
    JSON.parse(data),
    type || "type"
  )
);

await Deno.writeFile(output, encodedData);

console.log(
  `\x1b[32m%s\x1b[0m`,
  `File saved at ${output}`
);

Deno.exit();
