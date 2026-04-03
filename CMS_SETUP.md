# Menata Web CMS

CMS yang dipakai: **Sanity Studio**, di-embed langsung ke project Next.js ini.

## URL CMS

- Local / production route studio: `/studio`

Contoh local:

```txt
http://localhost:3002/studio
```

## Environment Variable

Isi file `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-15
SANITY_API_READ_TOKEN=your_read_only_token
```

Template awal sudah disediakan di `.env.example`.

## Yang Sudah Bisa Diupdate dari CMS

- Artikel
  - judul ID/EN
  - excerpt ID/EN
  - home excerpt ID/EN
  - isi artikel ID/EN
  - kategori
  - read time
  - visual card
  - featured article
  - tampil di homepage atau tidak
  - tanggal publish
- Pricing package
  - urutan paket
  - nama paket
  - label harga
  - fixed price / custom scope
  - deskripsi ID/EN
  - daftar fitur ID/EN
  - featured package
  - link WhatsApp CTA
- Product solution
  - urutan produk
  - slug
  - featured product
  - kategori ID/EN
  - judul ID/EN
  - ringkasan ID/EN
  - penjelasan ideal untuk siapa ID/EN
  - daftar fitur ID/EN
  - style visual kartu
  - gambar katalog custom per produk
  - link CTA

## Yang Saya Rekomendasikan Berikutnya Masuk CMS

- FAQ
- Testimonial
- Portfolio / project list

## Yang Sebaiknya Tetap Static Dulu

- Hero copy utama
- Section marketing copy inti
- Header / footer navigation
- Legal boilerplate jika jarang berubah

## Cara Kerja Fallback

Kalau env Sanity belum diisi, website tetap jalan normal memakai data static yang sekarang ada di codebase.

Jadi urutannya aman:

1. Site tetap online dengan data lama
2. Sanity dihubungkan
3. Konten mulai dipindah ke CMS
4. Update berikutnya cukup lewat `/studio`
