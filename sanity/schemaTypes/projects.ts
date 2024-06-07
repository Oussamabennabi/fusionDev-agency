import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
   
    defineField({
      name: 'link',
      title: 'Live Site',
      type: 'string',
    }),
    defineField({
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image'
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}]
    })
  ]
})
