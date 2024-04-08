import axios from "axios";
import toast from "react-hot-toast";
const uploadFile = async (asset, type) => {
  const data = new FormData();
  data.append("file", asset);

  if (type === "personal") {
    // Add background removal option
    // data.append("background_removal", "auto:remove_background");
    data.append("upload_preset", "ProfileImage");
  } else {
    data.append("upload_preset", "Pro-Dash");
  }

  if (!asset) return;
  try {
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/image/upload`,
      data
    );
    return res?.data?.secure_url;
  } catch (error) {
    toast.error("Error In Uploading ");
    return null;
  }
};

export default uploadFile;
