import { useState } from 'react'
import { Button } from '../components/Button.jsx'
import { Card } from '../components/Card.jsx'
import { Drawer } from '../components/Drawer.jsx'
import { EmptyState } from '../components/EmptyState.jsx'
import { Input } from '../components/Input.jsx'
import { Modal } from '../components/Modal.jsx'
import { Select } from '../components/Select.jsx'
import { StatusBadge } from '../components/StatusBadge.jsx'
import { Textarea } from '../components/Textarea.jsx'

function ComponentReferencePage() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  return (
    <main className="component-reference">
      <p className="eyebrow">Internal reference · Fase 2</p>
      <h1>Komponen Priori</h1>
      <p className="page-intro">
        Halaman ini tidak muncul pada navigasi produksi.
      </p>
      <section className="reference-grid" aria-label="Daftar komponen">
        <Card>
          <h2>Button</h2>
          <div className="reference-row">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Hapus</Button>
            <Button variant="icon" aria-label="Tutup">
              ×
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        </Card>
        <Card>
          <h2>Field</h2>
          <Input id="reference-input" label="Input" placeholder="Default" />
          <Input
            id="reference-error"
            label="Error"
            error="Isi bagian ini."
            placeholder="Dengan error"
          />
          <Select id="reference-select" label="Select">
            <option>Pilih opsi</option>
            <option>Opsi satu</option>
          </Select>
          <Textarea
            id="reference-textarea"
            label="Textarea"
            placeholder="Catatan"
          />
        </Card>
        <Card>
          <h2>Badge</h2>
          <div className="reference-row reference-row--stack">
            <StatusBadge status="Belum Dikerjakan" />
            <StatusBadge status="Sedang Dikerjakan" />
            <StatusBadge status="Selesai Dikerjakan" />
          </div>
        </Card>
        <Card>
          <h2>Overlay</h2>
          <div className="reference-row">
            <Button onClick={() => setModalOpen(true)}>Buka Modal</Button>
            <Button variant="secondary" onClick={() => setDrawerOpen(true)}>
              Buka Drawer
            </Button>
          </div>
        </Card>
        <Card>
          <h2>Empty state</h2>
          <EmptyState
            title="Belum Ada Tugas"
            description="Tidak ada tugas untuk ditampilkan."
          />
        </Card>
      </section>
      <Modal
        isOpen={isModalOpen}
        title="Konfirmasi"
        onClose={() => setModalOpen(false)}
      >
        <p>Modal mengunci fokus dan dapat ditutup dengan Escape.</p>
        <Button onClick={() => setModalOpen(false)}>Selesai</Button>
      </Modal>
      <Drawer
        isOpen={isDrawerOpen}
        title="Filter Tugas"
        onClose={() => setDrawerOpen(false)}
      >
        <div className="drawer__content">
          <p>Drawer mengunci fokus dan dapat ditutup dengan Escape.</p>
          <Button onClick={() => setDrawerOpen(false)}>Terapkan</Button>
        </div>
      </Drawer>
    </main>
  )
}

export default ComponentReferencePage
