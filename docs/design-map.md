# Priori Design Map

Status audit: 16 October 2026.

## Source and access limits

The available design sources are `Prototipe Kelompok 19.pdf`, a 32-page PDF
export, a supplied screenshot of the Figma canvas, and the supplied logo files
in `public/assets/`. The screenshot exposes twelve frame/state names, but does
not expose Figma layer IDs or variables. The three remaining PRD pages are
documented as derived frames based on the shared navigation and card patterns.

The exact Figma file was not available through the local workspace API. Any
row marked as absent or unresolved needs confirmation against the Figma file
before implementation.

## Page-to-frame map

| Frame/state terlihat | Halaman PRD  | Komponen yang dipakai                                                                                | Status akses                                                          |
| -------------------- | ------------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Login                | Login        | Logo, input email, input password, primary button, link registrasi                                   | Terlihat jelas pada screenshot                                        |
| Login Gagal          | Login        | Semua komponen Login, error message, error icon/state                                                | Terlihat jelas; state validasi                                        |
| Registrasi           | Registrasi   | Logo, input nama/email/password, primary button, link login                                          | Terlihat jelas pada screenshot                                        |
| Registrasi Sukses    | Registrasi   | Semua komponen Registrasi, success message/state                                                     | Terlihat jelas; state sukses                                          |
| Dashboard            | Dashboard    | Header/navbar, avatar, notification icon, summary cards, task cards, status badge, bottom navigation | Terlihat jelas pada screenshot                                        |
| Semua Tugas          | Semua Tugas  | Search, filter, status tabs, Add Task button, task cards, bottom navigation                          | Terlihat jelas pada screenshot                                        |
| Detail Tugas         | Detail       | Back action, task detail card, deadline, difficulty, priority, status select, delete/save actions    | Terlihat jelas pada screenshot                                        |
| Tambah Tugas         | Tambah       | Form input, date input, select, description input, save button, bottom navigation                    | Terlihat jelas pada screenshot                                        |
| Edit Tugas           | Edit         | Form input, date input, select, description input, save edit button, bottom navigation               | Terlihat jelas pada screenshot                                        |
| Notifikasi           | Notifikasi   | Alert banner, reminder task cards, bottom navigation                                                 | Terlihat jelas pada screenshot                                        |
| Sukses/Konfirmasi    | Sukses       | Success icon, confirmation message, task summary card, return button                                 | Terlihat jelas pada screenshot                                        |
| Kosong/Error         | Kosong/Error | Search, filter, empty/error illustration, message, retry button, bottom navigation                   | Terlihat jelas pada screenshot                                        |
| Indeks (turunan)     | Indeks       | Logo, introductory copy, Login and Registrasi actions                                                | Diturunkan dari pola auth frame; perlu dibandingkan dengan Figma asli |
| Profil (turunan)     | Profil       | Header dengan logo/avatar, information rows, edit action, bottom navigation                          | Diturunkan dari pola Dashboard dan bottom navigation                  |
| Pengaturan (turunan) | Pengaturan   | Header, settings rows, toggle/select controls, bottom navigation                                     | Diturunkan dari pola form dan bottom navigation                       |

The screenshot contains twelve visible frames/states. `Login Gagal` and
`Registrasi Sukses` are states of the Login and Registrasi pages, not extra PRD
pages. `Indeks`, `Profil`, and `Pengaturan` are included as derived frames from
the shared visual system, not as claims of directly observed Figma frames.

## Reusable component inventory

| Component          | Variants                                                  | States                                             |
| ------------------ | --------------------------------------------------------- | -------------------------------------------------- |
| Button             | primary filled, secondary filled, text/link, icon + label | default, hover, focus, disabled, error/destructive |
| Input              | text, password, date, search                              | default, hover, focus, disabled, error             |
| Select             | difficulty, status, filter                                | default, hover, focus, disabled, error, open       |
| Task card          | standard, urgent, completed, compact/mobile               | default, hover, focus, empty                       |
| Status badge       | Belum Dikerjakan, Sedang Dikerjakan, Selesai Dikerjakan   | default, selected, disabled                        |
| Priority indicator | high, medium, low                                         | default, urgent/error, muted                       |
| Modal              | delete confirmation, success/confirmation                 | closed, open, focus-trapped, destructive           |
| Navbar             | desktop top navigation, mobile bottom navigation          | default, active, focus                             |
| Drawer             | mobile navigation, filter drawer                          | closed, open, focus-trapped                        |
| Empty state        | no tasks, no search result                                | default, action-focused, error                     |
| Alert/banner       | H-3, H-1, overdue                                         | default, warning, danger, dismissed                |

## Token extraction notes

`src/styles/tokens.css` centralizes the values used by the current global
placeholder and provides names for the values visible in the PDF and supplied
Figma screenshot: navy brand, blue action, pale blue task cards, white
surfaces, red alert, typography, spacing, radius, shadow, and breakpoints.
Because neither source exposes inspectable Figma variables or measurement
metadata, these are observation tokens, not a claim of exact Figma values.
They must be compared with the original Figma file before Fase 2.

No raw color or layout value is used by the current global CSS outside the
token file, except the browser-required mobile baseline declaration, which is represented
by `--viewport-min` in the token file.

## Asset audit

The supplied standalone logo assets are available:

- `public/assets/priori_logo.svg`: vector logo for production use.
- `public/assets/priori_logo_preview.png`: raster preview/reference.

The remaining icons visible in the screenshot are not supplied as standalone
files and are therefore not claimed as exported assets.
