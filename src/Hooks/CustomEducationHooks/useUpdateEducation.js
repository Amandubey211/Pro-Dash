import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useGetAllEducation from "./useGetAllEducation";
import { useDispatch } from "react-redux";
import { setIsUploading } from "../../Redux/Slices/EducationSlice";

const useUpdateEducation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fetchEducationData } = useGetAllEducation();
  const updateEducation = async (Education, eid) => {
    try {
      dispatch(setIsUploading(true));
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

      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      if (!eid) {
        throw new Error("No taskId found");
      }
      if (!token) {
        navigate("/");
        throw new Error("No token found");
      }
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
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/edu/${uid}/update/${eid}`,
        { Education },
        {
          headers: { Authorization: token },
        }
      );
      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        fetchEducationData();
      }
    } catch (error) {
      toast.error("Something went Wrong ");
    } finally {
      dispatch(setIsUploading(false));
    }
  };

  return {
    updateEducation,
  };
};

export default useUpdateEducation;
