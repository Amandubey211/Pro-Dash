import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
    userPersonalInfo: {},
    userProfileCompletnessPercentage: 5,
    userProfileMissing: [],
    userStats: {
      avgCompletionRate: null, // Average completion rate of tasks
      totalCompletedTasks: null, // Total count of completed tasks
      totalDueTasks: null, // Total count of due tasks
      overallCompletionPercentage: null, // Overall completion percentage of tasks
    },

    isLoading: false,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },

    setUserPersonalInfo: (state, action) => {
      state.userPersonalInfo = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUserProfileCompletnessPercentage: (state, action) => {
      state.userProfileCompletnessPercentage = action.payload;
    },
    setUserProfileMissing: (state, action) => {
      state.userProfileMissing = action.payload;
    },
    setUserStats: (state, action) => {
      state.userStats = action.payload;
    },
  },
});

export const {
  setUserDetails,
  setUserPersonalInfo,
  setUserProfileMissing,
  setIsLoading,
  setUserStats,
  setUserProfileCompletnessPercentage,
} = userSlice.actions;
export default userSlice.reducer;
