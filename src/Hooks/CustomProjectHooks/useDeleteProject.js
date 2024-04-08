import axios from "axios";
import useGetAllProject from "./useGetAllProjects";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setIsProjectDeleting } from "../../Redux/Slices/ProjectSlice";

const useDeleteProject = () => {
  const { getAllProject } = useGetAllProject();
  const dispatch = useDispatch();
  const deleteProject = async (pid) => {
    try {
      dispatch(setIsProjectDeleting(true));
      if (!pid) {
        return toast.error("Please provide Id", { position: "bottom-left" });
      }
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/project/delete/${pid}`,
        {
          headers: { Authorization: token },
        }
      );
      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        getAllProject();
      }
    } catch (error) {
      toast.error("something went wrong", { position: "bottom-left" });
    } finally {
      dispatch(setIsProjectDeleting(false));
    }
  };

  return {
    deleteProject,
  };
};

export default useDeleteProject;
