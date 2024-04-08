import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useGetExperience from "./useGetExperience";
import { useDispatch } from "react-redux";
import { setIsExperienceDeleting } from "../../Redux/Slices/ExperienceSlice";

const useDeleteExperience = () => {
  const navigate = useNavigate();
  const { getExperience } = useGetExperience();
  const dispatch = useDispatch();
  const deleteExperience = async (eid) => {
    try {
      dispatch(setIsExperienceDeleting(true));
      if (!eid) {
        throw new Error("Please Provide ID");
      }
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const uid = user?.userId;
      if (!token || !uid) {
        navigate("/");
        return toast.error("Please Log In", { position: "bottom-left" });
      }

      const { data } = await axios.delete(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/experience/${uid}/delete/${eid}`,
        {
          headers: { Authorization: token },
        }
      );

      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        getExperience();
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "bottom-left" });
    } finally {
      dispatch(setIsExperienceDeleting(false));
    }
  };

  return {
    deleteExperience,
  };
};

export default useDeleteExperience;
