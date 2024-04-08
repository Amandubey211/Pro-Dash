import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  setIsLoading,
  setUserPersonalInfo,
} from "../../Redux/Slices/UserSlice.js";
import { validateEmail, validateMobileNumber } from "../../Utils/AuthHelper.js";
import useGetUserPersonalInfo from "./useGetUserPersonalInfo.js";

const useManagePersonalInfo = () => {
  const dispatch = useDispatch();
  const { getProfileCompletness } = useGetUserPersonalInfo();
  const validateFields = (personalInfo) => {
    const requiredFields = [
      "firstName",
      "lastName",
      "mobNumber",
      "city",
      "email",
      "gender",
      "headline",
    ];
    const missingFields = requiredFields.filter(
      (field) => !personalInfo[field]
    );

    if (missingFields.length > 0) {
      toast.error(`Missing fields: ${missingFields.join(", ")}`, {
        position: "bottom-left ",
      });
      return false;
    }

    if (!validateEmail(personalInfo.email)) {
      toast.error("Invalid email format", { position: "bottom-left " });
      return false;
    }

    if (!validateMobileNumber(personalInfo.mobNumber)) {
      toast.error("Invalid Number format", { position: "bottom-left " });
      return false;
    }

    return true;
  };

  const managePersonalInfo = async (personalInfo) => {
    try {
      dispatch(setIsLoading(true));

      if (!validateFields(personalInfo)) return;

      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const user = JSON.parse(localStorage.getItem("user"));
      const uid = user?.userId;
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/info/manage/${uid}`,
        { personalInfo },
        { headers: { Authorization: token } }
      );

      if (data?.success) {
        toast.success(data?.message, { position: "bottom-left" });
        dispatch(setUserPersonalInfo(data?.userInfo));
        getProfileCompletness(uid);
      } else {
        toast.error(message, { position: "bottom-left" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", { position: "bottom-left" });
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return { managePersonalInfo };
};

export default useManagePersonalInfo;
