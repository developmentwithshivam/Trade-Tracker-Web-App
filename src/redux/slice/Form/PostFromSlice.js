import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isopen: false,
  isupdated: false,
};

export const PostFromSlice = createSlice({
  name: "Tradeform",
  initialState,
  reducers: {
    setisopen: (state, action) => {
      state.isopen = action.payload;
    },
    setisupdated: (state, action) => {
      state.isupdated = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setisopen, setisupdated } = PostFromSlice.actions;

export default PostFromSlice.reducer;
