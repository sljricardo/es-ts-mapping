# es2ts

Convert Elasticsearch index Mapping to Typescript types.
If you are using Elasticsearch with Typescript, you can use this tool to convert the Elasticsearch index mapping to Typescript types.

## Usage

To get the mappings from all indexes in Elasticsearch run the query

```bash
GET /_all/_mapping
```

After the command start, we can use a stringify version of Elasticsearch output mapping object

```bash
deno run es2ts.ts -s "{\"reviews\":{\"mappings\":{\"properties\":{\"author\":{\"properties\":{\"email\":{\"type\":\"keyword\"},\"first_name\":{\"type\":\"text\"},\"last_name\":{\"type\":\"text\"}}},\"content\":{\"type\":\"text\"},\"created_at\":{\"type\":\"date\"},\"date\":{\"type\":\"long\"},\"product_id\":{\"type\":\"integer\"},\"rating\":{\"type\":\"float\"},\"reviews\":{\"type\":\"nested\",\"properties\":{\"place\":{\"type\":\"text\",\"fields\":{\"keyword\":{\"type\":\"keyword\",\"ignore_above\":256}}}}}}}}}" 
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