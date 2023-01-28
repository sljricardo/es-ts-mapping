
const mapping = {
  "author": {
    "properties": {
      "email": {
        "type": "keyword"
      },
      "first_name": {
        "type": "text"
      },
      "last_name": {
        "type": "text"
      },
      "articles": {
        "properties": {
          "id": {
            "type": "keyword"
          },
          "name": {
            "type": "keyword"
          }
        }
      }
    }
  },
  "content": {
    "type": "text"
  },
  "created_at": {
    "type": "date"
  },
  "product_id": {
    "type": "integer"
  },
  "rating": {
    "type": "float"
  }
}



function typeAs(value: string) {
  const toStringDataTypes = ["keyword", "text"]
  const toNumberDataTypes = ["float", "integer", "double", "long"]
  const toDateDataTypes = ["date"]

  if (toStringDataTypes.includes(value)) return "string | string[]"
  if (toNumberDataTypes.includes(value)) return "number | number[]"
  if (toDateDataTypes.includes(value)) return "string | string[] | number | number[]"
  return value
}

function addTypeToObject(object: { [key: string]: any }, count = 1) {
  let internal = "\n"
  Object.keys(object).forEach(key => {
    const identation = [...Array(count)].map(k => "  ").join("")
    if (object[key]?.type === undefined) {
      internal += `${identation}${key}: {${addTypeToObject(object[key]?.properties, count + 1)}${identation}},\n`
    } else {
      internal += `${identation}${key}: ${typeAs(object[key]?.type)}\n`
    }
  });

  return internal
}


process.argv.reverse()


try {
  const map = JSON.parse(process.argv[0])
  const initial = `export type NameType = {${addTypeToObject(map)}}`;
  console.log(initial)
} catch (err) {
  throw (err as Error)?.message
}