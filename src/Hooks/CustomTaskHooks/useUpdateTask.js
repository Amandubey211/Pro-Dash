import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetTask from "./useGetTask";
import { setIsTaskCreating, setTaskData } from "../../Redux/Slices/TaskSlice";
import axios from "axios";

const useUpdateTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getAllTask } = useGetTask();
  const updateTask = async (task, tid) => {
    try {
      dispatch(setIsTaskCreating(true));

      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      if (!tid) {
        throw new Error("No taskId found");
      }
      if (!token) {
        navigate("/");
        throw new Error("No token found");
      }
      const { userId, title, description, taskPriority, dueDate, progress } =
        task;
      if (!userId || !title || !description || !taskPriority || !dueDate) {
        const missingFields = [];
        if (!userId) missingFields.push("userId");
        if (!title) missingFields.push("title");
        if (!description) missingFields.push("description");
        if (!taskPriority) missingFields.push("taskPriority");
        if (!dueDate) missingFields.push("dueDate");

        return toast.error(`Missing : ${missingFields.join(", ")} `, {
          position: "bottom-left",
        });
      }

      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/task/updatemytask/${tid}`,
        { task }, // Request body object
        {
          headers: {
            Authorization: token, // Headers object
            "Content-Type": "application/json", // Optional content type
          },
        }
      );

      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        getAllTask();
      } else {
        toast.error(data.message, { position: "bottom-left" });
      }
    } catch (error) {
      toast.error("something went wrong", { position: "bottom-left" });
    } finally {
      dispatch(setIsTaskCreating(false));
    }
  };

  return {
    updateTask,
  };
};

export default useUpdateTask;
