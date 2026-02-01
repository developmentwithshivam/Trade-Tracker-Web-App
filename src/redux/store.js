import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/login/loginSlice";
import logoutSlice from "./slice/logout/logoutSlice";
// import PostFromSlice from "./slice/Form/PostFromSlice";
export const store = configureStore({
  reducer: {
    login: loginSlice,
    logout: logoutSlice,
    // postform: PostFromSlice,
  },
});
