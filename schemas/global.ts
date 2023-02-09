import { RiUserSettingsLine } from 'react-icons/ri'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'global',
  title: 'Global Settings',
  type: 'document',
  icon: RiUserSettingsLine,
  preview: {
    prepare(selection) {
      return { title: 'Global Settings' }
    },
  },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    // Personal Information
    defineField({
      type: 'object',
      name: 'personalInformation',
      options: {
        collapsible: true,
      },
      fieldsets: [
        { name: 'personalInformation', title: 'Personal Information' },
      ],
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
        }),
        defineField({
          name: 'bioTitle',
          title: 'Bio Headline',
          type: 'string',
        }),
        defineField({
          name: 'bio',
          title: 'Bio',
          type: 'text',
        }),
        defineField({
          name: 'profilePic',
          title: 'Profile Picture',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // Contact Information
    defineField({
      type: 'object',
      name: 'contactInformation',
      options: {
        collapsible: true,
      },
      fieldsets: [{ name: 'contactInformation', title: 'Contact Information' }],
      fields: [
        defineField({
          name: 'phoneNumber',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'string',
        }),
      ],
    }),

    // Homepage Content
    defineField({
      type: 'object',
      name: 'homepageContent',
      options: {
        collapsible: true,
      },
      fieldsets: [{ name: 'homepageContent', title: 'Homepage Content' }],
      fields: [
        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // Education
    defineField({
      type: 'object',
      name: 'education',
      options: {
        collapsible: true,
      },
      fieldsets: [{ name: 'education', title: 'Education Details' }],
      fields: [
        defineField({
          name: 'college',
          title: 'College',
          type: 'string',
        }),
        defineField({
          name: 'collegeLocation',
          title: 'College Location',
          type: 'string',
        }),
        defineField({
          name: 'dateStarted',
          title: 'Date Enrolled',
          type: 'date',
        }),
        defineField({
          name: 'dateEnded',
          title: 'Date Graduated',
          type: 'date',
        }),
        defineField({
          name: 'degree',
          title: 'Degree',
          type: 'string',
        }),
      ],
    }),

    // Social Media
    defineField({
      type: 'object',
      name: 'socialMedia',
      options: {
        collapsible: true,
      },
      fieldsets: [{ name: 'socialMedia', title: 'Social Media Details' }],
      fields: [
        defineField({
          name: 'social',
          title: 'Accounts',
          type: 'array',
          of: [
            defineField({
              name: 'account',
              title: 'Social',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Social Account',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'Url',
                  type: 'url',
                  description: 'Social Media link...',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
