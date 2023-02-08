import { RiUserSettingsLine } from 'react-icons/ri'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'global',
  title: 'Global Settings',
  type: 'document',
  icon: RiUserSettingsLine,
  preview: { select: { title: 'title' } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
