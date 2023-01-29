# ES-TS-Mapper

Convert Elasticsearch index Mapping to Typescript types.

## Installation

Clone the project

```bash
npm install 
```

## Usage

After the command start, we can use a stringify version of Elasticsearch mapping object

```bash
npm start "{\"author\":{\"properties\":{\"name\":{\"type\":\"text\"}}},\"content\":{\"type\":\"text\"},\"created_at\":{\"type\":\"date\"},\"product_id\":{\"type\":\"integer\"},\"rating\":{\"type\":\"float\"}}" 
```

**Output**

```typescript
export type NameType = {
  author: {
    name: string | string[]
  },
  content: string | string[]
  created_at: string | string[] | number | number[]
  product_id: number | number[]
  rating: number | number[]
}
```

### TODO

- [ ] Add Tests
- [ ] Add multiple output formats (console, file)
- [ ] Add direct communication with Elasticsearch to get the mapping
- [ ] Allow accept the full mapping output from Elasticsearch
- [ ] Add read mapping from a file
- [ ] Add the inverse feature, from typescript to Elasticsearch
