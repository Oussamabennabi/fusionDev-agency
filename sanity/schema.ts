import { type SchemaTypeDefinition } from 'sanity'
import { pages } from './schemaTypes/pages'
import { category } from './schemaTypes/categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pages,  category],
}
