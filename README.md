# ES-TS-Mapper

Convert Elasticsearch index Mapping to Typescript types.

## Installation

Clone the project

```bash
npm install 
```

## Usage

To get the mappings from all indexes in Elasticsearch run the query

```bash
GET /_all/_mapping
```

After the command start, we can use a stringify version of Elasticsearch output mapping object

```bash
npm start "{\"reviews\":{\"mappings\":{\"properties\":{\"author\":{\"properties\":{\"email\":{\"type\":\"keyword\"},\"first_name\":{\"type\":\"text\"},\"last_name\":{\"type\":\"text\"}}},\"content\":{\"type\":\"text\"},\"created_at\":{\"type\":\"date\"},\"date\":{\"type\":\"long\"},\"product_id\":{\"type\":\"integer\"},\"rating\":{\"type\":\"float\"},\"reviews\":{\"type\":\"nested\",\"properties\":{\"place\":{\"type\":\"text\",\"fields\":{\"keyword\":{\"type\":\"keyword\",\"ignore_above\":256}}}}}}}}}" 
```

**Output**

```typescript
export type reviewsElasticType = {
 author?: {
  email?: string | string[] | null
  first_name?: string | string[] | null
  last_name?: string | string[] | null
 },
 content?: string | string[] | null
 created_at?: string | string[] | number | number[] | null
 date?: number | number[] | string | string[] | null
 product_id?: number | number[] | string | string[] | null
 rating?: number | number[] | string | string[] | null
 reviews?: {
  place?: string | string[] | null
 },
}
```

### TODO

- [x] Add Tests
- [x] Accept the full mapping output from Elasticsearch
- [ ] Add multiple output formats (console, file)
- [ ] Add direct communication with Elasticsearch to get the mapping
- [ ] Add read mapping from a file
- [ ] Add the inverse feature, from typescript to Elasticsearch
