import { configureStore } from '@reduxjs/toolkit'
import navbarMenuSlice from './slices/navbarMenuSlice'

export const store = configureStore({
  reducer: {
    navbarMenu: navbarMenuSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
