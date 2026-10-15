# Priori: Smart Priority Task

**Modul 7 | VINIX Batch 5 | Kelompok 19**
Divisi: Web & UI/UX Developer

## Tentang Proyek

Priori adalah prototipe website pengelolaan tugas untuk mahasiswa. Website ini memusatkan pencatatan tugas kuliah, memantau status pengerjaan, menampilkan deadline, dan membantu mengenali tugas yang perlu diprioritaskan.

Proyek ini menjawab masalah yang sering dialami mahasiswa: informasi tugas yang tersebar, deadline yang berdekatan, dan kesulitan menentukan tugas mana yang harus dikerjakan lebih dulu.

Pekerjaan Modul 7 mengubah hasil riset dan desain Figma tim sebelumnya menjadi prototipe web interaktif. Fitur yang benar-benar berjalan dibedakan dengan jelas dari layar atau interaksi yang hanya simulasi (lihat bagian Status Fitur).

## Tautan

| Item                   | Link                                                                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Desain Figma (Modul 5) | [Buka desain Priori](https://www.figma.com/design/JFSkyYMAdzRiTfJcK7KjiL/Prototipe-Kelompok-19?node-id=0-1&t=a5sTTIdJfLxgTS2p-1) |
| Repositori GitHub      | https://github.com/fyrdakk/priori_kelompok19                                                                                     |
| Demo (opsional)        | `[ISI]`                                                                                                                          |
| PRD                    | `docs/PRD_Priori_Kelompok19_Modul7.pdf`                                                                                          |

## Anggota Kelompok 19

- Firda Nabilah
- Deni Anugrah Hasibuan
- Dewangga Arka Putra
- Luthfi Eka Saputra
- Komsiata Amelia Sari

---

## Status Fitur

| Kemampuan                                                                          | Status                                                                                          |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Routing 13 halaman, route 404, layout publik/aplikasi                              | Nyata berjalan                                                                                  |
| Navigasi, hamburger/drawer mobile                                                  | Nyata berjalan; Drawer mobile memiliki focus trap dan dukungan Escape                           |
| Indeks, Login, Registrasi                                                          | Nyata berjalan; autentikasi simulasi berbasis localStorage                                      |
| Tambah, lihat, edit, hapus tugas; ubah status terpisah                             | Placeholder rute; implementasi fitur pada Fase 4                                                |
| Pencarian dan filter tugas                                                         | Placeholder rute; implementasi fitur pada Fase 4                                                |
| Validasi form, umpan balik sukses/kosong/error                                     | Nyata berjalan                                                                                  |
| Dashboard ringkasan status                                                         | Placeholder rute; implementasi fitur pada Fase 5                                                |
| Pengingat H-3 / H-1 / Terlambat                                                    | Terbatas: dihitung saat halaman Notifikasi dibuka, **bukan** notifikasi otomatis terjadwal      |
| Login dan Registrasi                                                               | **Simulasi nyata** (akun demo dan sesi di localStorage, tanpa backend, tanpa keamanan produksi) |
| Profil dan Pengaturan                                                              | Placeholder rute pada Fase 2                                                                    |
| Database server, sinkron lintas perangkat, notifikasi push, integrasi pihak ketiga | Di luar cakupan                                                                                 |

> Perbarui tabel ini setiap ada fitur yang berubah status.

## Fitur Utama

- 13 halaman: Indeks, Login, Registrasi, Dashboard, Semua Tugas, Detail, Tambah, Edit, Notifikasi, Sukses, Kosong/Error, Profil, Pengaturan.
- Landing page dengan akses ke Login dan Registrasi.
- Form Login dan Registrasi dengan umpan balik validasi.
- Dashboard dengan ringkasan tugas per status.
- Halaman Semua Tugas dengan pencarian dan filter.
- Form Tambah Tugas, serta halaman Detail dan Edit Tugas.
- Ubah status tugas dan hapus tugas (dengan modal konfirmasi).
- Kondisi sukses, kosong, validasi, dan error.
- Prioritas berbasis aturan sederhana (deadline + tingkat kesulitan), bukan AI.
- Tata letak responsif untuk layar mobile dan desktop.
- Halaman rujukan internal `/_komponen` untuk melihat varian komponen Fase 2.

### Data Tugas

- Mata kuliah
- Judul tugas
- Deadline
- Tingkat kesulitan
- Status
- Estimasi waktu pengerjaan (opsional)
- Deskripsi atau catatan

### Status Tugas

- Belum Dikerjakan
- Sedang Dikerjakan
- Selesai Dikerjakan

---

## Teknologi

- Vite 7 + React 19 + React Router 7
- JavaScript dengan CSS biasa, mobile-first
- ESLint dengan flat config
- Prettier untuk format kode
- Vitest untuk unit test fungsi murni
- Alat AI: GitHub Copilot

> Design token tersedia di `src/styles/tokens.css`. Akun demo dan sesi autentikasi Fase 3 menggunakan localStorage.

## Kebutuhan

- Browser modern
- Code editor seperti Visual Studio Code atau Antigravity
- [Node.js](https://nodejs.org) versi LTS dan Git

## Menjalankan Secara Lokal

```bash
# 1. Clone repositori
git clone https://github.com/fyrdakk/priori_kelompok19.git
cd priori_kelompok19

# 2. Pasang dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev
```

Buka alamat yang tampil di terminal (biasanya `http://localhost:5173`).

Build produksi dan pratinjau:

```bash
npm run build
npm run preview
```

### Akun Demo (simulasi)

Daftar lewat halaman Registrasi, atau gunakan akun contoh: `[ISI jika disediakan]`.

---

## Struktur Proyek

```text
priori_kelompok19/
├── docs/                 # Dokumentasi proyek
├── public/assets/        # Logo, ikon, gambar
├── src/
│   ├── components/       # Button, Input, Select, Textarea, Card, Badge, Modal, Navbar, Drawer
│   ├── pages/            # Halaman aplikasi
│   ├── store/            # State tugas dan localStorage
│   ├── utils/            # Fungsi murni dan utilitas
│   └── styles/           # Gaya global dan design token
├── eslint.config.js      # Konfigurasi ESLint
├── vite.config.js        # Konfigurasi Vite dan React
├── vitest.config.js      # Konfigurasi Vitest
├── .prettierrc           # Konfigurasi Prettier
├── index.html
├── package.json
├── README.md
└── PRD.md
```

PDF desain dan PRD teks juga tersedia di root repositori pada Fase 0.

---

## Tahapan Pengerjaan: dari Prototipe Figma ke MVP

Centang saat selesai. Detail lengkap ada di PRD bagian 8.

- [x] **Fase 0, Setup repo dan PRD:** repo publik, inisialisasi proyek, PRD dan README awal
- [x] **Fase 1, Ekstraksi desain:** petakan frame/komponen Figma, ekstrak design token dan aset
- [x] **Fase 2, Fondasi UI:** routing, layout, komponen dasar (Button, Input, Card, Badge, Modal, Navbar/Drawer)
- [x] **Fase 3, Halaman publik:** Indeks, Login, Registrasi dengan validasi (autentikasi simulasi)
- [ ] **Fase 4, Inti pengelolaan tugas:** store + localStorage, Tambah, Semua Tugas (cari/filter), Detail, Edit, ubah status, hapus dengan modal
- [ ] **Fase 5, Halaman pendukung:** Dashboard, Notifikasi, Sukses, Kosong/Error, Profil, Pengaturan
- [ ] **Fase 6, Responsif dan poles:** uji 360 / 768 / 1280 px, perbaiki layout, aksesibilitas dasar
- [ ] **Fase 7, Audit dan pengumpulan:** uji semua AC, lengkapi dokumentasi, ekspor PRD ke PDF

### Definisi MVP Selesai

- Alur utama berjalan tanpa hambatan: Indeks → Login/Registrasi → Dashboard → Semua Tugas → Tambah → Detail → Edit / Ubah status / Hapus → kembali.
- Acceptance criteria AC-01 sampai AC-15 lulus uji manual.
- Minimal 2 interaksi dinamis dapat didemonstrasikan; tidak ada crash atau runtime error.
- Tidak ada klaim fitur backend, database, atau notifikasi otomatis yang belum dibuat.

---

## Alur Kerja Git

- Repositori publik; branch `main` selalu bisa dijalankan.
- Pekerjaan per fitur di branch `feat/<nama-fitur>`, lalu digabung lewat pull request atau merge yang rapi.
- Format pesan commit: `tipe: deskripsi singkat`

| Tipe       | Penggunaan                        |
| ---------- | --------------------------------- |
| `feat`     | Fitur baru                        |
| `fix`      | Perbaikan bug                     |
| `style`    | Perubahan tampilan/gaya           |
| `docs`     | Dokumentasi                       |
| `chore`    | Setup dan konfigurasi             |
| `refactor` | Perapian kode tanpa ubah perilaku |

Contoh: `feat: add task store and add-task form`, `fix: responsive layout on mobile`.

Target: minimal 5 commit deskriptif (syarat rubrik); target tim ≥ 15 commit dari semua anggota.

---

## Kontribusi Anggota

Isi sesuai pembagian kerja nyata, dengan bukti dari commit atau PR.

| Anggota               | Tanggung jawab utama | Bukti (commit/PR) |
| --------------------- | -------------------- | ----------------- |
| Firda Nabilah         | `[ISI]`              | `[ISI]`           |
| Deni Anugrah Hasibuan | `[ISI]`              | `[ISI]`           |
| Dewangga Arka Putra   | `[ISI]`              | `[ISI]`           |
| Luthfi Eka Saputra    | `[ISI]`              | `[ISI]`           |
| Komsiata Amelia Sari  | `[ISI]`              | `[ISI]`           |

---

## Log Pengembangan dengan AI

Catat setiap prompt yang berarti, berdasarkan pekerjaan nyata tim, bukan prompt karangan. Kerangka prompt yang dipakai: **Peran → Konteks (potongan PRD + token + frame Figma) → Tugas (satu halaman/komponen) → Batasan → Keluaran**.

| No  | Fase    | Tool AI | Ringkasan prompt | Hasil   | Perbaikan manual setelahnya |
| --- | ------- | ------- | ---------------- | ------- | --------------------------- |
| 1   | `[ISI]` | `[ISI]` | `[ISI]`          | `[ISI]` | `[ISI]`                     |
| 2   | `[ISI]` | `[ISI]` | `[ISI]`          | `[ISI]` | `[ISI]`                     |
| 3   | `[ISI]` | `[ISI]` | `[ISI]`          | `[ISI]` | `[ISI]`                     |

### Contoh Bentuk Prompt (ganti dengan prompt asli tim)

```text
Peran: Kamu frontend developer yang mengimplementasikan desain Figma "Priori".
Konteks: [tempel potongan PRD halaman Tambah Tugas + design token + deskripsi frame Figma]
Tugas: Buat halaman Tambah Tugas dengan form mata kuliah, judul, deadline,
       tingkat kesulitan, status, estimasi jam, dan deskripsi.
Batasan: React + Vite, tanpa backend, simpan ke localStorage lewat store,
         validasi sesuai PRD, mobile-first, tidak ada tombol yang mati.
Keluaran: kode komponen + daftar asumsi.
```

### Log Perbaikan Manual

| No  | Masalah dari keluaran AI | Perbaikan manual | Pelaku  | Commit  |
| --- | ------------------------ | ---------------- | ------- | ------- |
| 1   | `[ISI]`                  | `[ISI]`          | `[ISI]` | `[ISI]` |
| 2   | `[ISI]`                  | `[ISI]`          | `[ISI]` | `[ISI]` |

### Tinjauan Manual

Sebelum dikumpulkan, catat pengecekan dan perbaikan manual yang sudah dilakukan tim, misalnya:

- Perbandingan tampilan dengan desain Figma
- Pengecekan layout responsif di mobile dan desktop
- Pengujian navigasi dan interaksi
- Pengujian validasi form dan umpan balik
- Perbaikan masalah layout, tautan rusak, atau runtime error

Tandai sebuah pengecekan selesai hanya setelah benar-benar diuji.

---

## Pengujian

Ceklis uji per acceptance criteria ada di PRD bagian 10. Ringkasnya:

- [ ] Semua tombol/tautan utama mengarah ke halaman yang benar (tidak ada dead end)
- [ ] Validasi form tampil untuk input kosong/tidak valid
- [ ] Tambah, edit, ubah status, dan hapus berjalan; data bertahan setelah refresh
- [ ] Pencarian dan filter bekerja; hasil kosong ditangani
- [ ] Drawer mobile dan modal hapus berfungsi
- [ ] Minimal dua interaksi dinamis bisa didemonstrasikan
- [ ] Kondisi sukses, kosong, dan error memberi umpan balik yang jelas
- [ ] Tampilan tidak rusak di 360, 768, dan 1280 px
- [ ] Konsol browser bersih dari error

Tangkapan layar: `[ISI: tautkan ke docs/screenshots/]`

---

## Cakupan Proyek

Priori dikembangkan sebagai prototipe web interaktif Modul 7. Fitur yang butuh backend produksi, sinkronisasi database, notifikasi terjadwal di perangkat, integrasi pihak ketiga, atau rekomendasi AI tingkat lanjut tidak dianggap tersedia, kecuali tim sudah membuat dan mengujinya. Jangan dokumentasikan backend, database, atau notifikasi otomatis yang belum ada.

## Lisensi dan Catatan

Proyek ini dibuat untuk keperluan akademik (VINIX Batch 5, Modul 7). Autentikasi bersifat simulasi dan tidak boleh dipakai untuk menyimpan data sensitif.

## Ucapan Terima Kasih

Proyek ini dibangun di atas hasil riset pengguna, persona, user flow, wireframe, dan prototipe Figma tim sebelumnya.
