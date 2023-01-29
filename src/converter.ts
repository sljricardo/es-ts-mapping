function typeAs(value: string) {
    const toStringDataTypes = ["keyword", "text", "ip", "version"]
    const toNumberDataTypes = ["float", "integer", "double", "long", "short"]
    const toDateDataTypes = ["date"]
    const toBoleanDataTypes = ["boolean"]

    if (toStringDataTypes.includes(value)) return "string | string[] | null"
    if (toNumberDataTypes.includes(value)) return "number | number[] | string | string[] | null"
    if (toDateDataTypes.includes(value)) return "string | string[] | number | number[] | null"
    if (toBoleanDataTypes.includes(value)) return "boolean | boolean[] | null"
    return "any | any[]"
}

function innerMapping(object: { [key: string]: any }, count = 1) {

    let internal = ""

    Object.keys(object).forEach(key => {
        const identation = [...Array(count)].map(k => " ").join("")
        if (object[key]?.properties) {
            internal += `${identation}${key}?: {\n${innerMapping(object[key]?.properties, count + 1)}${identation}},\n`
        } else {
            internal += `${identation}${key}?: ${typeAs(object[key]?.type)}\n`
        }
    });

    return internal
}

export function convertToTypescript(object: { [key: string]: any }, count = 1) {
    let internal = ""

    Object.keys(object).forEach(key => {
        internal += count === 1 && `\nexport type ${key}ElasticType = {\n`

        if (Object.keys(object[key])[0] === "mappings") {
            internal += innerMapping(object[key].mappings.properties)
        }

        internal += count === 1 && `}\n`
    });

    return internal
}