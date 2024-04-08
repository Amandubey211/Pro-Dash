import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserPersonalInfo } from "../../Redux/Slices/UserSlice";

const useGetUserPersonalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getPersonalInfo = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const uid = user?.userId;
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      if (!token || !uid) {
        toast.error("No user found", { position: "bottom-left" });
        navigate("/");
        return;
      }

      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/info/${uid}`,
        { headers: { Authorization: token } }
      );

      if (data.success) {
        dispatch(setUserPersonalInfo(data.userInfo));
      }
    } catch (error) {
      console.info("Error fetching user information:");
    }
  };

  return { getPersonalInfo };
};

export default useGetUserPersonalInfo;
