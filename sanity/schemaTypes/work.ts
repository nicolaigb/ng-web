import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'heroContent',
      title: 'Hero Content',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          title: 'Width',
          name: 'width',
          type: 'number',
        },
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'string',
    },
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})
