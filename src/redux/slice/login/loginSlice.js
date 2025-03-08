import { createSlice } from '@reduxjs/toolkit'
// import { useState } from 'react'
// const [loginsession, setloginsession] = useState(null)
const initialState = {
  islogin : false,
  userId : null,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setloginsession: (state , action) => {
      state.userId = action.payload;
      console.log(action.payload);
      
      state.islogin = true;
      console.log("session SUccessfully added");
      // state.userId && console.log(state.userId);
      
    }
  ,
  removeloginsession:(state)=>{
    state.islogin = false;
    state.userId = null;
  }
  },
})

// Action creators are generated for each case reducer function
export const { setloginsession ,removeloginsession } = loginSlice.actions

export default loginSlice.reducer