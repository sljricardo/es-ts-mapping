import { convertToTypescript } from "./converter.js"


try {
  process.argv.reverse()

  const map = JSON.parse(process.argv[0])

  console.log(convertToTypescript(map))
} catch (err) {
  console.log((err as Error)?.message)
}