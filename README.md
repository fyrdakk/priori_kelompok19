# Priori — Smart Priority Task

**Modul 7 | VINIX Batch 5 | Kelompok 19**  
**Divisi:** Web & UI/UX Developer

## 1. Tentang Proyek

Priori adalah prototipe website pengelolaan tugas mahasiswa. Aplikasi ini membantu pengguna mencatat tugas kuliah, memantau status pengerjaan, melihat tenggat waktu (*deadline*), dan mengenali tugas yang perlu diprioritaskan.

Priori dikembangkan untuk merespons masalah penumpukan deadline, informasi tugas yang tersebar, serta kesulitan menentukan tugas yang harus dikerjakan lebih dahulu. Proyek Modul 7 melanjutkan hasil riset pengguna dan desain Figma dari modul sebelumnya menjadi prototipe web interaktif.

## 2. Tautan Proyek

- **Repositori GitHub:** https://github.com/fyrdakk/priori_kelompok19
- **Desain Figma Modul 5:** [Buka Prototipe Priori](https://www.figma.com/design/JFSkyYMAdzRiTfJcK7KjiL/Prototipe-Kelompok-19?node-id=0-1&t=a5sTTIdJfLxgTS2p-1)
- **PRD:** [`docs/PRD.md`](docs/PRD.md)
- **Peta desain:** [`docs/design-map.md`](docs/design-map.md)
- **Dokumen handover:** [`docs/HANDOVER.md`](docs/HANDOVER.md)
- **Demo online:** Belum dicantumkan.

## 3. Anggota dan Kontribusi

| Anggota | Tanggung jawab utama |
|---|---|
| Firda Nabilah | Penyusunan PRD dan inisialisasi repository; perbaikan desain halaman Indeks, Navbar, dan Footer; koordinasi tim serta pengelolaan GitHub/merge. |
| Deni Anugrah Hasibuan | Implementasi halaman Indeks, Login, dan Registrasi, termasuk alur serta validasi formulir terkait. |
| Dewangga Arka Putra | Penyelarasan antarmuka website dengan desain Figma dan perbaikan visual berdasarkan hasil peninjauan. |
| Luthfi Eka Saputra | Implementasi inti pengelolaan tugas dan halaman pendukung, termasuk pekerjaan yang tercatat pada Fase 4–7. |
| Komsiata Amelia Sari | Dokumentasi pengumpulan dan pengujian aplikasi; pencatatan hasil pengujian serta bukti yang benar-benar diperoleh. |

Pembagian di atas merupakan ringkasan tanggung jawab. Untuk laporan akhir, tambahkan tautan commit atau pull request yang sesuai dengan pekerjaan nyata setiap anggota. Jangan mengisi bukti commit/PR berdasarkan perkiraan.

## 4. Fitur Utama

- 13 halaman: Indeks, Login, Registrasi, Dashboard, Semua Tugas, Detail Tugas, Tambah Tugas, Edit Tugas, Notifikasi, Sukses/Konfirmasi, Kosong/Error, Profil, dan Pengaturan.
- Dashboard dengan ringkasan jumlah tugas berdasarkan status.
- Pengelolaan tugas: tambah, lihat detail, edit, ubah status, dan hapus.
- Pencarian tugas dan filter berdasarkan status.
- Validasi formulir serta umpan balik sukses, kosong, dan error.
- Penyimpanan data prototipe menggunakan `localStorage`.
- Tata letak responsif untuk layar mobile dan desktop.
- Prioritas menggunakan aturan sederhana berdasarkan deadline dan tingkat kesulitan, bukan model AI.

### Status dan Batasan Fitur

| Fitur | Keterangan |
|---|---|
| Navigasi dan routing halaman | Tersedia dalam prototipe. |
| Login dan registrasi | Simulasi menggunakan `localStorage`; bukan autentikasi produksi dan tidak memakai backend. |
| Pengelolaan tugas | Data disimpan secara lokal menggunakan `localStorage`. |
| Pengingat deadline | Informasi H-3/H-1/terlambat dihitung saat halaman Notifikasi dibuka; bukan notifikasi otomatis terjadwal. |
| Profil dan Pengaturan | Menyediakan informasi akun/statistik dan fungsi prototipe yang tersedia. |
| Database server, sinkronisasi lintas perangkat, push notification, integrasi pihak ketiga | Di luar cakupan implementasi yang didokumentasikan. |

Fitur yang disebut tersedia tetap perlu diverifikasi pada versi kode yang akan dikumpulkan. Jangan menganggap simulasi sebagai layanan produksi.

## 5. Teknologi

- Vite 7
- React 19
- React Router 7
- JavaScript dan CSS
- ESLint
- Prettier
- Vitest
- `localStorage` untuk penyimpanan data prototipe

Design token tersedia di `src/styles/tokens.css`.

## 6. Persyaratan Menjalankan Aplikasi

Pastikan perangkat memiliki:

- Node.js versi LTS
- Git
- Browser modern
- Editor kode, misalnya Visual Studio Code

## 7. Cara Menjalankan Secara Lokal

Buka terminal, kemudian jalankan perintah berikut.

### 7.1 Clone repository

```bash
git clone https://github.com/fyrdakk/priori_kelompok19.git
cd priori_kelompok19
```

### 7.2 Pasang dependensi

```bash
npm install
```

### 7.3 Jalankan server pengembangan

```bash
npm run dev
```

Buka URL lokal yang ditampilkan di terminal. Vite biasanya menggunakan `http://localhost:5173`.

### 7.4 Build dan preview

Untuk membuat build produksi:

```bash
npm run build
```

Untuk menjalankan preview build:

```bash
npm run preview
```

### 7.5 Pengujian

Jika skrip pengujian tersedia di `package.json`, jalankan:

```bash
npm run test
```

Gunakan hasil perintah yang benar-benar muncul di terminal sebagai bukti pengujian. Jika nama skrip berbeda, periksa bagian `scripts` di `package.json`.

### Akun demo

Pengguna dapat mencoba alur registrasi pada aplikasi. Jangan mencantumkan email atau kata sandi demo kecuali akun tersebut benar-benar disediakan oleh tim. Autentikasi prototipe ini tidak ditujukan untuk menyimpan data sensitif.

## 8. Struktur Proyek

```text
priori_kelompok19/
├── docs/
│   ├── design-map.md
│   └── HANDOVER.md
│   └── PRD.md
|   └── PRD.txt
├── public/
│   └── assets/
├── src/
│   ├── components/     # Komponen antarmuka yang dapat digunakan ulang
│   ├── pages/          # Halaman aplikasi
│   ├── store/          # Pengelolaan state dan localStorage
│   ├── utils/          # Fungsi dan utilitas
│   └── styles/         # CSS dan design token
├── eslint.config.js
├── vite.config.js
├── vitest.config.js
├── .prettierrc
├── index.html
├── package.json
├── README.md
```

Struktur di atas merupakan ringkasan. Nama file dan folder perlu disesuaikan jika berbeda dari isi repository aktual.

## 9. Tahapan Pengembangan

| Fase | Fokus |
|---|---|
| Fase 0 | Persiapan proyek, repository, PRD, dan README awal. |
| Fase 1 | Pemetaan desain Figma, komponen, design token, dan aset. |
| Fase 2 | Fondasi UI: routing, layout, dan komponen reusable. |
| Fase 3 | Halaman Indeks, Login, dan Registrasi dengan autentikasi simulasi. |
| Fase 4 | Pengelolaan tugas inti: tambah, daftar, detail, edit, ubah status, hapus, pencarian, dan filter. |
| Fase 5 | Halaman pendukung: Dashboard, Notifikasi, Sukses/Konfirmasi, Kosong/Error, Profil, dan Pengaturan. |
| Fase 6 | Responsivitas dan pemeriksaan aksesibilitas dasar. |
| Fase 7 | Audit kriteria penerimaan, pengujian, sinkronisasi dokumentasi, dan persiapan pengumpulan. |

Tabel ini menjelaskan tahapan proyek, bukan bukti otomatis bahwa setiap kriteria telah lulus pengujian.

## 10. Alur Kerja Git

1. Buat branch untuk satu fitur atau perbaikan.
2. Lakukan perubahan dan uji secara lokal.
3. Periksa perubahan dengan `git status` dan `git diff`.
4. Commit dengan pesan yang menjelaskan perubahan.
5. Push branch ke GitHub.
6. Buat pull request jika alur tim menggunakannya, lalu lakukan review sebelum merge.

Contoh perintah:

```bash
git checkout -b feat/nama-fitur
git add .
git commit -m "feat: deskripsi perubahan"
git push -u origin feat/nama-fitur
```

Contoh tipe commit:

| Tipe | Penggunaan |
|---|---|
| `feat` | Fitur baru |
| `fix` | Perbaikan bug |
| `style` | Perubahan tampilan atau gaya |
| `docs` | Perubahan dokumentasi |
| `chore` | Setup atau konfigurasi |
| `refactor` | Perapian kode tanpa mengubah perilaku |

Riwayat commit dan pull request di repository menjadi bukti kontribusi.

## 11. Log Prompt AI

Bagian ini memenuhi dokumentasi penggunaan AI. Ringkasan di bawah hanya mencatat aktivitas yang tercantum dalam dokumentasi proyek; tambahkan prompt lengkap apabila catatan asli tersedia.

| No. | Fase | Tool yang tercatat | Ringkasan penggunaan | Perbaikan setelah keluaran AI |
|---|---|---|---|---|
| 1 | Fase 4 | Antigravity IDE (Gemini 3.8 Flash) | Membantu implementasi pengelolaan tugas, store `localStorage`, validasi, pencarian/filter, dan modal hapus. | Penambahan mock `localStorage` untuk pengujian pada lingkungan Node dan pemformatan kode. |
| 2 | Fase 5 | Antigravity IDE (Gemini 3.8 Flash) | Membantu implementasi Dashboard, Notifikasi, Sukses, Kosong/Error, Profil, dan Pengaturan. | Pemisahan logika kalkulasi pengingat ke fungsi utilitas yang dapat diuji. |
| 3 | Fase 6 | Antigravity IDE (Gemini 3.8 Flash) | Membantu pemeriksaan responsivitas, target sentuh, focus trap, dan keyboard Escape pada modal/drawer. | Penyesuaian ukuran target sentuh pada komponen mobile. |
| 4 | Fase 7 | Antigravity IDE (Gemini 3.8 Flash) | Membantu audit kriteria penerimaan dan sinkronisasi dokumentasi. | Penyelarasan dokumen dan pemeriksaan akhir berdasarkan hasil aktual. |

### Format prompt yang digunakan

Prompt yang baik mencantumkan empat unsur pekerjaan: **peran, konteks, batasan, dan luaran**. Untuk tugas implementasi, tim juga dapat menjelaskan tugas spesifik di dalam konteks tersebut.

```text
Peran:
Bertindak sebagai frontend developer yang mengimplementasikan Priori.

Konteks:
Gunakan kebutuhan PRD untuk halaman yang dikerjakan dan desain Figma
sebagai acuan visual.

Batasan:
Gunakan React dan Vite, tanpa backend produksi, simpan data prototipe
melalui localStorage, terapkan validasi, dan pastikan alur navigasi jelas.

Luaran:
Berikan kode komponen yang diperlukan serta jelaskan asumsi dan
bagian yang perlu diuji.
```

Contoh di atas adalah **format prompt**, bukan klaim bahwa prompt tersebut dikirim persis seperti ini. Ganti atau lengkapi dengan prompt asli tim bila tersedia.

## 12. Log Perbaikan Manual

Catat masalah yang ditemukan setelah keluaran AI ditinjau, tindakan koreksi yang dilakukan, pelaku, dan bukti commit. Jangan mengisi baris dengan kejadian yang tidak benar-benar terjadi.

| No. | Masalah yang ditemukan | Perbaikan manual | Pelaku | Bukti commit/PR |
|---|---|---|---|---|
| 1 | Penanganan `localStorage` pada pengujian Node perlu disesuaikan. | Menambahkan mock yang diperlukan untuk pengujian. | Lengkapi berdasarkan riwayat pekerjaan. | Cantumkan hash/link commit. |
| 2 | Logika kalkulasi pengingat perlu mudah diuji. | Memisahkan logika ke fungsi utilitas. | Lengkapi berdasarkan riwayat pekerjaan. | Cantumkan hash/link commit. |
| 3 | Ukuran target sentuh pada antarmuka mobile perlu ditinjau. | Menyesuaikan ukuran komponen terkait. | Lengkapi berdasarkan riwayat pekerjaan. | Cantumkan hash/link commit. |

## 13. Pengujian dan Kriteria Penerimaan

Kriteria penerimaan terperinci terdapat di [`docs/PRD.md`](docs/PRD.md), bagian **Luaran dan Kriteria Keberhasilan**. Pengujian akhir setidaknya perlu mencakup:

- Navigasi utama dan alur Indeks → Login/Registrasi → Dashboard.
- Validasi input pada formulir.
- Tambah, lihat, edit, ubah status, dan hapus tugas.
- Pencarian, filter, serta kondisi hasil kosong.
- Umpan balik sukses dan error.
- Interaksi drawer/menu dan modal.
- Tampilan pada ukuran layar mobile dan desktop.
- Pemeriksaan error runtime dan hasil build.

Centang atau nyatakan lulus hanya setelah pengujian benar-benar dilakukan. Lampirkan bukti yang tersedia, misalnya hasil terminal, tangkapan layar, atau tautan commit.

## 14. Batasan Proyek

Priori merupakan prototipe web interaktif untuk kebutuhan akademik Modul 7. Login dan registrasi merupakan simulasi lokal, bukan autentikasi produksi. Data `localStorage` tidak otomatis tersinkronisasi lintas perangkat. Notifikasi deadline dihitung ketika halaman Notifikasi dibuka, bukan dikirim otomatis sesuai jadwal. Database server, push notification, integrasi pihak ketiga, dan rekomendasi berbasis machine learning tidak boleh dinyatakan tersedia jika belum dibuat dan diuji.

## 15. Dokumentasi Terkait

- [`docs/PRD.md`](docs/PRD.md) — kebutuhan produk, user story, ruang lingkup, pembagian tanggung jawab, dan kriteria penerimaan.
- [`docs/design-map.md`](docs/design-map.md) — pemetaan desain dan implementasi.
- [`docs/HANDOVER.md`](docs/HANDOVER.md) — informasi teknis dan serah terima proyek.

## 16. Catatan Pengumpulan

Sesuai ketentuan tugas, README perlu mencakup instruksi menjalankan aplikasi secara lokal, tautan Figma, kontribusi setiap anggota, log prompt AI, dan catatan perbaikan manual. Pastikan file dokumentasi yang disertakan di repository sama dengan versi final yang dikumpulkan.

---

**Priori — Smart Priority Task**  
VINIX Batch 5 | Modul 7 | Kelompok 19