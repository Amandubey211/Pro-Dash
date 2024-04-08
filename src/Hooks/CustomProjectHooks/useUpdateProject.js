import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useGetAllProject from "./useGetAllProjects";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

import uploadFile from "../../Utils/ImageUploader";
import { setIsProjectUpdating } from "../../Redux/Slices/ProjectSlice";

const useUpdateProject = () => {
  const navigate = useNavigate();
  const { getAllProject } = useGetAllProject();
  const dispatch = useDispatch();

  const updateProject = async (project, projectId) => {
    try {
      const { photo, projectPhotoURL, ...rest } = project;

      const url = await (photo
        ? uploadFile(photo)
        : Promise.resolve(projectPhotoURL));

      dispatch(setIsProjectUpdating(true));

      const token = localStorage.getItem("jwt_Token");
      if (!projectId || !token) {
        navigate("/");
        throw new Error("Please Log in");
      }

      const requiredFields = [
        "userId",
        "title",
        "skillsUsed",
        "startDate",
        "endDate",
        "description",
        "createdBy",
        "role",
      ];
      const missingFields = requiredFields.filter((field) => !project[field]);
      if (missingFields.length > 0) {
        throw new Error(`Missing: ${missingFields.join(", ")}`);
      }

      const updatedProject = { ...rest, projectPhotoURL: url };

      await Promise.all([
        axios.put(
          `${process.env.REACT_APP_BACKEND_ORIGIN}/api/project/update/${projectId}`,
          { updatedProject },
          { headers: { Authorization: token } }
        ),
      ]);

      getAllProject();
      toast.success("Project updated successfully,", {
        position: "bottom-left",
      });
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error(error.message || "Something went wrong", {
        position: "bottom-left",
      });
    } finally {
      dispatch(setIsProjectUpdating(false));
    }
  };

  return {
    updateProject,
  };
};

export default useUpdateProject;
