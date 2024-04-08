import React from "react";
import Layout from "../../Layout/Layout";
import { useSelector } from "react-redux";
import SideBar from "../DashBoardComponents/SideBar";
import MainHeader from "../DashBoardComponents/MainHeader";
import { Badge, Button } from "@chakra-ui/react";
import { LoginOptions } from "../../Data/LoginData/LoginOption";
import toast from "react-hot-toast";
import ProfileCardLogos from "../../Data/DashboardData/ProfileCardLogo";
import PersonalInfoModal from "../DashBoardComponents/PersonalInfoModal";
import Navigation from "../ResuableComponent/Navigation";
import EmptyImage from "../../Assets/ImageNotFound.png";
import { IoLogoLinkedin } from "react-icons/io5";
import ProfilePhotoModal from "../DashBoardComponents/ProfilePhotoModal";

const PersonalInfoPage = () => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const PersonalInfo = useSelector((store) => store.user.userPersonalInfo);

  return (
    <Layout
      title="Personal Info Page"
      keywords="personal,photo, mobileno, gender,linkedin link, intrests, info,data,seo,"
    >
      <div
        className="md:grid md:grid-cols-12 text-white min-h-svh"
        style={{ backgroundColor: currentPalette.secondary }}
      >
        <SideBar />
        <div className="md:col-span-11 p-3">
          <MainHeader />
          <div className="p-3">
            <Badge className="font-bold my-4 ">Personal Info</Badge>
            <div className="grid gap-3 md:grid-cols-10 ">
              <div className="md:col-span-3 relative">
                <div className="block  lg:hidden md:hidden xl:hidden">
                  <Navigation />
                </div>
                <div className="flex lg:justify-start   justify-end mb-2">
                  <ProfilePhotoModal prevState={PersonalInfo?.photoUrl} />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    className="h-52 rounded-md"
                    title="user Image"
                    src={PersonalInfo.photoUrl || EmptyImage}
                    alt="Personal Image"
                  />

                  <div className="absolute bottom-0 left-0 mb-2 ml-2">
                    <Button
                      size="sm"
                      leftIcon={<IoLogoLinkedin className="text-xl" />}
                    >
                      <a
                        alt="social links"
                        target="_blank"
                        href={PersonalInfo.linkedin}
                      >
                        Linkedin
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className="md:col-span-7 rounded-xl shadow-2xl me-7 "
                style={{ backgroundColor: currentPalette.primary }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start ">
                  <div className="flex flex-col px-6 pt-2 gap-1 justify-center items-start">
                    <div className="text-2xl capitalize font-bold">
                      {(PersonalInfo?.firstName || "Full ") + " "}
                      {PersonalInfo?.lastName || "Name "}
                    </div>{" "}
                    <div className="flex gap-1 items-center font-semibold">
                      <span className="text-md -mt-1">
                        {PersonalInfo?.headline || "Profession"}{" "}
                      </span>
                      <span className="text-[12px] capitalize">
                        {PersonalInfo?.gender === "Male"
                          ? ProfileCardLogos?.male
                          : PersonalInfo?.gender === "Female"
                          ? ProfileCardLogos?.female
                          : PersonalInfo?.gender === "Other"
                          ? ProfileCardLogos?.other
                          : " gender"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 text-[11px]">
                      <div className="flex gap-1 mt-2 items-center">
                        {" "}
                        {ProfileCardLogos?.call}{" "}
                        <span>
                          {PersonalInfo?.mobNumber || "+(91)-00000-00000"}
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        {" "}
                        {ProfileCardLogos?.location}{" "}
                        <span>{PersonalInfo?.city || "xxxx"}</span>
                      </div>
                      <div className="flex gap-1 items-center">
                        {" "}
                        {ProfileCardLogos?.email}{" "}
                        <span>{PersonalInfo?.email || "xxx@gmail.com"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block md:block xl:block">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-end p-1">
                        <PersonalInfoModal />
                      </div>
                      <div className="flex justify-end">
                        <Navigation size="4" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 pt-2">
                  <Badge fontSize="x-small">interests </Badge>
                  <div>
                    <b className="capitalize text-sm">
                      {PersonalInfo.interests || "No Interest Available"}
                    </b>
                  </div>
                  <Badge fontSize="x-small">About </Badge>
                  <div
                    className="p-1 m-1 rounded-md shadow-inner overflow-hidden h-16"
                    style={{
                      overflowY: "auto",
                    }}
                  >
                    <p className="text-sm overflow-hidden">
                      {PersonalInfo.about}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalInfoPage;
