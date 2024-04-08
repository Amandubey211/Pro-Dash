import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
  name: "project",
  initialState: {
    allProject: [],
    isProjectCreating: false,
    isProjectUpdating: false,
    isProjectDeleteing: false,
  },
  reducers: {
    setAllProject: (state, action) => {
      state.allProject = action.payload;
    },
    setIsProjectCreating: (state, action) => {
      state.isProjectCreating = action.payload;
    },
    setIsProjectUpdating: (state, action) => {
      state.isProjectUpdating = action.payload;
    },
    setIsProjectDeleting: (state, action) => {
      state.isProjectDeleteing = action.payload;
    },
  },
});

export const {
  setAllProject,
  setIsProjectUpdating,
  setIsProjectCreating,
  setIsProjectDeleting,
} = ProjectSlice.actions;

export default ProjectSlice.reducer;
