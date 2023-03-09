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
      name: 'summary',
      title: 'Summary',
      description: "This appears on the homepage's project section.",
      type: 'text',
    }),
    // Project Details
    defineField({
      type: 'object',
      name: 'projectDetails',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fieldsets: [{ name: 'projectDetails', title: 'Project Details' }],
      fields: [
        defineField({
          title: 'Content',
          name: 'content',
          type: 'array',
          description: 'This is the main copy, used in the project template.',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'technologies',
          title: 'Technologies Used',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'skill' } }],
        }),
        defineField({
          name: 'toolPlatforms',
          title: 'Tools or Platforms Used',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'toolsPlatform' } }],
        }),
        defineField({
          name: 'linkToBuild',
          title: 'Link to Build',
          type: 'url',
        }),
      ],
    }),
    // Project Images
    defineField({
      type: 'object',
      name: 'projectImages',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fieldsets: [{ name: 'projectImages', title: 'Images' }],
      fields: [
        // Case Study Gallery Images
        defineField({
          type: 'object',
          name: 'caseStudyGalleryImages',
          description: 'These images are project case study images.',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fieldsets: [
            { name: 'caseStudyGallery', title: 'Project Case Study Images' },
          ],
          fields: [
            defineField({
              name: 'caseStudyImages',
              title: 'Project Case Study Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
            }),
          ],
        }),
        // Responsive Display Images
        defineField({
          type: 'object',
          name: 'responsiveDisplayImages',
          description:
            'These images are meant to show what the project looks like on different devices. Note: Only upload an image with the appropriate aspect ratio.  Sanity will apply the style for device.',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fieldsets: [
            {
              name: 'responsiveDisplayImages',
              title: 'Responsive Display Images',
            },
          ],
          fields: [
            defineField({
              name: 'mobileImage',
              title: 'Mobile Device Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'tabletImage',
              title: 'Tablet Device Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'desktopImage',
              title: 'Desktop Device Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'taxonomy' } }],
    }),
  ],
})
