import { createSlice } from "@reduxjs/toolkit";

const EducationSlice = createSlice({
  name: "education",
  initialState: {
    myEducations: [],
    isCreating: false,
    isUpdating: false,
    isDeleting: false,
  },
  reducers: {
    setMyEducation: (state, action) => {
      state.myEducations = action.payload;
    },
    setIsCreating: (state, action) => {
      state.isCreating = action.payload;
    },
    setIsUploading: (state, action) => {
      state.isUpdating = action.payload;
    },
    setIsDeleting: (state, action) => {
      state.isDeleting = action.payload;
    },
  },
});

export const { setIsCreating, setIsDeleting, setIsUploading, setMyEducation } =
  EducationSlice.actions;
export default EducationSlice.reducer;
