import axios from "axios";
import toast from "react-hot-toast";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../Utils/AuthHelper";
import { useDispatch } from "react-redux";

import { useCallback } from "react";
import { setIsLoginPage, setSignUpLoading } from "../../Redux/Slices/AuthSlice";

const useSignUp = () => {
  const dispatch = useDispatch();
  const signUp = useCallback(
    async (userName, email, password) => {
      // Validation

      if (!userName || !email || !password) {
        toast.error("Please fill all the required details", {
          position: "bottom-left ",
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

      if (!validateUsername(userName)) {
        toast.error("Username is invalid", { position: "bottom-left" });
        return;
      }

      try {
        // Sending signup request
        dispatch(setSignUpLoading(true));
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_ORIGIN}/api/auth/signup`,
          {
            userName,
            email,
            password,
          }
        );

        // Handling response
        if (data.success) {
          toast.success(data.message, { position: "bottom-left" });

          dispatch(setIsLoginPage(true));
        } else {
          toast.error(data.message, { position: "bottom-left" });
        }
      } catch (error) {
        // Error handling
        if (error.response) {
          toast.error(error.response.data.message, { position: "bottom-left" });
        } else {
          toast.error("An unexpected error occurred. Please try again later.", {
            position: "bottom-left ",
          });
        }
      } finally {
        dispatch(setSignUpLoading(false));
      }
    },
    [dispatch]
  );

  return {
    signUp,
  };
};

export default useSignUp;
