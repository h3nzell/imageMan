import type { ReactNode } from 'react'

export type TButtonProps = {
  className?: string
  onClick?: () => void
  LeftIcon?: ReactNode | null
  children?: ReactNode | string
  type?: 'button' | 'submit' | 'reset'
}
