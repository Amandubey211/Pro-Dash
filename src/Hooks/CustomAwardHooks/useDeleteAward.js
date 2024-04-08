import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useGetAward from "./usGetAward";
import { useDispatch } from "react-redux";
import { setAwardIsDeleting } from "../../Redux/Slices/AwardSlice";
const useDeleteAward = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getAllAward } = useGetAward();
  const deleteAward = async (aid) => {
    try {
      dispatch(setAwardIsDeleting(true));
      if (!aid) {
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
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/awards/${uid}/delete/${aid}`,
        {
          headers: { Authorization: token },
        }
      );

      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        getAllAward();
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "bottom-left" });
    } finally {
      dispatch(setAwardIsDeleting(false));
    }
  };

  return {
    deleteAward,
  };
};

export default useDeleteAward;
