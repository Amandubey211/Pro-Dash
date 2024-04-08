import axios from "axios";
import toast from "react-hot-toast";
import useGetExperience from "./useGetExperience";
import { useDispatch } from "react-redux";
import { setIsExperienceUpdating } from "../../Redux/Slices/ExperienceSlice";

const useUpdateExperience = () => {
  const { getExperience } = useGetExperience();
  const dispatch = useDispatch();
  const updateExperience = async (Experience, eid) => {
    try {
      dispatch(setIsExperienceUpdating(true));
      const {
        company,
        role,
        startDate,
        userId,
        endDate,
        skillsUsed,
        description,
      } = Experience;
      if (
        !company ||
        !role ||
        !startDate ||
        !endDate ||
        !userId ||
        !skillsUsed ||
        !description
      ) {
        const missingFields = [];
        if (!userId) missingFields.push("userId");
        if (!company) missingFields.push("company");
        if (!startDate) missingFields.push("startDate");
        if (!endDate) missingFields.push("endDate");
        if (!company) missingFields.push("company");
        if (!role) missingFields.push("role");
        if (!description) missingFields.push("description");

        return toast.error(`Missing : ${missingFields.join(", ")} `);
      }
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const uid = userId;
      if (!token || !uid || !eid) {
        navigate("/");
        return toast.error("Please Log In", { position: "bottom-left" });
      }

      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/experience/${uid}/update/${eid}`,
        { Experience },
        { headers: { Authorization: token } }
      );
      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        getExperience();
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "bottom-left" });
    } finally {
      dispatch(setIsExperienceUpdating(false));
    }
  };

  return {
    updateExperience,
  };
};

export default useUpdateExperience;
