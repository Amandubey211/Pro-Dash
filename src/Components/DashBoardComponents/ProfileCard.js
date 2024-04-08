import { Button, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import ProfileCardLogos, {
  ProfileLinkLogo,
} from "../../Data/DashboardData/ProfileCardLogo.js";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import PersonalInfoModal from "./PersonalInfoModal.js";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import ProfileImageSection from "./ProfileImageSection.js";
import Navigation from "../ResuableComponent/Navigation.js";

const ProfileCard = () => {
  const [copied, setCopied] = useState(false);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const PersonalInfo = useSelector((state) => state.user.userPersonalInfo);
  const handleCopy = () => {
    if (!PersonalInfo.firstName)
      return toast.error("No Info", { position: "bottom-left" });
    setCopied(true);

    const textToCopy = `Name: ${PersonalInfo.firstName} ${PersonalInfo.lastName}  an ${PersonalInfo.headline}  Mobile No: ${PersonalInfo.mobNumber} Email:${PersonalInfo.email} lives in ${PersonalInfo.city}  Linkedin Profile ${PersonalInfo.linkedin} About ${PersonalInfo.about} `;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Task Copied", { position: "bottom-left" });
        const timeoutId = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timeoutId);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };
  return (
    <div
      style={{ backgroundColor: currentPalette.primary }}
      className="grid grid-cols-10 ps-3 px-1 pb-1  shadow-2xl rounded-xl lg:rounded-2xl  gap-1  "
    >
      <div className="lg:col-span-2 md:col-span-2 col-span-3  pt-3   ">
        <ProfileImageSection />
      </div>
      <div className="lg:col-span-4  md:col-span-4 col-span-6 ms-3 ">
        <div className="flex flex-col  p-2 gap-1 justify-center items-start">
          <div className="flex gap-1  items-center">
            <div className="lg:text-2xl text-md capitalize font-bold">
              {(PersonalInfo?.firstName || "First ") + " "}
              {PersonalInfo?.lastName || "Last "}
            </div>{" "}
            <div className="text-md font-bold capitalize mt-1">
              {PersonalInfo?.gender === "Male"
                ? ProfileCardLogos?.male
                : PersonalInfo?.gender === "Female"
                ? ProfileCardLogos?.female
                : PersonalInfo?.gender === "Other"
                ? ProfileCardLogos?.other
                : ProfileCardLogos?.male}
            </div>
          </div>

          <div className="flex gap-1 items-center lg:font-semibold">
            <span className="lg:text-md text-xs -mt-1  ">
              {PersonalInfo?.headline || "Profession"}{" "}
            </span>
          </div>
          <div className="flex flex-col gap-1 mt-2  text-[11px] ">
            <div className="flex gap-1  items-center  ">
              {" "}
              {ProfileCardLogos?.location}{" "}
              <span>{PersonalInfo?.city || "Loaction"}</span>
            </div>
            <div className="flex gap-1   items-center  ">
              {" "}
              {ProfileCardLogos?.call}{" "}
              <span>{PersonalInfo?.mobNumber || "+(91)-00000 00000"}</span>
            </div>

            <div className="flex gap-1  items-center  ">
              {" "}
              {ProfileCardLogos?.email}{" "}
              <span>{PersonalInfo?.email || "xxx@gmail.com"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1   lg:p-1 ">
        <div
          // style={{ backgroundColor: currentPalette.accent }}
          className={`flex lg:rounded-2xl rounded-lg h-full py-2   flex-col items-center justify-start  gap-2   bg-[${currentPalette.accent}]`}
        >
          <PersonalInfoModal />
          <Tooltip label={copied ? "Copied!" : "Copy Info"}>
            <Button size="xs" onClick={handleCopy}>
              {copied ? <FaCopy /> : <FaRegCopy />}
            </Button>
          </Tooltip>

          <div className="block lg:hidden md:hidden xl:hidden">
            <Popover>
              <PopoverTrigger>
                <Button size="xs">
                  <GrAppsRounded />
                </Button>
              </PopoverTrigger>
              <PopoverContent backgroundColor={currentPalette?.primary}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Navigation />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      {/* // will come back here */}
      <div className="col-span-3 lg:block md:block hidden p-1  ">
        <div
          style={{ backgroundColor: currentPalette.accent }}
          className="flex flex-wrap justify-center items-center shadow-2xl rounded-2xl p-3  gap-3 "
        >
          {ProfileLinkLogo?.map((data) => {
            return (
              <div
                className="flex flex-col md:gap-1 items-center"
                key={data.name}
              >
                <NavLink
                  title={data?.name}
                  to={`/${data?.name}`}
                  key={data?.name}
                  style={{ backgroundColor: currentPalette.accent2 }}
                  className="border shadow-md hover:shadow-2xl rounded-lg transform hover:scale-110 transition-transform duration-300 p-1"
                >
                  <Tooltip label={data?.name}>
                    <span className="lg:text-3xl text-xl">{data?.logo}</span>
                  </Tooltip>
                </NavLink>
                <span className="text-[7px] capitalize">{data?.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
