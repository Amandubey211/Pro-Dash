import axios from "axios";
import toast from "react-hot-toast";
import useGetAward from "./usGetAward";
import { useDispatch } from "react-redux";
import { setAwardIsUpdating } from "../../Redux/Slices/AwardSlice";

const useUpdateAward = () => {
  const { getAllAward } = useGetAward();
  const dispatch = useDispatch();
  const updateAward = async (Award, eid) => {
    try {
      dispatch(setAwardIsUpdating(true));
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

      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/awards/${uid}/update/${eid}`,
        { Award },
        { headers: { Authorization: token } }
      );
      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        getAllAward();
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      dispatch(setAwardIsUpdating(false));
    }
  };

  return {
    updateAward,
  };
};

export default useUpdateAward;
