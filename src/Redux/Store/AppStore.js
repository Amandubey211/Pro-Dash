import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "../Slices/AuthSlice";
import UserSliceReducer from "../Slices/UserSlice";
import ThemeSliceReducer from "../Slices/ThemeSlice";
import TaskSliceReducer from "../Slices/TaskSlice";
import EducationSliceReducer from "../Slices/EducationSlice";
import ProjectSliceReducer from "../Slices/ProjectSlice";
import ExperienceSliceReducer from "../Slices/ExperienceSlice";
import AwardSliceReducer from "../Slices/AwardSlice";
const AppStore = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    user: UserSliceReducer,
    themes: ThemeSliceReducer,
    task: TaskSliceReducer,
    education: EducationSliceReducer,
    project: ProjectSliceReducer,
    experience: ExperienceSliceReducer,
    award: AwardSliceReducer,
  },
});

export default AppStore;
