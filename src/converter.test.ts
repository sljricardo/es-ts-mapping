import { expect, test } from 'vitest'
import { convertToTypescript } from './converter';

test('expect to get typescript object type', () => {
  const input = JSON.parse("{\"reviews\":{\"mappings\":{\"properties\":{\"author\":{\"properties\":{\"email\":{\"type\":\"keyword\"},\"first_name\":{\"type\":\"text\"},\"last_name\":{\"type\":\"text\"}}},\"content\":{\"type\":\"text\"},\"created_at\":{\"type\":\"date\"},\"date\":{\"type\":\"long\"},\"product_id\":{\"type\":\"integer\"},\"rating\":{\"type\":\"float\"},\"reviews\":{\"type\":\"nested\",\"properties\":{\"place\":{\"type\":\"text\",\"fields\":{\"keyword\":{\"type\":\"keyword\",\"ignore_above\":256}}}}}}}},\"products\":{\"mappings\":{\"properties\":{\"created\":{\"type\":\"date\",\"format\":\"yyyy/MM/ddHH:mm:ss||yyyy/MM/dd||epoch_millis\"},\"description\":{\"type\":\"text\",\"fields\":{\"keyword\":{\"type\":\"keyword\",\"ignore_above\":256}}},\"in_stock\":{\"type\":\"long\"},\"is_active\":{\"type\":\"boolean\"},\"name\":{\"type\":\"text\",\"fields\":{\"keyword\":{\"type\":\"keyword\",\"ignore_above\":256}}},\"price\":{\"type\":\"long\"},\"sold\":{\"type\":\"long\"},\"tags\":{\"type\":\"text\",\"fields\":{\"keyword\":{\"type\":\"keyword\",\"ignore_above\":256}}}}}}}")

  expect(convertToTypescript(input)).toMatchSnapshot()
});