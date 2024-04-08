import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signUpLoading: false,
    signInLoading: false,
    isLoginPage: true,
    isSignedIn: false,
  },
  reducers: {
    setSignUpLoading: (state, action) => {
      state.signUpLoading = action.payload;
    },
    setSignInLoading: (state, action) => {
      state.signInLoading = action.payload;
    },
    setIsLoginPage: (state, action) => {
      state.isLoginPage = action.payload;
    },
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
});

export const {
  setSignUpLoading,
  setSignInLoading,
  setIsSignedIn,
  setIsLoginPage,
} = authSlice.actions;
export default authSlice.reducer;
