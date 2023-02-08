import { GiSkills } from 'react-icons/gi'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  icon: GiSkills,
  fields: [
    // {
    //   name: 'name',
    //   title: 'Skill',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'skillDetails',
    //       title: 'Skill Details',
    //       type: 'object',
    //       fields: [
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
    // ],
    //       },
    //     ],
    //   },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //   },
  // },
})
