import { ReactNode } from 'react'

export type ButtonType = 'primary' | 'secondary'

export type Props = Partial<{
  children: ReactNode
  onClick: () => void
  type: ButtonType
}>
