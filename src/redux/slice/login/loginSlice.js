import { createSlice } from '@reduxjs/toolkit'
// import { useState } from 'react'
// const [loginsession, setloginsession] = useState(null)
const initialState = {
  islogin : false,
  user : null,
  status: null,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setloginsession: (state , action) => {
      state.user = action.payload;
      // console.log(action.payload.$id);
      
      state.islogin = true;
      // console.log("session SUccessfully added");
      // console.log("This is the user :",state.user);
      // state.user && console.log(state.user);
      
    }
    ,
    removeloginsession:(state)=>{
      state.islogin = false;
      state.user = null;
      // console.log("This is the user :",state.user);
      
  }
  },
})

// Action creators are generated for each case reducer function
export const { setloginsession ,removeloginsession } = loginSlice.actions

export default loginSlice.reducer