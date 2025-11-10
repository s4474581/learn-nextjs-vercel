'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface ConfirmModalProps {
  isOpen: boolean
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmModal({
  isOpen,
  // title = '確認',
  // message = '本当に実行しますか？',
  // confirmText = 'はい',
  // cancelText = 'キャンセル',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return <p>test modal</p>
}
