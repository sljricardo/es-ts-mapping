import { expect, test } from 'vitest'
import { addTypeToObject } from './converter';

test('expect to get typescript object type', () => {
  const input = JSON.parse("{\"author\":{\"properties\":{\"name\":{\"type\":\"text\"}}},\"content\":{\"type\":\"text\"},\"created_at\":{\"type\":\"date\"},\"product_id\":{\"type\":\"integer\"},\"rating\":{\"type\":\"float\"}}")

  expect(`export type NameType = {${addTypeToObject(input)}}`).toMatchSnapshot()
});