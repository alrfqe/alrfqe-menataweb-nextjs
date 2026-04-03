import { defineField, defineType } from 'sanity';

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.id', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'SEO', value: 'seo' },
          { title: 'Business', value: 'bisnis' },
          { title: 'Tips', value: 'tips' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'localizedText', validation: (rule) => rule.required() }),
    defineField({ name: 'homeExcerpt', title: 'Homepage Excerpt', type: 'localizedText' }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'localizedString', validation: (rule) => rule.required() }),
    defineField({
      name: 'visual',
      title: 'Visual Style',
      type: 'string',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'SEO', value: 'seo' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Responsive', value: 'responsive' },
          { title: 'Speed', value: 'speed' },
          { title: 'Branding', value: 'branding' },
          { title: 'Google Business', value: 'googleBusiness' },
        ],
      },
      initialValue: 'website',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'featured', title: 'Featured Article', type: 'boolean', initialValue: false }),
    defineField({ name: 'showOnHome', title: 'Show On Homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'body', title: 'Body Content', type: 'localizedPortableText', validation: (rule) => rule.required() }),
  ],
  preview: {
    select: {
      title: 'title.id',
      subtitle: 'category',
    },
  },
});
