import { createSlice } from "@reduxjs/toolkit";

const ExperienceSlice = createSlice({
  name: "experience",
  initialState: {
    allExperience: [],
    isExperienceCreating: false,
    isExperienceUpdating: false,
    isExperienceDeleteing: false,
  },
  reducers: {
    setAllExperience: (state, action) => {
      state.allExperience = action.payload;
    },
    setIsExperienceCreating: (state, action) => {
      state.isExperienceCreating = action.payload;
    },
    setIsExperienceUpdating: (state, action) => {
      state.isExperienceUpdating = action.payload;
    },
    setIsExperienceDeleting: (state, action) => {
      state.isExperienceDeleteing = action.payload;
    },
  },
});

export const {
  setAllExperience,
  setIsExperienceCreating,
  setIsExperienceDeleting,
  setIsExperienceUpdating,
} = ExperienceSlice.actions;

export default ExperienceSlice.reducer;
