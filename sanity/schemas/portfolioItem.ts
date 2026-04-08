import { defineField, defineType } from 'sanity';

export const portfolioItemType = defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Urutan Tampil', type: 'number', validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'featured', title: 'Tampilkan di Homepage', type: 'boolean', initialValue: false, description: 'Jika aktif, item ini akan muncul di section portfolio halaman utama.' }),
    defineField({ name: 'title', title: 'Judul Proyek', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'Desain', value: 'desain' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'client', title: 'Nama Klien', type: 'string', description: 'Opsional.' }),
    defineField({
      name: 'image',
      title: 'Gambar',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string', description: 'Deskripsi singkat gambar untuk aksesibilitas.' }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'localizedString', description: 'Opsional. Tampil di card portfolio.' }),
    defineField({ name: 'impact', title: 'Hasil / Impact', type: 'localizedString', description: 'Opsional. Contoh: +300% reservasi online. Untuk kategori Website.' }),
    defineField({ name: 'url', title: 'URL Website', type: 'url', description: 'Opsional. Hanya untuk kategori Website.' }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle === 'website' ? '🌐 Website' : '🎨 Desain',
        media,
      };
    },
  },
});
