/**
 * Menghitung daftar pengingat deadline dari tugas yang belum selesai.
 * Dihitung saat halaman dibuka (on-demand), bukan push notification otomatis.
 *
 * @param {Array} tasks
 * @param {string|Date} [referenceDate] Tanggal rujukan (default: hari ini)
 * @returns {Array} Daftar objek notifikasi
 */
export function getTaskNotifications(tasks = [], referenceDate = new Date()) {
  if (!Array.isArray(tasks)) return []

  const ref = new Date(referenceDate)
  const refZero = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate())

  const notifications = []

  tasks.forEach((task) => {
    if (!task || task.status === 'Selesai Dikerjakan' || !task.deadline) {
      return
    }

    const deadlineDate = new Date(task.deadline)
    if (isNaN(deadlineDate.getTime())) return

    const targetZero = new Date(
      deadlineDate.getFullYear(),
      deadlineDate.getMonth(),
      deadlineDate.getDate(),
    )

    const diffDays = Math.ceil(
      (targetZero.getTime() - refZero.getTime()) / (1000 * 60 * 60 * 24),
    )

    if (diffDays < 0) {
      notifications.push({
        id: `notif-overdue-${task.id}`,
        taskId: task.id,
        taskTitle: task.title,
        course: task.course,
        deadline: task.deadline,
        type: 'overdue',
        label: 'Terlambat',
        urgency: 'danger',
        message: `Tugas "${task.title}" telah melewati batas deadline (${task.deadline}).`,
        diffDays,
      })
    } else if (diffDays === 0) {
      notifications.push({
        id: `notif-today-${task.id}`,
        taskId: task.id,
        taskTitle: task.title,
        course: task.course,
        deadline: task.deadline,
        type: 'today',
        label: 'Hari Ini',
        urgency: 'danger',
        message: `Deadline tugas "${task.title}" jatuh tempo hari ini!`,
        diffDays: 0,
      })
    } else if (diffDays === 1) {
      notifications.push({
        id: `notif-h1-${task.id}`,
        taskId: task.id,
        taskTitle: task.title,
        course: task.course,
        deadline: task.deadline,
        type: 'h-1',
        label: 'H-1',
        urgency: 'danger',
        message: `H-1 menuju deadline tugas "${task.title}" (${task.deadline}).`,
        diffDays: 1,
      })
    } else if (diffDays <= 3) {
      notifications.push({
        id: `notif-h3-${task.id}`,
        taskId: task.id,
        taskTitle: task.title,
        course: task.course,
        deadline: task.deadline,
        type: 'h-3',
        label: `H-${diffDays}`,
        urgency: 'warning',
        message: `H-${diffDays} menuju deadline tugas "${task.title}" (${task.deadline}).`,
        diffDays,
      })
    }
  })

  // Urutkan dari yang paling mendesak: diffDays terkecil
  return notifications.sort((a, b) => a.diffDays - b.diffDays)
}
