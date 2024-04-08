import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserDetails } from "../../Redux/Slices/UserSlice";

const useSignOut = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const signOut = () => {
    localStorage.removeItem("jwt_Token");
    localStorage.removeItem("user");
    localStorage.removeItem("refresh_Token");
    dispatch(setUserDetails({}));
    Navigate("/");
    toast.success("SignOut Successfully", { position: "bottom-left" });
  };

  return {
    signOut,
  };
};

export default useSignOut;
