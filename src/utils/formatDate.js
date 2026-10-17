/**
 * Mengubah tanggal ISO (YYYY-MM-DD) menjadi teks Indonesia singkat (17 Okt 2026).
 * Mengembalikan input apa adanya bila bukan tanggal yang valid.
 */
export function formatDate(iso) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
