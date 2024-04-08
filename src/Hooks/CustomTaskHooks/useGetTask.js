import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllTask } from "../../Redux/Slices/TaskSlice";

const useGetTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getAllTask = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || !token) {
        toast.error("Please Log In", { position: "bottom-left" });
        navigate("/");
        return;
      }
      const uid = user?.userId;
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/task/mytask/${uid}`,
        { headers: { Authorization: token } }
      );

      if (data.success) {
        dispatch(setAllTask(data.tasks));
      }
    } catch (error) {
      toast.error("Server Error", { position: "bottom-left " });
    }
  };

  return { getAllTask };
};

export default useGetTask;
