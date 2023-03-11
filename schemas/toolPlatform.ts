import { BsTools } from 'react-icons/bs'
import { ApiIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'toolsPlatform',
  title: 'Tools & Platforms',
  type: 'document',
  icon: BsTools,
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
  ],
})
