import { Avatar } from "@chakra-ui/react";
import React from "react";
import { LoginOptions } from "../../Data/LoginData/LoginOption";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import ProfilePhotoModal from "./ProfilePhotoModal";
import { IoLogoLinkedin } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";

const ProfileImageSection = () => {
  const PersonalInfo = useSelector((state) => state.user.userPersonalInfo);
  const user = useSelector((state) => state.user.userDetails);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-1 p-1 relative">
      <div className="absolute top-0 left-0 z-20">
        <ProfilePhotoModal prevState={PersonalInfo?.photoUrl || null} />
      </div>
      <div className="flex justify-center p-1 relative">
        <Avatar
          size={{ base: "xl", md: "xl", lg: "2xl", sm: "xl" }}
          name={
            PersonalInfo?.firstName + PersonalInfo?.lastName || user?.userName
          }
          title="User Photo"
          src={PersonalInfo?.photoUrl}
        />
        <span className="absolute -bottom-1 left-1/3 transform -translate-x-1/2 ">
          <a
            href={PersonalInfo?.linkedin}
            target="_blank"
            title="Linkedin Link"
          >
            <IoLogoLinkedin className="lg:text-2xl text-lg z-10 text-blue-500 bg-white rounded-full" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProfileImageSection;
