import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setUserProfileCompletnessPercentage,
  setUserProfileMissing,
} from "../../Redux/Slices/UserSlice";

const useGetProfileCompletness = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const calculatePercentage = (completeness, maxCompleteness) => {
    return (completeness / maxCompleteness) * 100;
  };

  const getProfileCompletness = async (userId) => {
    try {
      const token = JSON.parse(localStorage.getItem("jwt_Token"));

      if (!userId || !token) {
        toast.error("Please Log In", { position: "bottom-left" });
        navigate("/");
      }
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/user/stats/${userId}`,
        { headers: { Authorization: token } }
      );
      if (data.success) {
        const profilePercentage = calculatePercentage(
          data?.profileStat?.completeness,
          data?.profileStat?.outOf
        );
        dispatch(setUserProfileCompletnessPercentage(profilePercentage));
        dispatch(setUserProfileMissing(data.profileStat.incompleteData));
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "bottom-left" });
    }
  };

  return {
    getProfileCompletness,
  };
};

export default useGetProfileCompletness;
