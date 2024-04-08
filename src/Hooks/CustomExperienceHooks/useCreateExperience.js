import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useGetExperience from "./useGetExperience";
import { useDispatch } from "react-redux";
import { setIsExperienceCreating } from "../../Redux/Slices/ExperienceSlice";

const useCreateExperience = () => {
  const navigate = useNavigate();
  const { getExperience } = useGetExperience();
  const dispatch = useDispatch();

  const createExperience = async (Experience) => {
    try {
      dispatch(setIsExperienceCreating(true));
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
      //   const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const uid = userId;
      if (!token || !uid) {
        navigate("/");
        return toast.error("Please Log In", { position: "bottom-left" });
      }

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/experience/create/${uid}`,
        { Experience },
        { headers: { Authorization: token } }
      );

      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        getExperience();
      }
    } catch (error) {
      console.error(
        "error occured during the creation of the experience ",
        error
      );
      toast.error("Something went wrong", { position: "bottom-left" });
    } finally {
      dispatch(setIsExperienceCreating(false));
    }
  };

  return { createExperience };
};

export default useCreateExperience;
