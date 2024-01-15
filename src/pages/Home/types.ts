import { TModalProps } from 'components/Modal/types'

export type TFormValues = {
  title: string
  description: string
}

export interface IItemsModalProps extends TModalProps {
  isEdit: boolean
}
