# Product Requirement Document (PRD)

## Priori — Smart Priority Task

**Versi Bahasa Indonesia | Modul 7 | Kelompok 19**

---

## Struktur Empat Konteks PRD

Dokumen ini disusun berdasarkan empat konteks yang diminta dalam tugas: **(1) Peran/Role Persona, (2) Konteks Desain, (3) Batasan/User Story & Scope, dan (4) Luaran/Kriteria Sukses**. Bagian setelah empat konteks utama berisi rincian pendukung, seperti pembagian tanggung jawab, fase pengembangan, dan referensi dokumentasi.

## Informasi Dokumen

| Bagian | Keterangan |
|---|---|
| Nama Produk | Priori — Smart Priority Task |
| Jenis Produk | Website pengelolaan tugas mahasiswa |
| Kelompok | Kelompok 19 |
| Divisi | Web & UI/UX Developer |
| Anggota | Firda Nabilah, Deni Anugrah Hasibuan, Dewangga Arka Putra, Luthfi Eka Saputra, Komsiata Amelia Sari |
| Tahap | Pengembangan prototipe web interaktif Modul 7 |
| Sumber Kebutuhan | Riset pengguna dan persona, User Flow/Wireframe, prototipe Figma, serta implementasi HTML5 dari modul sebelumnya |
| Tautan Figma | [Prototipe Figma Kelompok 19](https://www.figma.com/design/JFSkyYMAdzRiTfJcK7KjiL/Prototipe-Kelompok-19?node-id=0-1&t=a5sTTIdJfLxgTS2p-1) |
| Repository GitHub | [Priori Kelompok 19](https://github.com/fyrdakk/priori_kelompok19) |

## 1. PERAN — ROLE PERSONA

**Peran dalam penyusunan PRD:** bertindak sebagai *Lead Product Manager* teknis yang menerjemahkan masalah pengguna, hasil riset, dan rancangan Figma menjadi kebutuhan produk yang terukur serta dapat diuji. Peran ini merupakan kerangka penyusunan dokumen, bukan klaim bahwa Priori memiliki fitur AI.


### 1.1 Gambaran Produk

**Priori — Smart Priority Task** adalah website yang membantu mahasiswa mencatat, mengelola, dan memantau tugas akademik serta memahami tugas mana yang perlu diprioritaskan.

### 1.2 Target Pengguna

Pengguna sasaran adalah mahasiswa aktif, terutama semester 3–7, yang menerima banyak tugas dari mata kuliah berbeda dengan tenggat waktu yang berdekatan.

### 1.3 Persona Representatif

- **Usia:** sekitar 19–20 tahun.
- **Status:** mahasiswa aktif.
- **Semester:** 3–7.

**Karakteristik**
- Aktif, mandiri, praktis, dan berorientasi menyelesaikan tugas.
- Terbiasa mencatat tugas melalui WhatsApp, Notes, Google Keep, atau kalender.
- Dapat merasa kewalahan ketika tugas menumpuk dan tenggat waktunya berdekatan.
- Membutuhkan informasi tugas yang terpusat dan mudah dipahami.

**Tujuan persona**
- Mengetahui tugas yang perlu dikerjakan terlebih dahulu.
- Menyelesaikan tugas sebelum atau sesuai tenggat waktu.
- Mengatur waktu antara kuliah, tugas, dan kegiatan lain.
- Mengurangi risiko lupa terhadap tugas atau deadline.

**Masalah utama persona**
- Informasi tugas tersebar di beberapa platform.
- Pengingat dapat tertumpuk atau terlewat.
- Sulit memperkirakan waktu pengerjaan dan menentukan prioritas.
- Tugas yang menumpuk dapat menimbulkan stres, kebingungan, penundaan, dan gangguan terhadap kegiatan lain.

## 2. KONTEKS — KONTEKS DESAIN

### 2.1 Latar Belakang

Priori dikembangkan untuk menjawab masalah penumpukan deadline dan kesulitan mahasiswa menentukan prioritas tugas. Riset pengguna sebelumnya menunjukkan kebiasaan yang beragam: sebagian mahasiswa mengerjakan tugas termudah lebih dahulu, sebagian memilih deadline terdekat, sedangkan yang lain mempertimbangkan tingkat kesulitan dan estimasi waktu pengerjaan.

Mahasiswa juga menggunakan beragam media untuk mencatat tugas, seperti WhatsApp, Notes, Google Keep, dan kalender. Informasi yang tersebar meningkatkan risiko lupa, sementara notifikasi yang tertumpuk dapat menyulitkan pemantauan deadline. Ketika tugas menumpuk, mahasiswa dapat merasa stres, bingung, cemas, atau terpaksa menyelesaikan tugas secara terburu-buru.

Karena itu, Priori dirancang sebagai tempat terpusat untuk mencatat tugas, memantau status pengerjaan, melihat deadline, dan membantu pengguna mengenali tugas yang perlu diprioritaskan.

### 2.2 Tujuan Produk

- Menyediakan satu tempat untuk mencatat dan mengelola tugas kuliah.
- Menampilkan deadline, tingkat kesulitan, estimasi waktu, deskripsi, dan status tugas secara terstruktur.
- Membantu pengguna menentukan urutan pengerjaan berdasarkan informasi tugas.
- Memudahkan pengguna menambah, melihat, mengedit, dan menghapus tugas.
- Menampilkan ringkasan progres melalui Dashboard.
- Menyediakan alur antarmuka yang jelas, konsisten, dan dapat diuji.

### 2.3 Konteks Penggunaan

Pengguna membuka Priori ketika menerima tugas baru, merencanakan pengerjaan, memeriksa deadline, memperbarui status, atau meninjau tugas yang belum selesai. Website ditujukan untuk digunakan melalui ponsel maupun laptop/desktop, dengan mengutamakan keterbacaan informasi dan kemudahan navigasi.

### 2.4 Struktur Halaman dan Fungsi

| No. | Halaman | Fungsi |
|---:|---|---|
| 1 | **Indeks** | Memperkenalkan Priori dan menyediakan akses ke Login serta Registrasi. |
| 2 | **Login** | Menyediakan formulir email dan kata sandi beserta validasi. |
| 3 | **Registrasi** | Menyediakan formulir pembuatan akun beserta validasi. |
| 4 | **Dashboard** | Menampilkan ringkasan jumlah tugas (total, selesai, sedang dikerjakan, dan belum dikerjakan) serta tugas yang perlu diperhatikan. |
| 5 | **Semua Tugas** | Menampilkan daftar tugas, pencarian, filter, serta akses ke Detail, Tambah, dan Edit Tugas. |
| 6 | **Detail Tugas** | Menampilkan judul, mata kuliah, deadline, tingkat kesulitan, prioritas, deskripsi, dan status. Pengguna dapat mengubah status atau menghapus tugas. |
| 7 | **Tambah Tugas** | Menyediakan formulir mata kuliah, judul tugas, deadline, tingkat kesulitan, status, estimasi waktu jika tersedia, serta deskripsi/catatan. |
| 8 | **Edit Tugas** | Menampilkan data tugas yang sudah ada agar pengguna dapat memperbarui informasinya. |
| 9 | **Notifikasi** | Menampilkan informasi pengingat deadline sesuai kemampuan implementasi. |
| 10 | **Sukses/Konfirmasi** | Memberikan umpan balik setelah tindakan berhasil. |
| 11 | **Kosong/Error** | Menjelaskan kondisi data kosong atau kegagalan dan menyediakan tindakan lanjutan yang relevan. |
| 12 | **Profil** | Menampilkan informasi profil pengguna. |
| 13 | **Pengaturan** | Menampilkan pengaturan dasar yang tersedia pada prototipe. |

**Catatan pemetaan desain:** sumber desain yang diperiksa menampilkan 12 frame/state, termasuk Login Gagal dan Registrasi Sukses sebagai state dari halaman Login dan Registrasi. Indeks, Profil, dan Pengaturan diperlakukan sebagai frame turunan apabila belum terverifikasi sebagai frame langsung pada Figma. Rincian pemetaan visual dijelaskan dalam `docs/design-map.md`.

### 2.5 Alur Utama

1. Pengguna membuka halaman Indeks lalu memilih Login atau Registrasi.
2. Setelah alur autentikasi simulasi selesai, pengguna masuk ke Dashboard.
3. Pengguna membuka Semua Tugas untuk melihat dan mengelola daftar tugas.
4. Pengguna dapat menambahkan tugas melalui halaman Tambah Tugas.
5. Sistem memvalidasi input. Jika input tidak valid, sistem menampilkan pesan kesalahan agar pengguna dapat memperbaikinya.
6. Jika input valid, tugas disimpan sesuai kemampuan implementasi dan pengguna menerima umpan balik keberhasilan.
7. Pengguna dapat membuka Detail Tugas, mengubah status secara terpisah, mengedit seluruh informasi melalui Edit Tugas, atau menghapus tugas.
8. Setelah tindakan dilakukan, sistem memberikan umpan balik dan menyediakan jalur kembali ke Dashboard atau Semua Tugas.

### 2.6 Prinsip Desain

- Mengikuti struktur dan alur prototipe Figma dari modul sebelumnya.
- Menggunakan bahasa antarmuka yang sederhana dan konsisten.
- Menonjolkan deadline, status, dan informasi tugas yang penting.
- Menyediakan pesan validasi dan kesalahan yang jelas.
- Memastikan tombol dan tautan utama memiliki fungsi yang sesuai.
- Menyediakan tata letak responsif yang tetap mudah digunakan di layar kecil.
- Menggunakan konten yang relevan dengan pengelolaan tugas mahasiswa.

## 3. BATASAN — USER STORY & SCOPE

### 3.1 User Story

| ID | User Story |
|---|---|
| US-01 | Sebagai mahasiswa, saya ingin login ke Priori agar dapat mengakses halaman pengelolaan tugas. |
| US-02 | Sebagai mahasiswa baru, saya ingin mendaftar agar dapat mulai menggunakan Priori. |
| US-03 | Sebagai mahasiswa, saya ingin melihat ringkasan tugas di Dashboard agar dapat memahami progres tugas dengan cepat. |
| US-04 | Sebagai mahasiswa, saya ingin melihat semua tugas agar dapat memantau tugas yang perlu diselesaikan. |
| US-05 | Sebagai mahasiswa, saya ingin menambahkan tugas beserta mata kuliah, judul, deadline, tingkat kesulitan, status, dan deskripsi agar informasi tugas tercatat. |
| US-06 | Sebagai mahasiswa, saya ingin melihat detail tugas agar dapat memahami informasi tugas yang dipilih. |
| US-07 | Sebagai mahasiswa, saya ingin mengubah seluruh informasi melalui Edit Tugas agar data tetap terbaru. |
| US-08 | Sebagai mahasiswa, saya ingin memperbarui status tugas tanpa mengedit seluruh informasinya agar progres mudah dipantau. |
| US-09 | Sebagai mahasiswa, saya ingin menghapus tugas yang tidak lagi diperlukan agar daftar tugas tetap relevan. |
| US-10 | Sebagai mahasiswa, saya ingin mencari atau memfilter tugas agar dapat menemukan tugas tertentu dengan lebih mudah. |
| US-11 | Sebagai mahasiswa, saya ingin melihat informasi pengingat deadline agar dapat memperhatikan tugas yang mendekati tenggat. |

### 3.2 Ruang Lingkup MVP

**Fitur yang termasuk dalam ruang lingkup:**
- Halaman Indeks, Login, dan Registrasi sebagai bagian dari alur prototipe.
- Dashboard dan ringkasan tugas berdasarkan status.
- Daftar Semua Tugas.
- Tambah Tugas dengan validasi input.
- Detail Tugas.
- Pengeditan seluruh informasi tugas.
- Perubahan status tugas secara terpisah.
- Penghapusan tugas dengan umpan balik yang sesuai.
- Pencarian dan filter tugas sesuai dukungan implementasi.
- State kosong, error, validasi, dan sukses.
- Navigasi menuju Notifikasi, Profil, dan Pengaturan sesuai halaman yang tersedia.
- Minimal dua interaksi dinamis yang dapat didemonstrasikan dan diuji.
- Konsistensi antarmuka dengan desain Figma serta keterbacaan pada berbagai ukuran layar.

**Data tugas yang direncanakan:**
- Mata kuliah.
- Judul tugas.
- Deadline.
- Tingkat kesulitan.
- Status tugas.
- Deskripsi/catatan.
- Estimasi waktu pengerjaan dan informasi prioritas jika telah diimplementasikan.

**Status tugas:**
- `Belum Dikerjakan`
- `Sedang Dikerjakan`
- `Selesai Dikerjakan`

### 3.3 Di Luar Ruang Lingkup

Fitur berikut bukan persyaratan wajib kecuali disepakati secara eksplisit oleh tim:
- Autentikasi produksi yang terhubung ke layanan backend nyata.
- Database dan sinkronisasi data lintas perangkat apabila implementasi Modul 7 tidak menggunakan backend.
- Notifikasi otomatis terjadwal pada perangkat.
- Integrasi dengan Google Calendar, email, WhatsApp, atau layanan pihak ketiga.
- Penilaian tingkat kesulitan otomatis menggunakan AI.
- Kolaborasi tugas dan pembagian tugas antar pengguna.
- Analitik lanjutan atau rekomendasi berbasis model machine learning.
- Fitur pembayaran atau langganan.

> **Catatan implementasi:** halaman HTML5 semantik pada Modul 6 belum mengimplementasikan autentikasi atau pemrosesan data berbasis database. Oleh karena itu, fungsi yang benar-benar berjalan pada Modul 7 harus dibedakan dari antarmuka yang masih berupa simulasi/prototipe. Pengingat deadline H-3/H-1 merupakan kebutuhan yang ditemukan dari riset pengguna, tetapi notifikasi otomatis bukan persyaratan wajib jika tidak termasuk dalam implementasi yang disepakati.

## 4. LUARAN — KRITERIA SUKSES

### 4.1 Luaran Produk

- Prototipe website Priori yang dapat didemonstrasikan.
- Halaman sesuai ruang lingkup yang memiliki alur navigasi saling terhubung.
- Formulir tugas dengan kolom data dan validasi yang relevan.
- Interaksi untuk melihat detail, menambah, mengedit, mengubah status, dan menghapus tugas sesuai kemampuan implementasi.
- Umpan balik untuk tindakan berhasil, input tidak valid, serta kondisi data kosong atau error.
- Antarmuka yang konsisten dengan desain Figma dan kebutuhan persona.
- Dokumentasi pengembangan sesuai persyaratan tugas Modul 7.

### 4.2 Kriteria Penerimaan (Acceptance Criteria)

| ID | Kriteria penerimaan |
|---|---|
| **AC-01** | Pengguna dapat membuka halaman Indeks dan menemukan akses ke Login serta Registrasi. |
| **AC-02** | Navigasi utama mengarahkan pengguna ke halaman yang benar. |
| **AC-03** | Dashboard menampilkan ringkasan total tugas, tugas selesai, sedang dikerjakan, dan belum dikerjakan berdasarkan data yang tersedia. |
| **AC-04** | Form Tambah Tugas memuat informasi tugas sesuai ruang lingkup. |
| **AC-05** | Sistem menampilkan pesan validasi ketika input wajib kosong atau tidak valid. |
| **AC-06** | Setelah penyimpanan berhasil, pengguna menerima umpan balik keberhasilan dan dapat kembali ke daftar tugas atau Dashboard. |
| **AC-07** | Pengguna dapat membuka Detail Tugas dan melihat informasi tugas yang dipilih. |
| **AC-08** | Pengguna dapat mengubah seluruh informasi tugas melalui halaman Edit Tugas. |
| **AC-09** | Pengguna dapat mengubah status tugas tanpa harus mengedit seluruh informasi tugas. |
| **AC-10** | Pengguna dapat menghapus tugas dan menerima umpan balik yang sesuai. |
| **AC-11** | Pencarian atau filter yang tersedia membantu pengguna menemukan tugas berdasarkan kata kunci atau kategori yang didukung. |
| **AC-12** | Halaman Kosong/Error menampilkan informasi yang mudah dipahami dan menyediakan tindakan lanjutan yang relevan. |
| **AC-13** | Minimal dua interaksi dinamis berfungsi dan dapat didemonstrasikan. |
| **AC-14** | Tidak ada tombol atau tautan utama yang mengarah ke jalan buntu (*dead end*). |
| **AC-15** | Konten dan antarmuka sesuai konteks Priori serta terbaca pada ukuran layar yang didukung. |

**Status AC:** tabel di atas mendefinisikan kriteria yang harus diuji, bukan pernyataan bahwa seluruh kriteria sudah lulus. Status lulus/gagal harus dicatat berdasarkan pengujian aktual dan bukti yang tersedia.

### 4.3 Indikator Keberhasilan

- Fitur yang ditetapkan sebagai MVP tersedia dan dapat diuji.
- Alur utama pengelolaan tugas dapat diselesaikan tanpa hambatan navigasi.
- Pengguna dapat memahami deadline dan status tugas dari informasi yang ditampilkan.
- Pesan validasi dan umpan balik membantu pengguna memahami kesalahan serta hasil tindakan.
- Interaksi utama dapat didemonstrasikan oleh tim.
- Dokumentasi tidak mengklaim adanya backend, database, atau notifikasi otomatis yang belum dibangun.
- Website selaras dengan riset pengguna, persona, User Journey, User Flow, wireframe, dan prototipe Figma dari modul sebelumnya.

## 5. Pembagian Tanggung Jawab Anggota

Pembagian berikut digunakan sebagai acuan dokumentasi proyek. Tanggung jawab implementasi dibedakan dari pekerjaan perbaikan, integrasi, dan dokumentasi agar kontribusi antaranggota tidak tampak tumpang tindih.

| Anggota | Tanggung jawab |
|---|---|
| **Firda Nabilah** | Penyusunan PRD dan inisialisasi repository; perbaikan desain halaman Indeks, Navbar, dan Footer; koordinasi tim serta pengelolaan GitHub/merge. |
| **Deni Anugrah Hasibuan** | Implementasi halaman Indeks, Login, dan Registrasi, termasuk alur dan validasi formulir yang terkait. |
| **Dewangga Arka Putra** | Penyelarasan antarmuka website dengan desain Figma dan perbaikan visual sesuai hasil peninjauan. |
| **Luthfi Eka Saputra** | Implementasi inti pengelolaan tugas dan halaman pendukung, termasuk pekerjaan yang tercatat pada Fase 4–7. |
| **Komsiata Amelia Sari** | Dokumentasi pengumpulan dan pengujian aplikasi; mencatat hasil pengujian serta bukti yang benar-benar diperoleh. |

**Catatan kontribusi:** tabel ini adalah ringkasan pembagian tanggung jawab, bukan pengganti bukti kontribusi. Riwayat commit, pull request, dan hasil pekerjaan aktual tetap menjadi rujukan ketika mengisi laporan akhir.

## 6. Tahapan Pengembangan Proyek (Fase 0–7)

| Fase | Nama fase | Ruang lingkup pekerjaan |
|---|---|---|
| **Fase 0** | Persiapan Proyek | Inisialisasi repository, konfigurasi awal, penyusunan PRD, dan README awal. |
| **Fase 1** | Ekstraksi Desain | Pemetaan frame Figma, komponen, design token, dan aset visual. |
| **Fase 2** | Fondasi UI | Persiapan routing, layout, dan komponen antarmuka yang dapat digunakan ulang. |
| **Fase 3** | Halaman Publik | Implementasi Indeks, Login, Registrasi, dan validasi alur autentikasi simulasi. |
| **Fase 4** | Pengelolaan Tugas Inti | Implementasi daftar, tambah, detail, edit, ubah status, hapus, pencarian, dan filter tugas. |
| **Fase 5** | Halaman Pendukung | Implementasi Dashboard, Notifikasi, Sukses/Konfirmasi, Kosong/Error, Profil, dan Pengaturan. |
| **Fase 6** | Responsivitas dan Aksesibilitas | Penyempurnaan tampilan pada berbagai ukuran layar serta pemeriksaan aksesibilitas dasar. |
| **Fase 7** | Audit dan Pengumpulan | Pemeriksaan AC-01–AC-15, pengujian akhir, penyelarasan dokumentasi, dan persiapan berkas pengumpulan. |

Tahapan tersebut menjelaskan urutan kerja proyek. Status penyelesaian setiap fase harus mengikuti kondisi implementasi dan bukti yang tersedia, bukan dicentang otomatis.

## 7. Dokumentasi dan Referensi Proyek

Dokumentasi proyek yang perlu dijaga konsistensinya:
- `README.md`: gambaran proyek, panduan menjalankan aplikasi, tautan Figma dan repository, kontribusi anggota, log prompt AI, serta catatan perbaikan manual.
- `docs/PRD.md`: kebutuhan produk, halaman, ruang lingkup, pembagian tanggung jawab, dan kriteria penerimaan.
- `docs/HANDOVER.md`: rincian teknis berkas, alur kerja, perintah Git, dan serah terima.
- `docs/design-map.md`: pemetaan frame desain, halaman, komponen, token, dan aset berdasarkan sumber desain yang tersedia.

Untuk pengumpulan Modul 7, luaran utama yang disebut dalam brief adalah repository GitHub publik, README.md lengkap, dan PRD dalam format PDF. Jika arahan mentor meminta semua dokumentasi digabung dalam PDF, pastikan isi README dan informasi repository disertakan serta tautan GitHub tetap dapat diakses.

---

## Penutup

PRD ini menjadi acuan Kelompok 19 dalam mengembangkan Priori pada Modul 7. Keputusan fitur dan kriteria pengujian harus tetap merujuk pada masalah pengguna yang ditemukan dalam riset sebelumnya: deadline yang menumpuk, informasi tugas yang tersebar, kesulitan menentukan prioritas, serta kebutuhan pencatatan dan pemantauan status tugas secara terstruktur. Fitur yang berada di luar ruang lingkup atau belum benar-benar diimplementasikan tidak boleh dinyatakan sebagai fitur yang sudah berfungsi.