import { GiSkills } from 'react-icons/gi'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  icon: GiSkills,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the skill..',
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress 1% - 100%',
      validation: (Rule) => Rule.min(0).max(100),
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
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'taxonomy' } }],
    }),
  ],
})
