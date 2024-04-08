import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
  name: "task",
  initialState: {
    isTaskCreating: false,
    isTaskDeleting: false,
    allTaskData: [],
  },
  reducers: {
    setIsTaskCreating: (state, action) => {
      state.isTaskCreating = action.payload;
    },

    setAllTask: (state, action) => {
      state.allTaskData = action.payload;
    },
    setIsTaskDeleting: (state, action) => {
      state.isTaskDeleting = action.payload;
    },
  },
});

export const { setIsTaskCreating, setAllTask, setIsTaskDeleting } =
  TaskSlice.actions;
export default TaskSlice.reducer;
