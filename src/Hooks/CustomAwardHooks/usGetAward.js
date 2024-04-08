import axios from "axios"; // Assuming axios is installed and imported
import toast from "react-hot-toast"; // Assuming toast is imported correctly
import { useNavigate } from "react-router-dom";
import { setMyAwards } from "../../Redux/Slices/AwardSlice";
import { useDispatch } from "react-redux";
const useGetAward = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getAllAward = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const uid = user?.userId;
      if (!uid || !token) {
        toast.error("Please Log In", { position: "bottom-left" });
        return navigate("/");
      }
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/awards/${uid}`,
        { headers: { Authorization: token } }
      );
      if (data.success) {
        dispatch(setMyAwards(data.awards));
      }
    } catch (error) {
      console.error("error in fetching the award :", error);
      toast.error("Something went wrong", { position: "bottom-left" });
    }
  };

  return {
    getAllAward,
  };
};

export default useGetAward;
