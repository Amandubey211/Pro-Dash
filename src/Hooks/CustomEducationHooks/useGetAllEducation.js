import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setMyEducation } from "../../Redux/Slices/EducationSlice";
import { useNavigate } from "react-router-dom";

const useGetAllEducation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchEducationData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const uid = user?.userId;
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      if (!token || !uid) {
        navigate("/");
        throw new Error("No token found");
      }
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/edu/getall/${uid}`,
        {
          headers: { Authorization: token },
        }
      );
      if (data.success) {
        dispatch(setMyEducation(data.data));
      }
    } catch (error) {
      console.error("Error fetching education data:", error);
      toast.error("Something went wrong while fetching education data", {
        position: "bottom-left",
      });
    }
  };

  return {
    fetchEducationData,
  };
};

export default useGetAllEducation;
