import { BsTools } from 'react-icons/bs'
import { ApiIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'toolsPlatform',
  title: 'Tools & Platforms',
  type: 'document',
  icon: BsTools,
  fields: [
    // {
    //   name: 'name',
    //   title: 'Tool or Platform',
    //   type: 'array',
    //   of: [
    // {
    //   name: 'itemDetails',
    //   title: 'Item Details',
    //   type: 'object',
    //   fields: [
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
    //   ],
    // },
    //   ],
    // },
  ],
  // preview: {
  //   prepare(selection) {
  //     return {title: 'Tools & Platforms'}
  //   },
  // },
})
