import { addTypeToObject } from "./converter.js"


try {
  process.argv.reverse()

  const map = JSON.parse(process.argv[0])
  const initial = `export type NameType = {${addTypeToObject(map)}}`;

  console.log(initial)
} catch (err) {
  console.log((err as Error)?.message)
}