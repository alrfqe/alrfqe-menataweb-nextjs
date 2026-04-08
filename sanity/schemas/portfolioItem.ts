import { defineField, defineType } from 'sanity';

export const portfolioItemType = defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Urutan Tampil', type: 'number', validation: (rule) => rule.required().min(1) }),
    defineField({
      name: 'type',
      title: 'Tipe',
      type: 'string',
      options: {
        list: [
          { title: '🌐 Portofolio Klien — hasil kerja nyata', value: 'portfolio' },
          { title: '🎨 Inspirasi Desain — contoh/mockup per industri', value: 'desain' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Industri / Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Corporate', value: 'corporate' },
          { title: 'Wisata & Pariwisata', value: 'wisata' },
          { title: 'Travel & Transportasi', value: 'travel' },
          { title: 'Hotel & Hospitality', value: 'hospitality' },
          { title: 'Food & Beverage', value: 'fnb' },
          { title: 'Retail & E-commerce', value: 'retail' },
          { title: 'Properti & Real Estate', value: 'properti' },
          { title: 'Pendidikan', value: 'pendidikan' },
          { title: 'Kesehatan', value: 'kesehatan' },
          { title: 'Lainnya', value: 'other' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'featured', title: 'Tampilkan di Homepage', type: 'boolean', initialValue: false, description: 'Hanya berlaku untuk tipe Portofolio Klien.' }),
    defineField({ name: 'title', title: 'Judul Proyek', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'client', title: 'Nama Klien', type: 'string', description: 'Opsional. Kosongkan untuk tipe Desain.' }),
    defineField({
      name: 'image',
      title: 'Gambar',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'localizedString', description: 'Opsional. Tampil di card.' }),
    defineField({ name: 'impact', title: 'Hasil / Impact', type: 'localizedString', description: 'Opsional. Contoh: +300% reservasi online. Untuk Portofolio Klien.' }),
    defineField({ name: 'url', title: 'URL Website', type: 'url', description: 'Opsional. Link ke website klien.' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type', media: 'image', category: 'category' },
    prepare({ title, subtitle, media, category }) {
      const icon = subtitle === 'portfolio' ? '🌐' : '🎨';
      return { title: `${icon} ${title}`, subtitle: category, media };
    },
  },
});
