import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsSignedIn } from "../../Redux/Slices/AuthSlice";

const useAutomaticLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch the cookie from document.cookie
    // const getCookie = (name) => {
    //   const cookieValue = document.cookie
    //     .split("; ")
    //     .find((cookie) => cookie.startsWith(name + "="));
    //   if (cookieValue) {
    //     console.log("yes cooke");
    //   } else {
    //     console.log("no cookie");
    //   }
    //   return cookieValue ? cookieValue.split("=")[1] : null;
    // };

    // // Retrieve the 'aman' cookie
    // const cookieValue = getCookie("aman");
    // console.log(cookieValue);

    const loginWithToken = async (token) => {
      try {
        if (!token) {
          throw new Error("No token found");
        }
        const user = JSON.parse(localStorage.getItem("user"));
        const uid = user?.userId;
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_ORIGIN}/api/auth/verify/${uid}`,
          { token }
        );

        if (data?.success) {
          // Dispatch user details if needed
          dispatch(setIsSignedIn(true));
          navigate("/dash");
        } else {
          throw new Error("Invalid token");
        }
      } catch (error) {
        console.log("no token"); // navigate("/");
      } finally {
        setLoading(false);
      }
    };

    const token = JSON.parse(localStorage.getItem("jwt_Token"));
    if (!token) return;
    loginWithToken(token);
  }, [navigate, dispatch]);
};

export default useAutomaticLogin;
