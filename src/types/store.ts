import { store } from 'libraries/redux'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
