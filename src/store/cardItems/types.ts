import type { TCardProps } from 'components/Card/types'

export interface ICardItemsProps extends Omit<Omit<TCardProps, 'onDelete'>, 'onEdit'> {
  id?: number
}

export type TItemsInitialState = {
  data: null | ICardItemsProps[]
}
