# Dokumen Serah Terima dan Rincian Perubahan Proyek (Handover)

## Priori — Smart Priority Task
**Modul 7 · Kelompok 19**

Dokumen ini menjelaskan tahapan pengembangan, struktur berkas penting, arsitektur data, cara menjalankan proyek, kriteria penerimaan, serta pembagian tanggung jawab anggota kelompok. Status pada dokumen perlu diperbarui berdasarkan implementasi dan bukti yang benar-benar tersedia di repository.

## 1. Informasi Git dan Sinkronisasi

### Branch pengembangan

Branch yang disebut dalam catatan serah terima adalah `feat/fase-7-audit-and-submission`. Pastikan nama branch dan status remote diperiksa kembali melalui Git sebelum mengikuti perintah di bawah.

Untuk mengirim branch ke remote:

```bash
git push -u origin feat/fase-7-audit-and-submission
```

Untuk mengambil branch dari remote:

```bash
git fetch origin
git checkout feat/fase-7-audit-and-submission
npm install
npm run test
npm run dev
```

Untuk menggabungkan perubahan ke `main`, lakukan setelah pull request ditinjau dan disetujui. Sesuaikan langkah dengan alur kerja tim dan pastikan `main` sudah mutakhir.

```bash
git checkout main
git pull origin main
git merge feat/fase-7-audit-and-submission
git push origin main
```

Jangan melakukan merge langsung apabila tim menggunakan pull request sebagai prosedur wajib.

## 2. Tahapan Pengembangan Fase 0–7

Fase adalah tahapan proses pengembangan, bukan daftar halaman website.

| Fase | Nama | Cakupan pekerjaan |
|---|---|---|
| **Fase 0** | Setup proyek dan repository | Inisialisasi proyek, repository GitHub, struktur awal, PRD, dan README awal. |
| **Fase 1** | Ekstraksi desain | Memetakan desain Figma, frame, komponen, aset, dan design token yang dapat diidentifikasi. |
| **Fase 2** | Fondasi antarmuka | Menyiapkan routing, layout, serta komponen dasar seperti Button, Input, Card, Badge, Modal, Navbar, dan Drawer. |
| **Fase 3** | Halaman publik | Mengembangkan halaman Indeks, Login, dan Registrasi beserta validasi yang sesuai dengan prototipe. |
| **Fase 4** | Pengelolaan tugas inti | Mengembangkan daftar tugas, tambah tugas, detail tugas, edit tugas, perubahan status, hapus, pencarian, dan filter. |
| **Fase 5** | Halaman pendukung | Mengembangkan Dashboard, Notifikasi, Sukses/Konfirmasi, Kosong/Error, Profil, dan Pengaturan. |
| **Fase 6** | Responsivitas dan aksesibilitas | Memeriksa tampilan mobile, tablet, dan desktop; fokus keyboard; ukuran target sentuh; serta perbaikan tata letak. |
| **Fase 7** | Audit dan persiapan pengumpulan | Memeriksa kriteria penerimaan, menguji alur utama, menyelaraskan dokumentasi, dan menyiapkan berkas pengumpulan. |

## 3. Pembagian Tanggung Jawab Anggota

Pembagian berikut merangkum tanggung jawab yang telah disepakati. Pembagian ini bukan pengganti bukti kontribusi; perubahan kode dan pekerjaan aktual tetap perlu dicocokkan dengan commit, pull request, dan berkas yang dikerjakan.

| Anggota | Tanggung jawab |
|---|---|
| **Firda Nabilah** | Menyusun PRD dan menyiapkan repository pada tahap awal; memperbaiki dan menyempurnakan desain halaman Indeks, Navbar, dan Footer; membantu koordinasi, integrasi, serta pengelolaan GitHub dan merge. |
| **Deni Anugrah Hasibuan** | Mengimplementasikan halaman Indeks, Login, dan Registrasi. Perbaikan desain lanjutan pada Indeks/Navbar/Footer yang dilakukan Firda dicatat sebagai kontribusi terpisah dari implementasi awal. |
| **Dewangga Arka Putra** | Menyelaraskan antarmuka dengan rancangan Figma dan membantu penyesuaian visual yang menjadi tanggung jawabnya. |
| **Luthfi Eka Saputra** | Mengembangkan fitur pengelolaan tugas inti dan halaman pendukung, termasuk pekerjaan yang dicatat pada Fase 4–7. Rincian file tetap mengikuti perubahan yang benar-benar dibuat. |
| **Komsiata Amelia Sari** | Bertanggung jawab pada dokumentasi pengumpulan dan pengujian: memeriksa konsistensi README/PRD/HANDOVER, merapikan bukti pengujian, dan mendokumentasikan hasil yang benar-benar telah diuji. Jangan menandai tugas ini selesai sebelum hasilnya tersedia. |

**Catatan:** Jika kontribusi perlu dilaporkan secara formal, gunakan riwayat commit dan pull request sebagai bukti. Jangan menyatakan bahwa seorang anggota telah menyelesaikan tugas atau pengujian sebelum ada bukti yang sesuai.

## 4. Rincian Berkas dan Fungsinya

### A. Penyimpanan data dan utilitas (`src/store/` dan `src/utils/`)

| Berkas | Fungsi |
|---|---|
| `src/store/tasks.js` | Mengelola data tugas di `localStorage` dengan kunci `priori.demo.tasks`. Catatan handover menyebut fungsi CRUD, penanganan kegagalan penyimpanan, dan data awal apabila penyimpanan kosong. |
| `src/store/tasks.test.js` | Pengujian unit untuk operasi penyimpanan tugas. |
| `src/utils/priority.js` | Menghitung kategori prioritas Tinggi, Sedang, atau Rendah berdasarkan aturan yang ditetapkan aplikasi. Bukan layanan AI eksternal. |
| `src/utils/priority.test.js` | Pengujian unit logika prioritas. |
| `src/utils/taskValidation.js` | Validasi data formulir tugas, termasuk mata kuliah, judul, deadline, dan tingkat kesulitan. |
| `src/utils/taskValidation.test.js` | Pengujian unit validasi formulir tugas. |
| `src/utils/notifications.js` | Menghitung pengingat tenggat, misalnya terlambat, hari ini, H-1, atau H-3 saat data diperiksa. Ini tidak berarti ada notifikasi otomatis di latar belakang. |
| `src/utils/notifications.test.js` | Pengujian unit perhitungan pengingat tenggat. |

Jumlah skenario pengujian dan status lulus harus mengikuti hasil terbaru dari perintah `npm run test`, bukan hanya catatan lama.

### B. Halaman pengelolaan tugas inti — Fase 4

| Berkas | Rute | Fungsi |
|---|---|---|
| `src/pages/TasksPage.jsx` | `/tasks` | Menampilkan daftar tugas, status dan prioritas, pencarian, filter status, tombol tambah tugas, umpan balik tindakan, serta kondisi kosong jika tidak ada hasil. |
| `src/pages/AddTaskPage.jsx` | `/tasks/new` | Form tambah tugas yang memuat informasi tugas dan validasi input. |
| `src/pages/TaskDetailPage.jsx` | `/tasks/:taskId` | Menampilkan detail tugas, menyediakan perubahan status, akses ke edit, dan tindakan hapus dengan konfirmasi. |
| `src/pages/EditTaskPage.jsx` | `/tasks/:taskId/edit` | Form edit dengan data awal terisi, validasi, dan penyimpanan perubahan. |

### C. Halaman pendukung — Fase 5

| Berkas | Rute | Fungsi |
|---|---|---|
| `src/pages/DashboardPage.jsx` | `/dashboard` | Ringkasan jumlah tugas berdasarkan status, tugas yang perlu diperhatikan, dan pintasan ke fitur utama. |
| `src/pages/NotificationsPage.jsx` | `/notifications` | Menampilkan pengingat deadline dan akses menuju tugas terkait. |
| `src/pages/SuccessPage.jsx` | `/success` | Memberikan konfirmasi keberhasilan dan jalur kembali ke Dashboard atau daftar tugas. |
| `src/pages/EmptyErrorPage.jsx` | `/empty-error` | Menampilkan contoh kondisi data kosong atau kesalahan beserta tindakan lanjutan. |
| `src/pages/ProfilePage.jsx` | `/profile` | Menampilkan informasi akun demo dan tindakan yang tersedia pada halaman profil. |
| `src/pages/SettingsPage.jsx` | `/settings` | Menampilkan informasi pengaturan prototipe dan utilitas reset data apabila fitur tersebut tersedia. |

### D. Komponen antarmuka dan routing

| Berkas | Fungsi |
|---|---|
| `src/components/PriorityBadge.jsx` | Komponen visual untuk label prioritas tugas. |
| `src/components/Navbar.jsx` | Navigasi aplikasi, termasuk perilaku menu pada layar kecil. Catat perubahan tampilan dan perilaku berdasarkan implementasi terbaru. |
| `src/App.jsx` | Mengatur routing dan menghubungkan rute dengan komponen halaman. |
| `src/styles/tokens.css` | Menyimpan variabel desain yang digunakan oleh stylesheet. |
| `src/styles/global.css` | Mengatur gaya global, responsivitas, fokus keyboard, dan komponen antarmuka. |

### E. Dokumentasi

| Berkas | Fungsi |
|---|---|
| `README.md` | Gambaran proyek, cara menjalankan, tautan Figma dan repository, pembagian kontribusi, serta catatan penggunaan AI dan perbaikan manual. |
| `docs/PRD.md` | Spesifikasi kebutuhan produk dan kriteria penerimaan. |
| `docs/HANDOVER.md` | Dokumen serah terima yang menjelaskan fase, struktur berkas, arsitektur, cara menjalankan, pembagian tanggung jawab, dan status pemeriksaan. |
| `docs/design-map.md` | Pemetaan frame desain, halaman PRD, komponen, status akses desain, token, dan aset. |

## 5. Kriteria Penerimaan (AC-01–AC-15)

**AC** adalah singkatan dari *Acceptance Criteria* atau kriteria penerimaan. Kode AC dipakai untuk memeriksa apakah kebutuhan produk sudah dipenuhi. Kode dan arti kriterianya harus sama dengan PRD.

| Kode | Kriteria yang diperiksa |
|---|---|
| **AC-01** | Halaman Indeks dapat dibuka dan menyediakan akses ke Login serta Registrasi. |
| **AC-02** | Navigasi utama mengarahkan pengguna ke halaman yang benar. |
| **AC-03** | Dashboard menampilkan ringkasan total tugas, selesai, sedang dikerjakan, dan belum dikerjakan berdasarkan data. |
| **AC-04** | Form Tambah Tugas memiliki kolom sesuai ruang lingkup produk. |
| **AC-05** | Sistem menampilkan validasi ketika input wajib kosong atau tidak valid. |
| **AC-06** | Setelah penyimpanan berhasil, pengguna memperoleh umpan balik dan dapat kembali ke daftar tugas atau Dashboard. |
| **AC-07** | Detail Tugas menampilkan informasi tugas yang dipilih. |
| **AC-08** | Pengguna dapat mengubah informasi tugas melalui halaman Edit Tugas. |
| **AC-09** | Status tugas dapat diubah tanpa mengedit seluruh informasi tugas. |
| **AC-10** | Pengguna dapat menghapus tugas dan menerima umpan balik yang sesuai. |
| **AC-11** | Pencarian atau filter membantu pengguna menemukan tugas berdasarkan kata kunci atau kategori yang didukung. |
| **AC-12** | Halaman Kosong/Error menyajikan informasi yang jelas dan tindakan lanjutan yang relevan. |
| **AC-13** | Minimal dua interaksi dinamis berfungsi dan dapat didemonstrasikan. |
| **AC-14** | Tidak ada tombol atau tautan utama yang berakhir tanpa tujuan. |
| **AC-15** | Konten dan antarmuka sesuai konteks Priori serta terbaca pada ukuran layar yang didukung. |

**Status AC:** jangan menyatakan semua AC lulus hanya karena tabel ini tersedia. Catat status setiap kriteria berdasarkan pengujian yang benar-benar dilakukan dan bukti yang tersedia.

## 6. Arsitektur Data dan Alur Aplikasi

### Penyimpanan lokal

Catatan proyek menggunakan `localStorage` untuk prototipe:

- `priori.demo.session`: sesi pengguna yang sedang masuk, seperti nama dan email.
- `priori.demo.account`: data akun demo yang terdaftar.
- `priori.demo.tasks`: data tugas.

Karena data disimpan di browser, implementasi ini tidak boleh dijelaskan sebagai sistem dengan backend atau database server apabila layanan tersebut memang belum dibuat.

### Data awal dan reset

Catatan handover menyebut tiga data tugas awal untuk membantu penilai mencoba fitur, yaitu:

- Membuat Wireframe — UI/UX Design
- Laporan Praktikum — Basis Data
- Rangkuman Materi — Cloud Computing

Jika fitur reset tersedia pada halaman `/settings`, gunakan untuk mengembalikan data tugas ke kondisi awal. Periksa implementasi aktual sebelum menyatakan perilaku ini sebagai fitur yang sudah terverifikasi.

## 7. Menjalankan dan Memeriksa Proyek

Pastikan Node.js dan npm tersedia. Dari direktori proyek, jalankan:

```bash
npm install
npm run dev
```

Untuk menjalankan pengujian dan build, gunakan perintah yang tersedia di `package.json`:

```bash
npm run test
npm run build
```

Jalankan `npm run lint` atau `npm run format:check` hanya jika skrip tersebut memang tersedia di `package.json`.

Setelah aplikasi berjalan, periksa setidaknya:

1. Navigasi Indeks, Login, dan Registrasi.
2. Alur menambah, melihat, mengedit, mengubah status, dan menghapus tugas.
3. Pencarian dan filter.
4. Validasi formulir dan umpan balik keberhasilan.
5. Halaman Notifikasi, Profil, Pengaturan, Sukses/Konfirmasi, dan Kosong/Error.
6. Tampilan pada ukuran mobile, tablet, dan desktop.
7. Tidak adanya tombol utama yang berakhir tanpa tujuan.

### Catatan hasil pengujian

Catatan handover sebelumnya menyebut hasil berikut:

```text
Vitest: 6 test suites, 23 unit tests
ESLint: 0 errors, 0 warnings
Prettier: seluruh berkas yang diperiksa sesuai format
Vite Build: 77 modul diproses
Audit tampilan: 360x640, 768x1024, dan 1280x800
```

Angka di atas adalah **catatan hasil yang dilaporkan sebelumnya**, bukan bukti bahwa pengujian baru saja dijalankan. Jalankan kembali perintah terkait dan perbarui catatan ini sesuai hasil aktual sebelum pengumpulan.

## 8. Dokumentasi dan Pengumpulan

Tanggung jawab dokumentasi dan pengujian berada pada Komsiata sesuai pembagian tugas kelompok. Lingkupnya meliputi:

1. Memeriksa konsistensi `README.md`, `docs/PRD.md`, `docs/HANDOVER.md`, dan `docs/design-map.md`.
2. Memastikan daftar halaman, pembagian tugas anggota, fase 0–7, dan AC-01–AC-15 tidak bertentangan antarberkas.
3. Memeriksa instruksi menjalankan aplikasi dan tautan repository/Figma.
4. Mengumpulkan bukti pengujian yang benar-benar diambil, seperti validasi form, kondisi kosong, modal konfirmasi, dan navigasi mobile jika relevan.
5. Mencatat hasil pengujian aktual; jangan mencentang kriteria yang belum diperiksa.
6. Membantu menyiapkan dokumen sesuai format pengumpulan yang ditentukan mentor.

Contoh format pesan commit untuk perubahan dokumentasi:

```bash
git add README.md docs/
git commit -m "docs: selaraskan dokumentasi proyek"
```

Perintah tersebut hanya contoh. Tambahkan berkas yang memang diubah, lalu periksa `git status` sebelum commit. Jika tim menggunakan branch dan pull request, dorong branch dan ajukan pull request sesuai prosedur kelompok.

## 9. Catatan Akhir

Dokumen ini menjadi panduan bersama untuk memahami struktur dan status proyek Priori. Seluruh deskripsi fitur, kontribusi anggota, hasil pengujian, dan status fase harus dapat ditelusuri ke implementasi atau bukti yang tersedia. Apabila ada informasi yang belum diverifikasi, tandai sebagai perlu diperiksa—jangan menyatakannya sudah selesai.