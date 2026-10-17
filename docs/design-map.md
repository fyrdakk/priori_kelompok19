# Peta Desain Priori

Status audit: 16 Oktober 2026.

## Sumber dan batasan akses

Sumber desain yang tersedia adalah `Prototipe Kelompok 19.pdf`, yaitu hasil ekspor PDF sebanyak 32 halaman, tangkapan layar kanvas Figma yang diberikan, serta berkas logo yang tersedia di `public/assets/`. Tangkapan layar tersebut menampilkan dua belas nama frame/state, tetapi tidak menampilkan ID layer atau variabel Figma. Halaman Indeks, Profil, dan Pengaturan didokumentasikan sebagai frame turunan berdasarkan pola navigasi dan card yang digunakan bersama; detail visualnya tidak diklaim sebagai frame Figma yang diamati secara langsung.

Berkas Figma asli tidak tersedia melalui API ruang kerja lokal. Baris yang ditandai tidak tersedia atau belum dapat dipastikan perlu dikonfirmasi melalui berkas Figma sebelum implementasi.

## Page-to-Frame Map

| Frame/state yang terlihat | Halaman PRD | Komponen yang digunakan | Status akses |
| ------------------------- | ------------ | ----------------------- | ------------ |
| Login | Login | Logo, input email, input kata sandi, tombol utama, tautan registrasi | Terlihat jelas pada tangkapan layar |
| Login Gagal | Login | Seluruh komponen Login, pesan kesalahan, icon/status kesalahan | Terlihat jelas; merupakan kondisi validasi |
| Registrasi | Registrasi | Logo, input nama/email/kata sandi, tombol utama, tautan Login | Terlihat jelas pada tangkapan layar |
| Registrasi Sukses | Registrasi | Seluruh komponen Registrasi, pesan/status keberhasilan | Terlihat jelas; merupakan kondisi sukses |
| Dashboard | Dashboard | Header/navbar, avatar, icon notifikasi, kartu ringkasan, kartu tugas, lencana status, navigasi bawah | Terlihat jelas pada tangkapan layar |
| Semua Tugas | Semua Tugas | Pencarian, filter, tab status, tombol Tambah Tugas, kartu tugas, navigasi bawah | Terlihat jelas pada tangkapan layar |
| Detail Tugas | Detail | Aksi kembali, kartu detail tugas, tenggat, tingkat kesulitan, prioritas, pilihan status, aksi hapus/simpan | Terlihat jelas pada tangkapan layar |
| Tambah Tugas | Tambah | Input formulir, input tanggal, pilihan, input deskripsi, tombol simpan, navigasi bawah | Terlihat jelas pada tangkapan layar |
| Edit Tugas | Edit | Input formulir, input tanggal, pilihan, input deskripsi, tombol simpan perubahan, navigasi bawah | Terlihat jelas pada tangkapan layar |
| Notifikasi | Notifikasi | Banner peringatan, kartu pengingat tugas, navigasi bawah | Terlihat jelas pada tangkapan layar |
| Sukses/Konfirmasi | Sukses | icon keberhasilan, pesan konfirmasi, kartu ringkasan tugas, tombol kembali | Terlihat jelas pada tangkapan layar |
| Kosong/Error | Kosong/Error | Pencarian, filter, ilustrasi kondisi kosong/kesalahan, pesan, tombol coba lagi, navigasi bawah | Terlihat jelas pada tangkapan layar |
| Indeks (turunan) | Indeks | Navbar halaman utama, logo, teks pengantar, tombol Login/Registrasi, pratinjau Dashboard, ringkasan fitur, footer | Implementasi saat ini mencakup bagian utama, pratinjau Dashboard, bagian fitur, dan footer; detail Figma asli tetap perlu dikonfirmasi |
| Profil (turunan) | Profil | Header dengan logo/avatar, baris informasi, aksi edit, navigasi bawah | Diturunkan dari pola Dashboard dan navigasi bawah |
| Pengaturan (turunan) | Pengaturan | Header, baris pengaturan, kontrol sakelar/pilihan, navigasi bawah | Diturunkan dari pola formulir dan navigasi bawah |

Tangkapan layar menampilkan dua belas frame/state. `Login Gagal` dan `Registrasi Sukses` merupakan kondisi pada halaman Login dan Registrasi, bukan halaman PRD tambahan. `Indeks`, `Profil`, dan `Pengaturan` disertakan sebagai frame turunan dari sistem visual yang digunakan bersama, bukan sebagai klaim bahwa frame tersebut terlihat langsung pada Figma.

Pada implementasi saat ini, halaman Indeks memiliki navbar halaman utama dan footer sendiri di `src/pages/IndexPage.jsx`. Halaman Login dan Registrasi menggunakan navbar/footer publik bersama dari `src/components/PublicLayout.jsx`. Area aplikasi menggunakan navigasi dan footer yang ditentukan di `src/components/AppLayout.jsx`. Detail implementasi ini perlu dibedakan dari klaim mengenai elemen yang terlihat langsung pada Figma.

## Daftar komponen yang dapat digunakan ulang

| Komponen | Variasi | Status/kondisi |
| -------- | ------- | -------------- |
| Tombol | Utama terisi, sekunder terisi, teks/tautan, icon + label | Normal, saat diarahkan, fokus, nonaktif, kesalahan/aksi destruktif |
| Input | Teks, kata sandi, tanggal, pencarian | Normal, saat diarahkan, fokus, nonaktif, kesalahan |
| Pilihan (Select) | Tingkat kesulitan, status, filter | Normal, saat diarahkan, fokus, nonaktif, kesalahan, terbuka |
| Kartu tugas | Standar, mendesak, selesai, ringkas/mobile | Normal, saat diarahkan, fokus, kosong |
| Lencana status | Belum Dikerjakan, Sedang Dikerjakan, Selesai Dikerjakan | Normal, dipilih, nonaktif |
| Indikator prioritas | Tinggi, sedang, rendah | Normal, mendesak/kesalahan, redup |
| Modal | Konfirmasi penghapusan, sukses/konfirmasi | Tertutup, terbuka, fokus terkunci di modal, aksi destruktif |
| Navbar | Navigasi halaman utama publik, navigasi publik bersama, navigasi aplikasi desktop/mobile | Normal, aktif, fokus |
| Drawer/menu samping | Navigasi mobile, panel filter | Tertutup, terbuka, fokus terkunci di panel |
| Kondisi kosong | Tidak ada tugas, hasil pencarian tidak ditemukan | Normal, fokus pada aksi, kesalahan |
| Peringatan/banner | H-3, H-1, terlambat | Normal, peringatan, bahaya, ditutup |
| Footer | Footer halaman utama, footer publik bersama, footer aplikasi | Normal, responsif |

## Catatan ekstraksi token desain

`src/styles/tokens.css` memusatkan nilai desain yang digunakan antarmuka saat ini dan memberi nama pada nilai yang diamati dalam PDF serta tangkapan layar Figma yang diberikan: warna utama navy, aksi biru, kartu tugas biru pucat, permukaan putih, peringatan merah, tipografi, jarak, radius, bayangan, dan titik henti responsif (*breakpoint*).

Karena kedua sumber tersebut tidak menyediakan variabel Figma atau metadata pengukuran yang dapat diperiksa, token ini merupakan hasil pengamatan, bukan klaim bahwa nilainya sama persis dengan Figma. Nilai-nilai tersebut perlu dibandingkan dengan berkas Figma asli sebelum kesesuaian visual dinyatakan akurat sepenuhnya.

CSS global saat ini tidak menggunakan nilai warna atau tata letak mentah di luar berkas token, kecuali deklarasi dasar mobile yang diperlukan browser dan direpresentasikan oleh `--viewport-min` di dalam berkas token.

## Audit aset

Aset logo mandiri yang diberikan tersedia:

- `public/assets/priori_logo.svg`: logo vektor untuk penggunaan pada aplikasi.
- `public/assets/priori_logo_preview.png`: pratinjau/referensi logo dalam format raster.

icon lain yang terlihat pada tangkapan layar tidak disediakan sebagai berkas terpisah. Karena itu, dokumen ini tidak menyatakan bahwa icon-icon tersebut telah diekspor sebagai aset tersendiri.