import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'taxonomy',
  title: 'Taxonomy Settings',
  type: 'document',
  preview: {
    select: {
      title: 'categoryName',
    },
  },
  fields: [
    defineField({
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
  ],
})
