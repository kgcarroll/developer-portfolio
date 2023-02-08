import { TfiCommentsSmiley } from 'react-icons/tfi'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'professionalReference',
  title: 'Professional References',
  icon: TfiCommentsSmiley,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote or Endorsement',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
