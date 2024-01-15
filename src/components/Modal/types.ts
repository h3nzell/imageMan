import type { ReactNode } from 'react'

export type TModalProps = {
  open: boolean
  children: ReactNode
  onClose: () => void
}
