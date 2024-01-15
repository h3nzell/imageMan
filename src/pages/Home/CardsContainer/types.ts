import type { ICardItemsProps } from 'store/cardItems/types'

export type TCardsContainerProps = {
  onEdit: (element: ICardItemsProps) => void
  onClick: () => void
}
