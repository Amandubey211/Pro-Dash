import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setIsTaskCreating, setTaskData } from "../../Redux/Slices/TaskSlice";
import { useNavigate } from "react-router-dom";
import useGetTask from "./useGetTask";

const useCreateTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getAllTask } = useGetTask();

  const createTask = async (task) => {
    try {
      dispatch(setIsTaskCreating(true));

      const token = localStorage.getItem("jwt_Token");

      if (!token) {
        navigate("/");
        throw new Error("No token found");
      }
      const { userId, title, description, taskPriority, dueDate } = task;
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

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/task/createtask`,
        { task },
        {
          headers: {
            Authorization: token,
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
      console.error(error);
      toast.error(error.message || "Something went wrong", {
        position: "bottom-left",
      });
    } finally {
      dispatch(setIsTaskCreating(false));
    }
  };

  return { createTask };
};

export default useCreateTask;
