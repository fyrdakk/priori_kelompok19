import { Link } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { Card } from '../components/Card.jsx'
import { EmptyState } from '../components/EmptyState.jsx'
import { Input } from '../components/Input.jsx'
import { Select } from '../components/Select.jsx'
import { StatusBadge } from '../components/StatusBadge.jsx'
import { Textarea } from '../components/Textarea.jsx'

function PlaceholderPage({
  title = 'Indeks',
  description = 'Ruang untuk tugas yang lebih teratur.',
}) {
  const isForm = ['Login', 'Registrasi', 'Tambah Tugas', 'Edit Tugas'].includes(
    title,
  )
  const isEmpty = title === 'Kosong/Error'
  return (
    <section className="page-section">
      <p className="eyebrow">Priori · Fase 2</p>
      <h1>{title}</h1>
      <p className="page-intro">{description}</p>
      {isEmpty ? (
        <EmptyState
          title="Belum Ada Tugas"
          description="Mulai dengan mencatat tugas pertamamu."
          actionLabel="Tambah Tugas"
          actionTo="/tasks/new"
        />
      ) : null}
      {!isEmpty && isForm ? (
        <Card className="form-card">
          <Input
            id="course"
            label="Mata Kuliah"
            placeholder="Masukkan mata kuliah"
          />
          <Input
            id="task-title"
            label="Judul Tugas"
            placeholder="Masukkan judul tugas"
          />
          <Select id="status" label="Status">
            <option>Pilih status tugas</option>
            <option>Belum Dikerjakan</option>
            <option>Sedang Dikerjakan</option>
          </Select>
          <Textarea
            id="notes"
            label="Deskripsi/Catatan"
            placeholder="Tambahkan catatan"
          />
          <Button type="submit">Simpan</Button>
        </Card>
      ) : null}
      {!isEmpty && !isForm ? (
        <Card className="preview-card">
          <div className="preview-card__header">
            <div>
              <p className="card__eyebrow">Contoh tampilan</p>
              <h2>{title}</h2>
            </div>
            <StatusBadge status="Sedang Dikerjakan" />
          </div>
          <p>
            Komponen dan layout halaman ini sudah memiliki rute nyata dan siap
            dikembangkan pada fase fitur.
          </p>
          <div className="preview-card__actions">
            <Link className="button button--secondary" to="/_komponen">
              Lihat Komponen
            </Link>
            <Link className="text-link" to="/_komponen">
              Buka halaman rujukan
            </Link>
          </div>
        </Card>
      ) : null}
    </section>
  )
}

export default PlaceholderPage
