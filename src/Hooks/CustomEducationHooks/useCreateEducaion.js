import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useGetAllEducation from "./useGetAllEducation";
import { useDispatch } from "react-redux";
import { setIsCreating } from "../../Redux/Slices/EducationSlice";

const useCreateEducation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fetchEducationData } = useGetAllEducation();
  const createEducation = async (Education) => {
    try {
      dispatch(setIsCreating(true));
      const {
        userId,
        institution,
        degree,
        fieldOfStudy,
        startYear,
        endYear,
        institutionLocation,
        GPA,
      } = Education;

      if (
        !userId ||
        !institution ||
        !institutionLocation ||
        !degree ||
        !fieldOfStudy ||
        !startYear ||
        !endYear ||
        !GPA
      ) {
        const missingFields = [];
        if (!userId) missingFields.push("userId");
        if (!institution) missingFields.push("institution");
        if (!institutionLocation) missingFields.push("institutionLocation");
        if (!degree) missingFields.push("degree");
        if (!fieldOfStudy) missingFields.push("fieldOfStudy");
        if (!startYear) missingFields.push("startYear");
        if (!endYear) missingFields.push("endYear");
        if (!GPA) missingFields.push("GPA");

        return toast.error(`Missing : ${missingFields.join(", ")} `, {
          position: "bottom-left",
        });
      }

      const user = JSON.parse(localStorage.getItem("user"));
      const uid = user?.userId;
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      if (!token || !uid) {
        navigate("/");
        throw new Error("No token found");
      }
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/edu/create/${uid}`,
        { Education },
        { headers: { Authorization: token } }
      );
      if (data.success) {
        toast.success("Education Created", { position: "bottom-left" });
        fetchEducationData();
      }
    } catch (error) {
      return toast.error("something went wrong", { position: "bottom-left" });
    } finally {
      dispatch(setIsCreating(false));
    }
  };

  return {
    createEducation,
  };
};

export default useCreateEducation;
