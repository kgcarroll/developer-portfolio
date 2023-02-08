import { MdWorkOutline } from 'react-icons/md'
// import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: MdWorkOutline,
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'companyIcon',
      title: 'Company Icon',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'currentlyEmployed',
      title: 'Currently Employed?',
      type: 'boolean',
    }),
    //   defineField({
    //     name: 'technologies',
    //     title: 'Skills',
    //     type: 'array',
    //     of: [{type: 'reference', to: {type: 'skill'}}],
    // }),
    //   defineField({
    //     name: 'toolPlatform',
    //     title: 'Tools & Platforms',
    //     type: 'array',
    //     of: [{type: 'reference', to: {type: 'toolsPlatform'}}],
    // }),
    defineField({
      name: 'points',
      title: 'Data Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    //   defineField({
    //     name: 'professionalReference',
    //     title: 'Professional Reference',
    //     type: 'array',
    //     of: [{type: 'reference', to: {type: 'professionalReference'}}],
    // }),
  ],
})
