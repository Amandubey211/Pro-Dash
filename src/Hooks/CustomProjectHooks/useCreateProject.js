import axios from "axios";
import toast from "react-hot-toast";
import useGetAllProject from "./useGetAllProjects";
import uploadFile from "../../Utils/ImageUploader";
import { useDispatch } from "react-redux";
import { setIsProjectCreating } from "../../Redux/Slices/ProjectSlice";

const useCreateProject = () => {
  const { getAllProject } = useGetAllProject();
  const dispatch = useDispatch();
  const createProject = async (project) => {
    const { photo, projectPhotoURL, ...rest } = project;

    try {
      dispatch(setIsProjectCreating(true));
      const requiredFields = [
        "userId",
        "title",
        "skillsUsed",
        "role",
        "startDate",
        "endDate",
        "description",
        "createdBy",
        "size",
        "progressPercentage",
      ];
      const missingFields = requiredFields.filter((field) => !rest[field]);
      if (missingFields.length > 0) {
        return toast.error(`Missing: ${missingFields.join(", ")}`, {
          position: "bottom-left",
        });
      }

      const photoURL = await uploadFile(photo);

      const newProject = {
        ...rest,
        projectPhotoURL: photoURL || "",
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/project/create`,
        newProject
      );

      if (data.success) {
        toast.success("Project Created Successfully", {
          position: "bottom-left",
        });
        getAllProject();
      } else {
        toast.error("Failed to create project. Please try again later.", {
          position: "bottom-left",
        });
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("An unexpected error occurred. Please try again later.", {
        position: "bottom-left",
      });
    } finally {
      dispatch(setIsProjectCreating(false));
    }
  };
  return {
    createProject,
  };
};
export default useCreateProject;
