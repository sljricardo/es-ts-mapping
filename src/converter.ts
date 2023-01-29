function typeAs(value: string) {
    const toStringDataTypes = ["keyword", "text"]
    const toNumberDataTypes = ["float", "integer", "double", "long"]
    const toDateDataTypes = ["date"]

    if (toStringDataTypes.includes(value)) return "string | string[]"
    if (toNumberDataTypes.includes(value)) return "number | number[]"
    if (toDateDataTypes.includes(value)) return "string | string[] | number | number[]"
    return value
}

export function addTypeToObject(object: { [key: string]: any }, count = 1) {
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