import {defineField, defineType} from 'sanity'

import { project } from './projects'
export const pages = defineType({
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    // add the array pf projects (dont use refrence )
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [project as any]
    })
  ]
})
