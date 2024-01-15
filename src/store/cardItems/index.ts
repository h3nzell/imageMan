import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { ICardItemsProps, TItemsInitialState } from './types'

const initialState: TItemsInitialState = {
  data: null,
}

const cardItemsSlice = createSlice({
  name: 'card-items',
  initialState,
  reducers: {
    addCardItem: (state, action: PayloadAction<ICardItemsProps>) => {
      if (state.data) {
        state.data = [
          ...state.data,
          {
            ...action.payload,
            id: state.data[state.data.length - 1].id ? state.data[state.data?.length - 1].id! + 1 : 1,
          },
        ]
      } else {
        state.data = [{ ...action.payload, id: 1 }]
      }
    },
    editCardItem: (state, action: PayloadAction<ICardItemsProps>) => {
      if (state.data) {
        state.data = state.data.map(value => {
          if (value.id === action.payload.id!) {
            return action.payload
          } else {
            return value
          }
        })
      }
    },
    removeCardItem: (state, action: PayloadAction<number>) => {
      if (state.data) {
        state.data = state.data?.filter(item => item.id !== action.payload)
      }
    },
  },
})

export const { addCardItem, removeCardItem, editCardItem } = cardItemsSlice.actions

const cardItemsReducer = cardItemsSlice.reducer

export default cardItemsReducer
