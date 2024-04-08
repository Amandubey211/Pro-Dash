import axios from "axios"; // Assuming axios is installed and imported
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // Assuming toast is imported correctly
import { setAwardIsCreating } from "../../Redux/Slices/AwardSlice";
import { useDispatch } from "react-redux";
import useGetAward from "./usGetAward";
const useCreateAward = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getAllAward } = useGetAward();
  const createAward = async (Award) => {
    try {
      dispatch(setAwardIsCreating(true));
      const {
        role,
        companyOrInstitute,
        certification,
        grade,
        userId,
        description,
        dateReceived,
      } = Award; // Fixed typo: changed Achivement to Award

      if (
        !role ||
        !companyOrInstitute ||
        !certification ||
        !grade ||
        !userId ||
        !dateReceived
      ) {
        const missingFields = [];
        if (!userId) missingFields.push("userId");
        if (!role) missingFields.push("role");
        if (!companyOrInstitute) missingFields.push("companyOrInstitute");
        if (!certification) missingFields.push("certification");
        if (!grade) missingFields.push("grade");
        if (!dateReceived) missingFields.push("dateReceived");

        return toast.error(`Missing: ${missingFields.join(", ")} `, {
          position: "bottom-left",
        });
      }
      const token = JSON.parse(localStorage.getItem("jwt_Token"));

      if (!token) {
        navigate("/");
        throw new Error("No token found");
      }
      const uid = userId;

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/awards/create/${uid}`,
        { Award },
        { headers: { Authorization: token } }
      );
      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        getAllAward();
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "bottom-left" });
    } finally {
      dispatch(setAwardIsCreating(false));
    }
  };

  return {
    createAward,
  };
};

export default useCreateAward;
