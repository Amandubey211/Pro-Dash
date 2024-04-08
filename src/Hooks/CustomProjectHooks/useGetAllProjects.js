import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllProject } from "../../Redux/Slices/ProjectSlice";

const API_BASE_URL = "${process.env.REACT_APP_BACKEND_ORIGIN}/api";

const useGetAllProject = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const AllTaskData = useSelector((store) => store.project.allProject);
  const getAllProject = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || !token) {
        navigate("/");
        return toast.error("Please Log In", { position: "bottom-left" });
      }

      const uid = user?.userId;
      // const url = `${API_BASE_URL}/project/user/${uid}`;

      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/project/user/${uid}`,
        {
          headers: { Authorization: token },
        }
      );

      if (data.success) {
        dispatch(setAllProject(data?.data));
      } else {
        toast.error(data.message, { position: "bottom-left" });
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Server Errddor", { position: "bottom-left" });
    }
  };

  return { getAllProject };
};

export default useGetAllProject;
