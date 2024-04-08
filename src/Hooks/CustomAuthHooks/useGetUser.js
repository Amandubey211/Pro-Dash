import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../Redux/Slices/UserSlice";
import toast from "react-hot-toast";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useGetUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserDetails = useSelector((store) => store.user.userDetails);
  const getUser = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      if (!user || !user.userId || !token) {
        navigate("/");
        return;
      }
      const uid = user?.userId;

      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/user/${uid}`,
        { headers: { Authorization: token } }
      );

      if (data.success) {
        dispatch(setUserDetails(data.user));
        // toast.success(data.message,  { position: "bottom-left" });
      } else {
        navigate("/");
        throw new Error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Something went wrong", { position: "bottom-left" });
    }
  }, [dispatch]);

  useEffect(() => {
    if (!UserDetails.id) {
      getUser().catch((error) => {
        console.error("Error fetching user details:", error);
        toast.error("Failed to fetch user details", {
          position: "bottom-left",
        });
        navigate("/");
      });
    }
  }, [getUser, UserDetails, navigate]);

  // No need to return anything from the custom hook
};

export default useGetUser;
