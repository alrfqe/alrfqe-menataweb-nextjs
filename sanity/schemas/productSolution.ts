import { defineArrayMember, defineField, defineType } from 'sanity';

export const productSolutionType = defineType({
  name: 'productSolution',
  title: 'Product Solution',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number', validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.id' }, validation: (rule) => rule.required() }),
    defineField({ name: 'featured', title: 'Featured Product', type: 'boolean', initialValue: false }),
    defineField({ name: 'category', title: 'Category', type: 'localizedString', validation: (rule) => rule.required() }),
    defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (rule) => rule.required() }),
    defineField({ name: 'summary', title: 'Summary', type: 'localizedText', validation: (rule) => rule.required() }),
    defineField({ name: 'idealFor', title: 'Ideal For', type: 'localizedText', validation: (rule) => rule.required() }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [defineArrayMember({ type: 'localizedString' })],
      validation: (rule) => rule.required().min(2),
    }),
    defineField({
      name: 'visual',
      title: 'Visual Style',
      type: 'string',
      options: {
        list: [
          { title: 'ERP', value: 'erp' },
          { title: 'CRM', value: 'crm' },
          { title: 'Booking', value: 'booking' },
          { title: 'Inventory', value: 'inventory' },
          { title: 'Portal', value: 'portal' },
          { title: 'Custom', value: 'custom' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Catalog Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Deskripsi singkat gambar untuk aksesibilitas',
        }),
      ],
    }),
    defineField({ name: 'ctaUrl', title: 'CTA URL', type: 'url' }),
  ],
  preview: {
    select: {
      title: 'title.id',
      subtitle: 'category.id',
    },
  },
});
