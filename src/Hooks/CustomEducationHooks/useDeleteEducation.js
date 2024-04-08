import axios from "axios";
import toast from "react-hot-toast";
import useGetAllEducation from "./useGetAllEducation";

const useDeleteEducation = () => {
  const { fetchEducationData } = useGetAllEducation();

  const deleteEducation = async (eid) => {
    try {
      if (!eid) {
        throw new Error("Please Provide ID");
      }
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const user = JSON.parse(localStorage.getItem("user"));
      const uid = user?.userId;
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/edu/${uid}/delete/${eid}`,
        {
          headers: { Authorization: token },
        }
      );

      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        fetchEducationData();
      } else {
        throw new Error(data.message || "Delete operation failed.");
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "bottom-left" });
    }
  };

  return {
    deleteEducation,
  };
};

export default useDeleteEducation;
