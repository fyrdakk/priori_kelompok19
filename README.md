# Priori — Smart Priority Task

**Modul 7 | VINIX Batch 5 | Kelompok 19**  
**Divisi:** Web & UI/UX Developer

Priori adalah prototipe website pengelolaan tugas mahasiswa yang membantu pengguna mencatat tugas kuliah, memantau status pengerjaan, melihat tenggat waktu (*deadline*), dan menentukan tugas yang perlu diperhatikan lebih dahulu.

Proyek ini dikembangkan berdasarkan masalah penumpukan deadline, informasi tugas yang tersebar, dan kesulitan menentukan prioritas. Modul 7 melanjutkan riset pengguna dan desain Figma dari modul sebelumnya menjadi prototipe web interaktif.

## 1. Tautan Proyek

- **Repository GitHub:** https://github.com/fyrdakk/priori_kelompok19
- **Desain Figma Modul 5:** [Buka Prototipe Priori](https://www.figma.com/design/JFSkyYMAdzRiTfJcK7KjiL/Prototipe-Kelompok-19?node-id=0-1&t=a5sTTIdJfLxgTS2p-1)
- **Riwayat commit:** https://github.com/fyrdakk/priori_kelompok19/commits/main
- **Pull requests:** https://github.com/fyrdakk/priori_kelompok19/pulls
- **Dokumen PRD:** `docs/PRD.md`
- **Peta desain:** `docs/design-map.md`
- **Dokumen handover:** `docs/HANDOVER.md`
- **Website produksi:** https://priori.web.id/
- **Hosting:** [Vercel](https://vercel.com/) — deployment website Priori.
- **Database dan autentikasi:** [Supabase](https://supabase.com/) — PostgreSQL dan Supabase Auth.

## 2. Anggota dan Kontribusi

Pembagian tanggung jawab anggota pada README ini diselaraskan dengan pembagian tugas dalam PRD pada Modul 7.

| Anggota | Tanggung jawab utama |
|---|---|
| **Firda Nabilah** | Menyusun PRD dan melakukan inisialisasi repository; memperbaiki desain halaman Indeks, Navbar, dan Footer; serta mengoordinasikan tim dan pengelolaan GitHub/merge. |
| **Deni Anugrah Hasibuan** | Mengimplementasikan halaman Indeks, Login, dan Registrasi, termasuk alur serta validasi formulir yang terkait. |
| **Dewangga Arka Putra** | Menyelaraskan antarmuka website dengan desain Figma dan melakukan perbaikan visual berdasarkan hasil peninjauan. |
| **Luthfi Eka Saputra** | Mengimplementasikan fitur inti pengelolaan tugas dan halaman pendukung, termasuk pekerjaan yang tercatat pada Fase 4–7. |
| **Komsiata Amelia Sari** | Mendukung dokumentasi pengumpulan dan pengujian aplikasi, termasuk mencatat hasil pengujian serta bukti yang benar-benar diperoleh. |

Pembagian tanggung jawab di atas disamakan dengan PRD. Riwayat commit dan pull request tetap dapat digunakan sebagai bukti pekerjaan yang benar-benar dilakukan oleh setiap anggota.


## 3. Fitur Utama

Priori mendokumentasikan 13 halaman/state utama:

1. Indeks
2. Login
3. Registrasi
4. Dashboard
5. Semua Tugas
6. Detail Tugas
7. Tambah Tugas
8. Edit Tugas
9. Notifikasi
10. Sukses/Konfirmasi
11. Kosong/Error
12. Profil
13. Pengaturan

Fitur yang menjadi ruang lingkup prototipe:

- Ringkasan jumlah tugas berdasarkan status pada Dashboard.
- Pengelolaan tugas: tambah, lihat detail, edit, ubah status, dan hapus.
- Pencarian tugas dan filter berdasarkan status.
- Validasi formulir dan umpan balik untuk kondisi berhasil, kosong, atau error.
- Penyimpanan data melalui Supabase jika environment tersedia, dengan
  `localStorage` sebagai fallback mode demo.
- Tata letak yang dirancang untuk layar mobile dan desktop.
- Informasi prioritas berdasarkan aturan sederhana yang berkaitan dengan deadline dan tingkat kesulitan, bukan model AI.

### Status dan Batasan Fitur

| Fitur | Keterangan |
|---|---|
| Navigasi dan routing | Digunakan untuk menghubungkan halaman dalam prototipe. |
| Login dan registrasi | Menggunakan Supabase Auth saat env tersedia; fallback simulasi lokal tetap tersedia tanpa env. |
| Pengelolaan tugas | CRUD tersimpan di tabel Supabase `tasks` dan dibatasi RLS per pengguna; fallback memakai `localStorage`. |
| Sukses/Konfirmasi | Setelah tambah atau edit tugas berhasil, pengguna menerima umpan balik melalui halaman Sukses/Konfirmasi. |
| Pengingat deadline | Informasi H-3, H-1, atau terlambat dihitung saat halaman Notifikasi dibuka; bukan notifikasi otomatis terjadwal. |
| Profil dan Pengaturan | Halaman pendukung sesuai fungsi yang tersedia dalam prototipe. |
| Database server dan sinkronisasi lintas perangkat | Proyek telah dihubungkan ke Supabase. Fitur ini bergantung pada konfigurasi environment Vercel dan kebijakan akses database (RLS). |
| Push notification dan integrasi pihak ketiga | Tidak dinyatakan tersedia dalam implementasi ini. |
| Machine learning | Tidak digunakan untuk menghitung prioritas tugas. |

Fungsi aktual tetap perlu diperiksa pada versi kode yang akan dikumpulkan. Simulasi antarmuka tidak boleh dianggap sebagai layanan produksi.

## 4. Teknologi

Teknologi yang tercatat dalam dokumentasi proyek:

- Vite 7
- React 19
- React Router 7
- JavaScript
- CSS
- ESLint
- Prettier
- Vitest
- `localStorage` untuk penyimpanan data prototipe
- Supabase Auth untuk autentikasi pengguna
- Supabase PostgreSQL sebagai database aplikasi
- Vercel untuk deployment dan hosting website publik

Design token dicatat berada di `src/styles/tokens.css`.

## 5. Persyaratan Menjalankan Aplikasi

Siapkan perangkat dengan:

- Node.js versi LTS
- Git
- Browser modern
- Editor kode, misalnya Visual Studio Code

## 6. Cara Menjalankan Secara Lokal

### 6.1 Clone repository

Buka terminal, lalu jalankan:

```bash
git clone https://github.com/fyrdakk/priori_kelompok19.git
cd priori_kelompok19
```

### 6.2 Pasang dependensi

```bash
npm install
```

### 6.3 Konfigurasi Supabase

Salin `.env.example` menjadi `.env.local`, lalu isi:

```text
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Jalankan isi [supabase/schema.sql](./supabase/schema.sql) pada SQL Editor project
Supabase. Gunakan hanya URL dan anon key pada frontend; jangan masukkan
`service_role` key ke `.env`, repository, atau Vercel. Jika env belum diisi,
aplikasi otomatis berjalan dalam mode demo localStorage.

### 6.4 Jalankan server pengembangan

```bash
npm run dev
```

Buka alamat lokal yang ditampilkan oleh terminal. Alamat bawaan Vite biasanya `http://localhost:5173`.

### 6.5 Build aplikasi

```bash
npm run build
```

### 6.6 Preview hasil build

```bash
npm run preview
```

### 6.7 Pengujian

Proyek mencantumkan Vitest sebagai teknologi pengujian. Periksa bagian `scripts` pada `package.json` untuk memastikan nama perintah pengujian yang tersedia, lalu jalankan skrip yang sesuai. Jangan menyatakan pengujian lulus sebelum perintah benar-benar dijalankan dan hasilnya diperiksa.

### Akun demo

Pengguna dapat mencoba alur registrasi pada aplikasi. README ini tidak mencantumkan email atau kata sandi demo karena kredensial demo khusus tidak tercantum dalam dokumentasi proyek. Jika Supabase belum dikonfigurasi, autentikasi demo menyimpan kredensial lokal
dan tidak ditujukan untuk menyimpan data sensitif. Saat Supabase aktif, akun
ditangani oleh Supabase Auth dan tugas dipisahkan berdasarkan `user_id`.

## 7. Struktur Proyek

Struktur ringkas berikut mengikuti susunan yang dicatat dalam dokumentasi. Jika nama berkas pada repository berbeda, struktur aktual di GitHub menjadi rujukan utama.

```text
priori_kelompok19/
├── docs/
│   ├── PRD.md
│   ├── PRD.txt
│   ├── design-map.md
│   └── HANDOVER.md
├── public/
│   └── assets/
├── supabase/
│   └── schema.sql
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── utils/
│   ├── lib/
│   │   └── supabase.js
│   └── styles/
│       └── tokens.css
├── eslint.config.js
├── vite.config.js
├── vitest.config.js
├── .prettierrc
├── index.html
├── package.json
└── README.md
```

Keterangan folder:

- `components/`: komponen antarmuka yang digunakan kembali.
- `pages/`: halaman aplikasi.
- `store/`: pengelolaan state dan data `localStorage`.
- `utils/`: fungsi utilitas.
- `styles/`: stylesheet dan design token.
- `lib/`: integrasi layanan eksternal yang aman untuk frontend.
- `docs/`: dokumentasi produk, pemetaan desain, dan handover.

### Deployment ke Vercel

Aplikasi Priori sudah di-deploy ke Vercel dan dapat diakses melalui domain publik [https://priori.web.id/](https://priori.web.id/). Repository GitHub menjadi sumber kode proyek, sedangkan Vercel digunakan untuk membangun dan menyajikan aplikasi.

Jika konfigurasi deployment perlu diperbarui, pastikan project Vercel terhubung ke repository yang benar dan tambahkan environment variables berikut pada **Project Settings → Environment Variables** untuk environment Preview dan Production:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

`vercel.json` sudah menyediakan rewrite SPA agar refresh pada route React Router
tetap mengarah ke `index.html`.

## 8. Tahapan Pengembangan

| Fase | Fokus pekerjaan |
|---|---|
| Fase 0 | Persiapan proyek, repository, PRD, dan README awal. |
| Fase 1 | Pemetaan desain Figma, komponen, design token, dan aset. |
| Fase 2 | Fondasi UI, routing, layout, dan komponen reusable. |
| Fase 3 | Halaman Indeks, Login, dan Registrasi dengan autentikasi simulasi. |
| Fase 4 | Pengelolaan tugas inti: tambah, daftar, detail, edit, ubah status, hapus, pencarian, dan filter. |
| Fase 5 | Halaman pendukung: Dashboard, Notifikasi, Sukses/Konfirmasi, Kosong/Error, Profil, dan Pengaturan. |
| Fase 6 | Responsivitas dan pemeriksaan aksesibilitas dasar. |
| Fase 7 | Audit kriteria penerimaan, pengujian, sinkronisasi dokumentasi, dan persiapan pengumpulan. |

Daftar fase menunjukkan alur pengembangan proyek, bukan pernyataan bahwa semua kriteria penerimaan telah lulus.

## 9. Alur Kerja Git

Alur kerja Git yang digunakan sebagai pedoman tim:

1. Buat branch untuk fitur atau perbaikan.
2. Lakukan perubahan dan periksa aplikasi secara lokal.
3. Periksa perubahan menggunakan `git status` dan `git diff`.
4. Buat commit dengan pesan yang menjelaskan perubahan.
5. Push branch ke GitHub.
6. Gunakan pull request untuk review dan merge sesuai alur kerja tim.

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
| `feat` | Menambahkan fitur baru. |
| `fix` | Memperbaiki bug. |
| `style` | Mengubah tampilan atau gaya. |
| `docs` | Memperbarui dokumentasi. |
| `chore` | Mengubah konfigurasi atau pekerjaan pemeliharaan. |
| `refactor` | Merapikan kode tanpa mengubah perilaku yang dimaksud. |

Riwayat commit dan pull request dapat dilihat pada [halaman commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) dan [halaman pull request](https://github.com/fyrdakk/priori_kelompok19/pulls).

## 10. Status Branch dan Pull Request

Berdasarkan informasi halaman Branches GitHub yang diperiksa pada 17 Oktober 2026, repository menggunakan `main` sebagai default branch. Daftar berikut mencatat branch yang terlihat pada saat pemeriksaan; status dan jumlah commit dapat berubah setelah pembaruan repository berikutnya.

| Branch | Pemilik/pembaruan terakhir yang terlihat | Informasi pada halaman GitHub | Tautan |
|---|---|---|---|
| `main` | `fyrdakk` | Default branch; diperbarui sekitar 1 jam sebelumnya saat pemeriksaan. | [Lihat branch `main`](https://github.com/fyrdakk/priori_kelompok19/tree/main) |
| `update-terbaru` | `fyrdakk` | Diperbarui sekitar 6 jam sebelumnya; halaman menampilkan angka 28 pada kolom Behind/Ahead dan angka 1 pada kolom Pull request. | [Lihat branch](https://github.com/fyrdakk/priori_kelompok19/tree/update-terbaru) |
| `firda/rename` | `fyrdakk` | Diperbarui sekitar 2 hari sebelumnya; halaman menampilkan angka 25 pada kolom Behind/Ahead. | [Lihat branch](https://github.com/fyrdakk/priori_kelompok19/tree/firda/rename) |
| `feat/ui-figma-fidelity` | `Dewp246` | Diperbarui sekitar 19 jam sebelumnya; terkait Pull Request #4. | [Branch](https://github.com/fyrdakk/priori_kelompok19/tree/feat/ui-figma-fidelity) · [PR #4](https://github.com/fyrdakk/priori_kelompok19/pull/4) |
| `feat/fase-7-audit-and-submission` | `luthfiektugas` | Diperbarui sekitar 1 hari sebelumnya; terkait Pull Request #3. | [Branch](https://github.com/fyrdakk/priori_kelompok19/tree/feat/fase-7-audit-and-submission) · [PR #3](https://github.com/fyrdakk/priori_kelompok19/pull/3) |
| `first-config-bydeni` | `denihsb` | Diperbarui sekitar 2 hari sebelumnya. | [Lihat branch](https://github.com/fyrdakk/priori_kelompok19/tree/first-config-bydeni) |

Pull request yang dapat diidentifikasi dari informasi tersebut:

- [Pull Request #2 — `firda/rename`](https://github.com/fyrdakk/priori_kelompok19/pull/2)
- [Pull Request #3 — `feat/fase-7-audit-and-submission`](https://github.com/fyrdakk/priori_kelompok19/pull/3)
- [Pull Request #4 — `feat/ui-figma-fidelity`](https://github.com/fyrdakk/priori_kelompok19/pull/4)
- [Semua pull request](https://github.com/fyrdakk/priori_kelompok19/pulls)

**Catatan:** angka Behind/Ahead disalin sebagaimana ditampilkan pada tabel Branches yang diberikan dan tidak ditafsirkan sebagai jumlah commit unik tanpa memeriksa perbandingan branch di GitHub. Sebelum pengumpulan, periksa kembali apakah perubahan pada branch kerja sudah digabung ke `main`. Jangan menghapus branch atau melakukan merge hanya berdasarkan tabel dokumentasi ini.

## 11. Log Prompt AI

AI dicatat sebagai alat bantu dalam proses pengembangan. Tabel berikut berisi **contoh prompt rekonstruksi berdasarkan ruang lingkup pekerjaan proyek**, bukan transkrip persis dari riwayat percakapan AI. Tool yang dicatat dalam dokumentasi proyek adalah Antigravity IDE (Gemini 3.8 Flash).

| No. | Fase | Tool yang tercatat | Contoh prompt untuk pekerjaan terkait | Fokus pemeriksaan setelah keluaran AI |
|---|---|---|---|---|
| 1 | Fase 4 | Antigravity IDE (Gemini 3.8 Flash) | “Bantu implementasikan pengelolaan tugas pada Priori menggunakan React. Cakup tambah, daftar, detail, edit, ubah status, hapus, pencarian, dan filter. Gunakan `localStorage` untuk data prototipe, tambahkan validasi, dan jelaskan cara menguji alurnya.” | Memeriksa alur pengelolaan tugas, validasi input, pencarian/filter, dan penyimpanan data lokal. |
| 2 | Fase 5 | Antigravity IDE (Gemini 3.8 Flash) | “Bantu menyelaraskan halaman Dashboard, Notifikasi, Sukses/Konfirmasi, Kosong/Error, Profil, dan Pengaturan dengan struktur komponen Priori. Pertahankan pola navigasi yang konsisten dan jangan menambahkan backend.” | Memeriksa konsistensi tampilan, navigasi, dan kesesuaian fitur dengan ruang lingkup prototipe. |
| 3 | Fase 6 | Antigravity IDE (Gemini 3.8 Flash) | “Tinjau responsivitas antarmuka Priori pada layar mobile dan desktop. Periksa tata letak, navigasi, ukuran tombol, keterbacaan teks, serta interaksi menu dan modal. Sarankan perubahan yang tidak mengubah fungsi utama.” | Memeriksa layout pada beberapa ukuran layar, keterbacaan, dan kemudahan penggunaan. |
| 4 | Fase 7 | Antigravity IDE (Gemini 3.8 Flash) | “Bantu meninjau implementasi Priori berdasarkan PRD dan kriteria penerimaan AC-01 sampai AC-15. Buat daftar aspek yang perlu diuji, bedakan fitur yang sudah diverifikasi dari yang belum, dan periksa konsistensi README dengan batasan prototipe.” | Memeriksa konsistensi dokumentasi dan menguji kriteria penerimaan berdasarkan hasil aktual. |

Prompt di atas disusun untuk melengkapi dokumentasi sebagai contoh yang relevan dengan proyek. Prompt tersebut tidak diklaim sebagai teks persis yang pernah dikirimkan. Dokumentasi penggunaan AI harus tetap dibedakan dari riwayat prompt asli.

## 12. Log Perbaikan Manual

Bagian ini merangkum perbaikan dan penyempurnaan yang tercatat pada riwayat commit repository Kelompok 19 tanggal 16–17 Oktober 2026. Nama akun, pesan commit, dan tanggal mengikuti informasi riwayat yang tersedia. Tautan bukti mengarah ke riwayat commit repository; gunakan halaman tersebut untuk membuka commit individual dan melihat detail perubahan.

| No. | Tanggal | Masalah atau bagian yang ditinjau | Perbaikan yang tercatat | Akun GitHub | Bukti |
|---|---|---|---|---|---|
| 1 | 16 Okt 2026 | Fondasi proyek dan struktur halaman perlu disiapkan. | Menyelesaikan konfigurasi Fase 0–1 serta menambahkan komponen, halaman, utilitas, layout aplikasi, route guard, navigasi, validasi formulir, gaya global, dan design token untuk Fase 3. | `denihsb` | [Riwayat commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) — `fase 0 and 1 done: konfig`; `fase 3 completed: added components, pages, and utils for the project...` |
| 2 | 16 Okt 2026 | Fitur inti pengelolaan tugas perlu diimplementasikan. | Menambahkan pengelolaan tugas, store, dan halaman tugas responsif. | `luthfiektugas` | [Riwayat commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) — `feat: implement core task management, store, and responsive task pages` |
| 3 | 16 Okt 2026 | Halaman pendukung dan ringkasan tugas perlu dilengkapi. | Menambahkan halaman pendukung, kalkulasi informasi notifikasi, dan Dashboard responsif. | `luthfiektugas` | [Riwayat commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) — `feat: implement supporting pages, notifications calculation, and responsive dashboard` |
| 4 | 16 Okt 2026 | Tampilan mobile dan aksesibilitas dasar perlu diperiksa. | Menyempurnakan layout responsif, target sentuh minimal 44 px, dan aksesibilitas drawer mobile. | `luthfiektugas` | [Riwayat commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) — `style: polish responsive layouts, minimum 44px touch targets, and mobile drawer accessibility` |
| 5 | 17 Okt 2026 | Tata letak dan navigasi mobile masih perlu disempurnakan. | Mempersempit panel drawer navigasi mobile hingga maksimal 16rem, merapikan posisi teks navbar, membatasi lebar halaman formulir/detail, dan memperbaiki jarak bidang formulir. | `Dewp246` | [Riwayat commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) — `style: sempitkan panel laci navigasi ponsel menjadi maksimal 16rem...`; `style: sejajarkan teks navbar dengan tombol...` |
| 6 | 17 Okt 2026 | Format deadline perlu konsisten dan mudah dibaca. | Menambahkan format tanggal deadline singkat berbahasa Indonesia pada tiga halaman menggunakan fungsi murni dan uji unit. | `Dewp246` | [Riwayat commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) — `feat: format tanggal deadline menjadi Indonesia singkat (17 Okt 2026) di tiga halaman dengan fungsi murni dan uji unit` |
| 7 | 17 Okt 2026 | Tata letak desktop dan kartu aksi perlu diperbaiki. | Memperbaiki luapan baris aksi kartu, tombol keluar, pemisah metadata, dan lebar konten desktop; kemudian menyelaraskan layout desktop agar lebih seimbang. | `Dewp246` | [Riwayat commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) — `style: hentikan luapan baris aksi kartu...`; `style: perbaiki tata letak desktop...` |
| 8 | 17 Okt 2026 | Bukti tampilan lintas ukuran layar perlu diperbarui. | Menambahkan tangkapan layar ukuran 360, 768, dan 1280 px, lalu memperbarui tangkapan layar desktop dan tablet sesuai layout terbaru. | `Dewp246` | [Riwayat commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) — `docs: tambah tangkapan layar 360, 768, dan 1280 px dan tautkan di README`; `docs: segarkan tangkapan layar desktop dan tablet...` |
| 9 | 16–17 Okt 2026 | Dokumentasi produk dan serah terima perlu diselaraskan dengan implementasi. | Melengkapi audit Fase 7, memperbarui PRD, menambahkan dokumen handover/changelog, dan memperbarui README, peta desain, serta handover. | `luthfiektugas`, `Dewp246`, `fyrdakk` | [Riwayat commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) — `docs: complete Phase 7 audit...`; `docs: add detailed project handover and changelog document`; `update beberapa file README.md, docs/PRD.md, docs/design-map.md, docs/HANDOVER.md` |
| 10 | 17 Okt 2026 | Tampilan dan komponen terbaru perlu dirapikan. | Memperbarui komponen dan tampilan, kemudian memperbarui beberapa dokumen proyek. | `fyrdakk` | [Riwayat commit](https://github.com/fyrdakk/priori_kelompok19/commits/main) — `update komponen dan tampilan terbaru (bersih)`; `update beberapa file README.md, docs/PRD.md, docs/design-map.md, docs/HANDOVER.md` |

**Catatan:** Tabel ini merangkum pesan commit yang diberikan dari riwayat GitHub. Karena hash commit individual tidak disertakan dalam daftar yang tersedia, bukti ditautkan ke halaman riwayat commit repository dan dikenali melalui pesan commit. Untuk pemeriksaan yang lebih presisi, buka commit terkait pada GitHub dan salin tautan commit individual. Log ini mendokumentasikan perubahan kode dan dokumentasi yang tercatat; tidak semua commit dengan sendirinya membuktikan bahwa seluruh kriteria penerimaan telah lulus pengujian.

## 13. Pengujian dan Kriteria Penerimaan

Kriteria penerimaan terperinci dirujuk pada `docs/PRD.md`, bagian **Luaran dan Kriteria Keberhasilan**. Pemeriksaan akhir aplikasi mencakup:

- Navigasi utama dan alur Indeks menuju Login/Registrasi.
- Validasi input pada formulir.
- Tambah, lihat, edit, ubah status, dan hapus tugas.
- Pencarian, filter, dan kondisi hasil kosong.
- Umpan balik sukses dan error.
- Interaksi menu/drawer dan modal yang tersedia.
- Tampilan pada ukuran layar mobile dan desktop.
- Pemeriksaan error runtime dan hasil build.

Daftar ini merupakan panduan pengujian. Status lulus hanya boleh dinyatakan setelah pengujian benar-benar dilakukan. Hasil terminal dan tangkapan layar dapat digunakan sebagai bukti apabila tersedia.

## 14. Batasan Proyek

Priori merupakan aplikasi web pengelolaan tugas mahasiswa yang dikembangkan untuk kebutuhan akademik Modul 7 dan telah dipublikasikan melalui Vercel dengan domain [https://priori.web.id/](https://priori.web.id/). Database aplikasi telah dihubungkan ke Supabase. Ketersediaan fungsi tetap bergantung pada konfigurasi environment, implementasi, dan kebijakan akses yang aktif.

- Jika aplikasi berjalan tanpa konfigurasi Supabase yang diperlukan, mode fallback `localStorage` dapat digunakan sesuai implementasi.
- Data yang disimpan hanya di `localStorage` tidak otomatis tersinkronisasi lintas perangkat.
- Informasi pengingat deadline dihitung ketika halaman Notifikasi dibuka, bukan dikirim otomatis sesuai jadwal.
- Push notification dan integrasi pihak ketiga tidak dinyatakan tersedia.
- Penentuan prioritas tidak menggunakan model machine learning.
- Fitur yang belum dibuat atau belum diuji tidak boleh dinyatakan sudah berfungsi.

## 15. Pembaruan Implementasi dan Riwayat Commit (22–24 Oktober 2026)

Bagian ini melengkapi log perbaikan sebelumnya berdasarkan tangkapan layar halaman commit GitHub yang diperiksa pada 24 Oktober 2026. Ringkasan ini merupakan tambahan atas catatan lama, bukan pengganti riwayat commit lengkap.

| Tanggal | Perubahan yang tercatat | Akun | Bukti |
|---|---|---|---|
| 22 Okt 2026 | Memperbarui pesan error dan teks ajakan registrasi. | `fyrdakk` | [Commit `2633089`](https://github.com/fyrdakk/priori_kelompok19/commit/2633089) |
| 22 Okt 2026 | Mengubah warna hover menjadi putih pada navigasi landing page. | `fyrdakk` | [Commit `faecaac`](https://github.com/fyrdakk/priori_kelompok19/commit/faecaac) |
| 23 Okt 2026 | Menghubungkan aplikasi ke Supabase serta menambahkan auth dan task store. | `denihsb` | [Commit `05d9171`](https://github.com/fyrdakk/priori_kelompok19/commit/05d9171) |
| 23 Okt 2026 | Menyelesaikan merge branch `main`, memperbaiki konflik `AuthPage.jsx`, dan memperbaiki URL Supabase. | `denihsb` | [Commit `dab3e67`](https://github.com/fyrdakk/priori_kelompok19/commit/dab3e67), [commit `3a1d989`](https://github.com/fyrdakk/priori_kelompok19/commit/3a1d989), [commit `1aab094`](https://github.com/fyrdakk/priori_kelompok19/commit/1aab094) |
| 23 Okt 2026 | Menyiapkan proses pengiriman ulang konfirmasi melalui SMTP untuk mengantisipasi batas laju Supabase. | `denihsb` | [Commit `7fc4a16`](https://github.com/fyrdakk/priori_kelompok19/commit/7fc4a16) |
| 24 Okt 2026 | Memperbaiki tampilan landing page, kontras hover Login, dan global styles. | `denihsb` | [Commit `e463707`](https://github.com/fyrdakk/priori_kelompok19/commit/e463707) |
| 24 Okt 2026 | Memoles kartu tugas dan menyembunyikan footer pada tampilan mobile. | `denihsb` | [Commit `fb885ff`](https://github.com/fyrdakk/priori_kelompok19/commit/fb885ff) |
| 24 Okt 2026 | Memperbaiki UI Dashboard dan halaman tugas, termasuk kartu tugas dan kartu statistik. | `denihsb` | [Commit `d7ba24b`](https://github.com/fyrdakk/priori_kelompok19/commit/d7ba24b) |
| 24 Okt 2026 | Memperbaiki konsistensi kartu prioritas pada Dashboard. | `denihsb` | [Commit `35263f8`](https://github.com/fyrdakk/priori_kelompok19/commit/35263f8) |
| 24 Okt 2026 | Memperbarui logo dan favicon ke logo Priori yang baru. | `denihsb` | [Commit `5fead72`](https://github.com/fyrdakk/priori_kelompok19/commit/5fead72) |

Perubahan lain pada 21 Oktober 2026 yang terlihat pada riwayat commit meliputi perbaikan footer responsif, hierarki visual halaman Pengaturan, error build, penambahan `key` pada elemen daftar yang dirender dengan `map`, perbaikan UX mobile dan aksesibilitas, serta perapian struktur UI. Lihat [riwayat commit pada branch `main`](https://github.com/fyrdakk/priori_kelompok19/commits/main) untuk detail dan perubahan lengkap.

### Status branch pada pemeriksaan 24 Oktober 2026

Berdasarkan tangkapan layar halaman Branches GitHub, `main` tercatat sebagai default branch dan status pemeriksaan yang terlihat adalah 1/1. Beberapa branch lain masih tertinggal dari `main`; karena itu, jangan menganggap perubahan di branch tersebut sudah masuk ke deployment publik sebelum memeriksa merge dan commit yang aktif.

| Branch | Informasi yang terlihat |
|---|---|
| `main` | Default branch; diperbarui sekitar 4 jam sebelum pemeriksaan; check status 1/1. |
| `update-terbaru` | Terlihat 50 pada kolom Behind dan 1 pada kolom Ahead. |
| `firda/rename` | Terlihat 47 pada kolom Behind dan 0 pada kolom Ahead; terkait PR #2. |
| `polishing-ui` | Terlihat 12 pada kolom Behind dan 0 pada kolom Ahead. |
| `build-perbaikan-cleanup` | Terlihat 15 pada kolom Behind dan 0 pada kolom Ahead. |
| `feat/ui-figma-fidelity` | Terlihat 24 pada kolom Behind dan 0 pada kolom Ahead; terkait PR #4. |

Tabel ini adalah catatan pada saat pemeriksaan, bukan status langsung. Periksa [halaman Branches](https://github.com/fyrdakk/priori_kelompok19/branches) dan [Pull requests](https://github.com/fyrdakk/priori_kelompok19/pulls) untuk kondisi terbaru.

## 16. Tautan Akses dan Deployment

- **Website Priori:** https://priori.web.id/
- **Repository GitHub:** https://github.com/fyrdakk/priori_kelompok19
- **Riwayat commit `main`:** https://github.com/fyrdakk/priori_kelompok19/commits/main
- **Daftar branch:** https://github.com/fyrdakk/priori_kelompok19/branches
- **Pull requests:** https://github.com/fyrdakk/priori_kelompok19/pulls

Sebelum pengumpulan, buka website publik dan uji alur utama—registrasi/login, penambahan tugas, perubahan status, serta pemuatan data setelah halaman dimuat ulang. Pastikan juga environment variables Supabase di Vercel sesuai dan jangan pernah memasukkan `service_role` key ke kode frontend atau repository.

## 17. Dokumentasi Terkait

- `docs/PRD.md` — kebutuhan produk, user story, ruang lingkup, pembagian tanggung jawab, dan kriteria penerimaan.
- `docs/design-map.md` — pemetaan desain Figma dan implementasi.
- `docs/HANDOVER.md` — informasi teknis dan serah terima proyek.

Untuk pengumpulan Modul 7, pastikan repository GitHub dapat diakses publik, README tersedia di repository, dan PRD disertakan dalam format PDF sesuai instruksi tugas.

---

**Priori — Smart Priority Task**  
VINIX Batch 5 | Modul 7 | Kelompok 19
