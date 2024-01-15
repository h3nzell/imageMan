import { RootState } from 'types'

const getCardItems = (state: RootState) => state.cardItems.data

export const CardItemsSelectors = {
  getCardItems,
}
