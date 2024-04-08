import axios from "axios";
import toast from "react-hot-toast";
import useGetTask from "./useGetTask";
import { useDispatch } from "react-redux";
import { setIsTaskDeleting } from "../../Redux/Slices/TaskSlice";

const useDeleteTask = () => {
  const { getAllTask } = useGetTask();
  const dispatch = useDispatch();
  const deletTask = async (tid) => {
    try {
      dispatch(setIsTaskDeleting(true));
      if (!tid) {
        return toast.error("Please provide Id");
      }
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/task/delete/${tid}`,
        {
          headers: { Authorization: token },
        }
      );
      if (data.success) {
        toast.success(data.message);
        getAllTask();
      }
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      dispatch(setIsTaskDeleting(false));
    }
  };
  return {
    deletTask,
  };
};

export default useDeleteTask;
