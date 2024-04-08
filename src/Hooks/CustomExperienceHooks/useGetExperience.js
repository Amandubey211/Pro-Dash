import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllExperience } from "../../Redux/Slices/ExperienceSlice";

const useGetExperience = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getExperience = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const user = JSON.parse(localStorage.getItem("user"));
      const uid = user?.userId;
      if (!token || !uid) {
        navigate("/");
        return toast.error("Please Log In");
      }

      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/experience/${uid}`,
        { headers: { Authorization: token } }
      );
      if (data.success) {
        dispatch(setAllExperience(data.allExperiences));
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "bottom-left" });
    }
  };

  return {
    getExperience,
  };
};

export default useGetExperience;
