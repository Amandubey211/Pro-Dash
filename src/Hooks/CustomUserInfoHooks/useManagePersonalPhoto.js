import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadFile from "../../Utils/ImageUploader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserPersonalInfo } from "../../Redux/Slices/UserSlice";

const useManagePersonalPhoto = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const PersonalInfo = useSelector((store) => store.user.userPersonalInfo);
  const managePersonalPhoto = async (photo) => {
    try {
      if (!PersonalInfo.firstName) {
        return toast.error("Please fill the details first", {
          position: "bottom-left",
        });
      }
      const token = JSON.parse(localStorage.getItem("jwt_Token"));
      const uid = JSON.parse(localStorage.getItem("user"))?.userId;
      if (!uid) {
        toast.error("Please Log In", { position: "bottom-left" });
        navigate("/");
        return;
      }
      if (!photo) return;
      const photoUrl = await uploadFile(photo, "personal");
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_ORIGIN}/api/info/photo/${uid}`,
        { photoUrl },
        { headers: { Authorization: token } }
      );
      if (data.success) {
        toast.success(data.message, { position: "bottom-left" });
        dispatch(setUserPersonalInfo(data.updatedProfile));
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "bottom-left" });
    }
  };
  return {
    managePersonalPhoto,
  };
};

export default useManagePersonalPhoto;
