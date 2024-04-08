import { createSlice } from "@reduxjs/toolkit";

const AwardSlice = createSlice({
  name: "award",
  initialState: {
    myAwards: [],
    isAwardCreating: false,
    isAwardUpdating: false,
    isAwardDeleting: false,
  },
  reducers: {
    setMyAwards: (state, action) => {
      state.myAwards = action.payload;
    },
    setAwardIsCreating: (state, action) => {
      state.isAwardCreating = action.payload;
    },
    setAwardIsUpdating: (state, action) => {
      state.isAwardUpdating = action.payload;
    },
    setAwardIsDeleting: (state, action) => {
      state.isAwardDeleting = action.payload;
    },
  },
});

export const {
  setMyAwards,
  setAwardIsCreating,
  setAwardIsDeleting,
  setAwardIsUpdating,
} = AwardSlice.actions;
export default AwardSlice.reducer;
