import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../Utils/AuthHelper";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setIsSignedIn, setSignInLoading } from "../../Redux/Slices/AuthSlice";
import { setUserDetails } from "../../Redux/Slices/UserSlice";

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signIn = useCallback(
    async (email, password) => {
      if (!email || !password) {
        toast.error("Please fill all the required details", {
          position: "bottom-left",
        });
        return;
      }
      if (!validateEmail(email)) {
        toast.error("Email is invalid", { position: "bottom-left" });
        return;
      }
      if (!validatePassword(password)) {
        toast.error("Password is invalid", { position: "bottom-left" });
        return;
      }
      try {
        dispatch(setSignInLoading(true));
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_ORIGIN}/api/auth/signin`,
          { email, password }
        );
        if (data.success) {
          toast.success(data.message, { position: "bottom-left" });
          dispatch(setUserDetails(data.user));
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("jwt_Token", JSON.stringify(data.accessToken));
          localStorage.setItem(
            "refresh_Token",
            JSON.stringify(data.refreshToken)
          );

          navigate("/dash");
          dispatch(setIsSignedIn(true));
        } else {
          toast.error(data.message, { position: "bottom-left" });
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message, { position: "bottom-left" });
        } else {
          toast.error("An unexpected error occurred. Please try again later.", {
            position: "bottom-left ",
          });
        }
      } finally {
        dispatch(setSignInLoading(false));
      }
    },
    [dispatch, navigate]
  );
  return {
    signIn,
  };
};
export default useSignIn;
