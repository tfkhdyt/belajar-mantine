import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NavbarMenuSlice {
  value: string[]
}

const initialState: NavbarMenuSlice = {
  value: [],
}

export const navbarMenuSlice = createSlice({
  name: 'navbarMenu',
  initialState,
  reducers: {
    setNavbarMenu(state, action: PayloadAction<string[]>) {
      state.value = action.payload
    },
  },
})

export const { setNavbarMenu } = navbarMenuSlice.actions
export default navbarMenuSlice.reducer
