import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loding : false
}

export const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    setloding: (state,action) => {
     state.loding = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setloding } = logoutSlice.actions

export default logoutSlice.reducer