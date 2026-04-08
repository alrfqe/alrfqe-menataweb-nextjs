import { defineArrayMember, defineField, defineType } from 'sanity';

export const pricingPackageType = defineType({
  name: 'pricingPackage',
  title: 'Pricing Package',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number', validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'name', title: 'Package Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'price', title: 'Price Label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'originalPrice', title: 'Original Price (Harga Coret)', type: 'string', description: 'Isi jika ada harga coret/diskon. Contoh: Rp 2,5 juta' }),
    defineField({ name: 'priceFix', title: 'Fixed Price', type: 'boolean', initialValue: true }),
    defineField({ name: 'featured', title: 'Featured Package', type: 'boolean', initialValue: false }),
    defineField({ name: 'description', title: 'Description', type: 'localizedText', validation: (rule) => rule.required() }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [defineArrayMember({ type: 'localizedString' })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({ name: 'whatsappUrl', title: 'WhatsApp URL', type: 'url' }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
    },
  },
});
