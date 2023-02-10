import { FaLaptopCode } from 'react-icons/fa'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: FaLaptopCode,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    }),
    defineField({
      name: 'linkToBuild',
      title: 'Link to Build',
      type: 'url',
    }),
  ],
})
