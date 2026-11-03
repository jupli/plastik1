# Website Cetak Plastik

Website perusahaan untuk layanan cetak plastik dan kemasan, dibuat dengan React, Vite, TypeScript, dan Tailwind CSS.

## Menjalankan Proyek

```sh
npm install
npm run dev
```

Untuk memeriksa dan membuat versi produksi:

```sh
npx tsc --noEmit
npm run build
npm run preview
```

Hasil build berada di direktori `dist/`. Navigasi menggunakan hash URL sehingga dapat digunakan pada hosting statis.

## Menyesuaikan Konten

- `src/config/site.ts`: nama perusahaan, WhatsApp, telepon, email, alamat, peta, jam buka, media sosial, dan foto.
- `src/data/content.ts`: layanan, produk, portofolio, proses produksi, testimoni, dan FAQ.
- `src/components/Icons.tsx`: logo.
- `index.html` dan `src/App.tsx`: judul dan deskripsi SEO.

Data perusahaan, kontak, proyek, testimoni, statistik, serta spesifikasi yang tersedia adalah contoh. Ganti atau verifikasi semuanya sebelum situs digunakan secara publik. Nomor WhatsApp harus menggunakan format internasional tanpa tanda `+`.

Formulir kontak membuka WhatsApp dengan pesan yang sudah diisi; situs ini tidak memiliki server untuk menyimpan atau mengirim formulir secara otomatis. Foto dan font dimuat dari layanan eksternal.