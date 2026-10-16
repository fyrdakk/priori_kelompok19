# Dokumen Serah Terima & Rincian Perubahan Proyek (Handover Document)
## Priori — Smart Priority Task (Modul 7, Kelompok 19)

Dokumen ini ditujukan kepada seluruh anggota Kelompok 19 untuk melihat secara mendalam seluruh file yang telah dibuat, diubah, arsitektur data, serta cara menjalankan dan melanjutkan pengerjaan proyek Priori.

---

## 1. Informasi Branch Git & Alur Sinkronisasi

* **Branch Aktif:** `feat/fase-7-audit-and-submission`
  * Branch ini memuat seluruh perubahan lengkap dari **Fase 4** (Inti Pengelolaan Tugas), **Fase 5** (Halaman Pendukung), **Fase 6** (Responsif & Poles Aksesibilitas), hingga **Fase 7** (Audit & Ceklis Kepatuhan AC-01 s.d. AC-15).
* **Perintah untuk Mengunggah ke Remote (Push):**
  ```bash
  git push -u origin feat/fase-7-audit-and-submission
  ```
* **Cara Anggota Tim Menarik Branch Ini di Komputer Masing-Masing:**
  ```bash
  git fetch origin
  git checkout feat/fase-7-audit-and-submission
  npm install
  npm run test
  npm run dev
  ```
* **Cara Menggabungkan (*Merge*) ke Branch `main` (Setelah Direview):**
  ```bash
  git checkout main
  git merge feat/fase-7-audit-and-submission
  git push origin main
  ```

---

## 2. Rincian Detil Seluruh File yang Dibuat dan Diubah

### A. State Management & Utilitas Logika Murni (`src/store/` dan `src/utils/`)

| File Path | Status | Deskripsi & Tanggung Jawab |
| :--- | :---: | :--- |
| `src/store/tasks.js` | **Baru** | Store data tugas berbasis `localStorage` (`priori.demo.tasks`). Dilengkapi *safe fallback* (`try/catch`), inisialisasi 3 *seed tasks* bawaan secara otomatis jika storage kosong, serta fungsi CRUD lengkap (`getTasks`, `getTaskById`, `createTask`, `updateTask`, `updateTaskStatus`, `deleteTask`, `resetTasks`). |
| `src/store/tasks.test.js` | **Baru** | Unit test Vitest untuk menguji operasi CRUD dan safe fallback store tugas (6 skenario pengujian lulus). |
| `src/utils/priority.js` | **Baru** | Logika murni penentu prioritas otomatis (**Tinggi**, **Sedang**, **Rendah**) berbasis *rule-based* tanpa AI eksternal: memadukan sisa hari menuju deadline (H-1/H-2/H-3) dan tingkat kesulitan (Sulit/Sedang/Mudah), serta otomatis Rendah jika tugas sudah selesai. |
| `src/utils/priority.test.js` | **Baru** | Unit test Vitest untuk formula kalkulasi prioritas (5 skenario pengujian lulus). |
| `src/utils/taskValidation.js` | **Baru** | Logika murni validasi form tugas (Mata Kuliah wajib, Judul Tugas wajib, format tanggal deadline valid, pilihan tingkat kesulitan Mudah/Sedang/Sulit). |
| `src/utils/taskValidation.test.js` | **Baru** | Unit test Vitest untuk validasi input form tugas (3 skenario pengujian lulus). |
| `src/utils/notifications.js` | **Baru** | Logika murni penghitung pengingat tenggat waktu (*Terlambat*, *Hari Ini*, *H-1*, dan *H-3*) yang dihitung secara *on-demand* saat halaman dibuka (sesuai batasan PRD AC-11, transparan tanpa klaim notifikasi background otomatis). |
| `src/utils/notifications.test.js` | **Baru** | Unit test Vitest untuk kalkulasi pengingat deadline (3 skenario pengujian lulus). |

---

### B. Halaman Pengelolaan Tugas Inti (`src/pages/`) — *Fase 4*

| File Path | Rute | Deskripsi & Fitur |
| :--- | :--- | :--- |
| `src/pages/TasksPage.jsx` | `/tasks` | Halaman **Semua Tugas**: Menampilkan kartu-kartu tugas dengan badge status & prioritas, pencarian teks instan (judul atau mata kuliah), filter chip status (*Semua*, *Belum Dikerjakan*, *Sedang Dikerjakan*, *Selesai Dikerjakan*), tombol Tambah Tugas, banner alert notifikasi sukses/hapus, serta *Empty State* ketika hasil pencarian nihil. |
| `src/pages/AddTaskPage.jsx` | `/tasks/new` | Halaman **Tambah Tugas**: Form lengkap (Mata Kuliah, Judul, Deadline, Kesulitan, Status, Estimasi Waktu, Catatan/Deskripsi) dengan validasi interaktif dan pesan error terhubung via `aria-describedby`. |
| `src/pages/TaskDetailPage.jsx` | `/tasks/:taskId` | Halaman **Detail Tugas**: Menampilkan rincian lengkap tugas, fitur **Ubah Status Terpisah** (update cepat status tugas tanpa membuka form edit), tombol menuju Edit Tugas, dan tombol Hapus Tugas yang memicu modal konfirmasi dialog. |
| `src/pages/EditTaskPage.jsx` | `/tasks/:taskId/edit` | Halaman **Edit Tugas**: Form pembaruan seluruh informasi tugas dengan data awal yang otomatis terisi (*pre-filled*), validasi input, dan penyimpanan perubahan ke `localStorage`. |

---

### C. Halaman Pendukung (`src/pages/`) — *Fase 5*

| File Path | Rute | Deskripsi & Fitur |
| :--- | :--- | :--- |
| `src/pages/DashboardPage.jsx` | `/dashboard` | Halaman **Dashboard** (AC-03): Sapaan nama mahasiswa yang sedang login, 4 kartu statistik ringkasan (*Total Tugas*, *Selesai*, *Sedang Dikerjakan*, *Belum Dikerjakan*), daftar *"Tugas Perlu Perhatian"* (tugas berprioritas Tinggi/deadline terdekat yang belum selesai), dan pintasan cepat. |
| `src/pages/NotificationsPage.jsx` | `/notifications` | Halaman **Notifikasi** (AC-11): Daftar pengingat deadline aktif (*Terlambat*, *H-1*, *H-3*) dilengkapi tombol *"Lihat Tugas →"*, dan *Empty State* jika tidak ada deadline mendesak. |
| `src/pages/SuccessPage.jsx` | `/success` | Halaman **Sukses/Konfirmasi** (AC-06): Visualisasi grafis checklist sukses sesuai frame Figma (`Figma Protoype/Sukses Konfirmasi/`) dan tombol kembali ke Dashboard/Tugas tanpa jalan buntu (*no dead end*). |
| `src/pages/EmptyErrorPage.jsx` | `/empty-error` | Halaman **Kosong/Error** (AC-12): Contoh antarmuka interaktif kondisi data kosong (*Empty State*) dan galat (*Error State*) beserta tombol aksi pemulihan (*recovery actions*). |
| `src/pages/ProfilePage.jsx` | `/profile` | Halaman **Profil**: Menampilkan informasi akun pengguna (Nama, Email, Mahasiswa Aktif, Status Akun Demo), statistik progres tugas, dan tombol Logout dengan modal konfirmasi. |
| `src/pages/SettingsPage.jsx` | `/settings` | Halaman **Pengaturan**: Informasi batasan prototipe dan tombol utilitas **Reset Data Tugas ke Awal** untuk mempermudah penilai mengembalikan data ke *seed data* awal. |

---

### D. Komponen Antarmuka & Routing (`src/components/` & `src/App.jsx`)

| File Path | Status | Deskripsi & Perubahan |
| :--- | :---: | :--- |
| `src/components/PriorityBadge.jsx` | **Baru** | Komponen visual badge prioritas (*Tinggi*, *Sedang*, *Rendah*) berbasis warna design token (`tokens.css`). |
| `src/components/Navbar.jsx` | **Diubah** | Menyembunyikan tombol logout di header mobile agar navbar ponsel tetap bersih (hanya logo + tombol hamburger `☰`), serta menambahkan tombol *"Keluar (Logout)"* di dalam menu Drawer samping mobile. |
| `src/App.jsx` | **Diubah** | Mengganti seluruh rute *placeholder* dengan komponen halaman nyata di atas. Seluruh 13 halaman aplikasi kini terhubung dan fungsional. |

---

### E. Styling & Aksesibilitas (`src/styles/`) — *Fase 6*

| File Path | Status | Deskripsi & Perubahan |
| :--- | :---: | :--- |
| `src/styles/global.css` | **Diubah** | • Target sentuh minimum 44px pada `.filter-chip` (`min-height: var(--control-min-height)`).<br>• Indikator fokus keyboard yang jelas untuk `button:focus-visible`.<br>• Styling kartu statistik dashboard, kartu notifikasi H-1/H-3/terlambat, checklist sukses, dan tata letak responsif 360 px, 768 px, dan 1280 px tanpa *horizontal scroll*. |

---

### F. Dokumentasi Proyek (`README.md` & `docs/`) — *Fase 7*

| File Path | Status | Deskripsi & Perubahan |
| :--- | :---: | :--- |
| `README.md` | **Diubah** | • Memperbarui tabel *Status Fitur* (Semua Tugas, Dashboard, Profil & Pengaturan menjadi "Nyata berjalan").<br>• Mencentang seluruh tahapan pengerjaan (Fase 0 s.d. Fase 7 selesai).<br>• Mencentang seluruh ceklis *Pengujian* (9 kriteria pengujian lulus).<br>• Mencatat 4 entri pengerjaan pada tabel *Log Pengembangan dengan AI*. |
| `docs/PRD.md` | **Baru** | Salinan spesifikasi PRD resmi di folder `docs/` yang siap digunakan untuk ekspor dokumen PDF. |
| `docs/HANDOVER.md` | **Baru** | Dokumen serah terima ini. |

---

## 3. Arsitektur Data & Alur Kerja Aplikasi

1. **Penyimpanan Lokal (LocalStorage):**
   * Sesi Autentikasi: `'priori.demo.session'` (Nama & Email pengguna yang login).
   * Akun Terdaftar: `'priori.demo.account'`.
   * Data Tugas: `'priori.demo.tasks'`.
2. **Penanganan Initial Data (Seed Data):**
   * Saat pertama kali dibuka atau jika storage dibersihkan, sistem otomatis memuat 3 tugas contoh (*Membuat Wireframe - UI/UX Design*, *Laporan Praktikum - Basis Data*, dan *Rangkuman Materi - Cloud Computing*) sehingga penilai langsung dapat mencoba interaksi pencarian, filter, dan detail.
3. **Reset Data Kapan Saja:**
   * Di menu `/settings`, penilai atau pengembang dapat menekan tombol *"Reset Data Tugas ke Awal"* untuk mengembalikan data ke kondisi bersih.

---

## 4. Hasil Verifikasi Kualitas Kode

Seluruh pengujian otomatis dan build telah diverifikasi dan **LULUS 100%**:

```text
✓ Vitest: 6 test suites, 23 unit tests PASSED (0 failures)
✓ ESLint: 0 errors, 0 warnings
✓ Prettier: All matched files use Prettier code style
✓ Vite Build: 77 modules transformed, production bundle dist/ berhasil dibuat
✓ Audit Browser: Diuji pada 360x640 (Mobile), 768x1024 (Tablet), 1280x800 (Desktop)
```

---

## 5. Tugas Lanjutan yang Bisa Dikerjakan Rekan Tim (Opsional)

1. **Mengisi Nama Anggota di README.md:**
   * Buka bagian *Kontribusi Anggota* di `README.md` (baris 198) dan lengkapi nama masing-masing anggota kelompok serta bukti PR/commit mereka.
2. **Tangkapan Layar (*Screenshots*):**
   * Tangkap beberapa screenshot tampilan di layar ponsel (360px) dan desktop (1280px) lalu simpan ke folder `docs/screenshots/` jika dosen meminta bukti visual tambahan.
3. **Ekspor PRD ke PDF:**
   * Jika tugas meminta pengumpulan fisik PDF dokumen PRD, buka file `docs/PRD.md` lalu gunakan fitur *Print to PDF* atau *Export to PDF*.
4. **Merge ke `main`:**
   * Setelah rekan tim meninjau dan menyetujui, gabungkan branch `feat/fase-7-audit-and-submission` ke branch `main`.

---

## 6. Serah Terima untuk Komsiata Amelia Sari (Dokumentasi Pengumpulan)

Bagian kode aplikasi sudah selesai seluruhnya: Firda (PRD, awal repo), Deni (Fase 0-3), Luthfi (Fase 4-7), dan Dewangga (penyelarasan antarmuka Figma, PR #4). Pekerjaan yang tersisa adalah melengkapi slot `[ISI]` di dokumentasi — inilah tugas Komsiata, satu komit per tugas dengan pesan format `tipe: deskripsi`.

### A. Daftar Tugas (urutan disarankan: 1, 2, 3, lalu 4)

| No | Tugas | Berkas yang disentuh | Rincian |
| :---: | :--- | :--- | :--- |
| 1 | Ekspor PRD ke PDF | `docs/PRD_Priori_Kelompok19_Modul7.pdf` (baru) | Buka `docs/PRD.md`, gunakan *Print to PDF*/*Export to PDF*, simpan dengan nama yang sama seperti tautan di README baris 21 supaya tautan mati itu otomatis berfungsi. Komit: `docs: tambah PDF PRD`. |
| 2 | Isi tabel Kontribusi Anggota | `README.md` (bagian Kontribusi) | Kumpulkan dari riwayat komit/PR: Firda = PRD dan awal repo (PR #1, #2); Deni = Fase 0-3; Luthfi = Fase 4-7; Dewangga = antarmuka Figma dan audit (PR #4); Komsiata = dokumentasi pengumpulan (tugas ini). Komit: `docs: isi tabel kontribusi anggota`. |
| 3 | Isi Akun Demo dan Log Perbaikan Manual | `README.md` (baris ~125 dan ~236) | Daftar lewat halaman Registrasi aplikasi, catat email dan kata sandi demo di README. Untuk Log Perbaikan Manual, salin daftar perbaikan nyata yang tercatat di komit `8426240`, `58e37da`, `01d985d`, `fdeb2a0` (sejajarkan navbar, perbaiki luapan kartu, format tanggal, jarak form, sempitkan laci). Komit: `docs: isi akun demo dan log perbaikan manual`. |
| 4 | Tangkapan layar tambahan untuk butir pengujian 2, 4, 5, 7 | `docs/screenshots/` (menambah berkas baru saja) | Empat gambar: (a) form Tambah Tugas dengan pesan galat validasi, (b) hasil pencarian tanpa ketemu yang menampilkan keadaan kosong, (c) modal konfirmasi hapus terbuka, (d) laci navigasi ponsel terbuka. Jangan ubah delapan berkas gambar yang sudah ada. Setelah itu ubah baris "Tangkapan layar" di README menjadi peta butir pengujian ke nama berkas. Komit: `docs: tambah tangkapan layar validasi, keadaan kosong, dan modal`. |

### B. Tata cara kerja (aturan yang sama seperti anggota lain)

1. Minta Firda mengundang akun GitHub Komsiata sebagai kolaborator repo `fyrdakk/priori_kelompok19` — tanpa itu belum bisa mengunggah.
2. Tarik `main` terbaru: `git checkout main && git pull origin main`, lalu buat cabang: `git checkout -b feat/komsiata-dokumentasi`.
3. Satu tugas satu komit, format pesan `tipe: deskripsi` (sesuai kesepakatan tim).
4. Jangan mengubah kode di `src/` sama sekali; pekerjaan ini murni dokumentasi dan tangkapan layar.
5. Setelah selesai: `git push -u origin feat/komsiata-dokumentasi`, buka pull request ke `main`, minta Firda atau Luthfi meninjau dan menggabungkan.
6. Sesuai `AGENTS.md`: jangan mencentang apa pun sebagai selesai sebelum benar-benar selesai dan diuji.

### C. Bukti yang dihasilkan Komsiata nanti

Gerbang rubrik yang tertutup oleh pekerjaan ini: tabel Kontribusi Anggota terisi semua anggota (syarat kontribusi nyata), akun demo siap dipakai penilai, Log Perbaikan Manual terisi (pasangan Log Pengembangan AI), PRD PDF tersedia (syarat Fase 7), dan empat butir pengujian 2, 4, 5, 7 punya bukti gambar.

Target komit tim (minimal 15 komit dari semua anggota) otomatis terpenuhi setelah Komsiata menyelesaikan tugas di atas di cabangnya.
