import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserStats } from "../../Redux/Slices/UserSlice";

const useGetStats = () => {
  const allTaskData = useSelector((state) => state.task.allTaskData);
  const dispatch = useDispatch();

  useEffect(() => {
    const calculateStats = () => {
      let totalCompletedTasks = 0;
      let totalDueTasks = 0;
      let totalProgressPercentage = 0;
      let totalTasks = allTaskData?.length;

      allTaskData?.forEach((task) => {
        if (task?.completionStatus) {
          totalCompletedTasks++;
        } else {
          totalDueTasks++;
        }

        totalProgressPercentage += task?.progressPercentage;
      });

      const avgCompletionRate =
        totalTasks > 0 ? totalProgressPercentage / totalTasks : 0;
      const overallCompletionPercentage =
        totalTasks > 0 ? (totalCompletedTasks / totalTasks) * 100 : 0;

      const userStats = {
        avgCompletionRate,
        totalCompletedTasks,
        totalDueTasks,
        overallCompletionPercentage,
      };

      dispatch(setUserStats(userStats)); // Dispatch action to update userStats in Redux store
    };

    calculateStats();
  }, [allTaskData, dispatch]);

  return null; // Return null since we are dispatching an action and not returning anything
};

export default useGetStats;
