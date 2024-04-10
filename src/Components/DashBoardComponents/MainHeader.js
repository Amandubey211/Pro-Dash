import { Button, Tooltip } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { HeaderLogos } from "../../Data/DashboardData/HeaderLogos.js";
import useGetUser from "../../Hooks/CustomAuthHooks/useGetUser.js";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  CircularProgress,
  CircularProgressLabel,
  useDisclosure,
} from "@chakra-ui/react";
import ThemeComponent from "../ResuableComponent/ThemeComponent.js";
import StatsBody from "../DrawerBody/StatsBody.js";
import { TbLogout } from "react-icons/tb";
import useSignOut from "../../Hooks/CustomAuthHooks/useSignOut.js";
const MainHeader = () => {
  useGetUser();
  const User = useSelector((store) => store.user.userDetails);
  const [timeOfDay, setTimeOfDay] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const PersonalInfo = useSelector((state) => state.user.userPersonalInfo);
  const ProfileCompletness = useSelector(
    (store) => store.user.userProfileCompletnessPercentage
  );
  const { signOut } = useSignOut();
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      setTimeOfDay("morning");
    } else if (currentTime < 17) {
      setTimeOfDay("afternoon");
    } else if (currentTime < 20) {
      setTimeOfDay("evening");
    } else {
      setTimeOfDay("night"); // Otherwise, set time of day to night
    }
  }, []);

  return (
    <div className=" flex justify-between items-center  w-full  lg:px-5  pb-3 lg:pb-1  md:pb-2">
      <div className="flex  gap-2   items-center">
        <div className="lg:text-4xl  text-3xl ">
          {timeOfDay === "morning"
            ? HeaderLogos.morning
            : timeOfDay === "afternoon"
            ? HeaderLogos.afterNoon
            : timeOfDay === "evening"
            ? HeaderLogos.evening
            : HeaderLogos.night}
        </div>
        <div className="flex flex-col  items-start  ">
          <span className="font-bold lg:text-lg text-sm  capitalize">
            <span className="text-md">
              {timeOfDay === "morning"
                ? "Good Morning, "
                : timeOfDay === "afternoon"
                ? "Good Afternoon,"
                : timeOfDay === "evening"
                ? "Good Evening,"
                : "Good Night,"}
            </span>
            <span className="lg:text-lg text-sm"> {User?.userName}</span>
          </span>
          <span className="text-[10px] mt-[-3px] font-semibold">
            lets see how are you doing
          </span>
        </div>
      </div>
      <div className="flex justify-end gap-1 md:gap-2 items-center ">
        <div className="block lg:hidden md:hidden xl:hidden">
          <Tooltip label="Theme">
            <ThemeComponent mobile={true} />
          </Tooltip>
        </div>
        <div className="hidden lg:block md:block xl:block">
          <Tooltip hasArrow label="Alerts">
            <Button
              size={{ base: "xs", md: "sm", lg: "sm", sm: "xs" }}
              title="alerts"
              onClick={() =>
                toast.success("will be added soon", {
                  position: "bottom-left ",
                })
              }
            >
              {HeaderLogos.notification}
            </Button>
          </Tooltip>
        </div>

        <div className="block md:hidden lg:hidden xl:hidden">
          <CircularProgress
            color="green.400"
            size="3rem"
            title="Stats"
            value={ProfileCompletness}
          >
            <CircularProgressLabel>
              <Avatar
                ref={btnRef}
                onClick={onOpen}
                size="xs"
                alt="Profile Picture"
                aria-label="stats"
                name={PersonalInfo?.firsName}
                src={PersonalInfo?.photoUrl}
              />{" "}
            </CircularProgressLabel>
          </CircularProgress>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            zIndex={5} // Adjust the z-index here
          >
            <DrawerOverlay />
            <DrawerContent
              color="white"
              backgroundColor={currentPalette.secondary}
            >
              <DrawerCloseButton />
              <DrawerHeader>Progress Report</DrawerHeader>

              <DrawerBody>
                <StatsBody />
              </DrawerBody>

              <DrawerFooter display="flex" justifyContent="space-between">
                <Tooltip
                  size="xs"
                  hasArrow
                  bg={currentPalette.accent}
                  label="Log Out"
                >
                  <button
                    type="button"
                    title="signOut"
                    className="hover:cursor-pointer"
                    onClick={signOut}
                  >
                    <TbLogout type="" onClick={signOut} className="text-lg" />
                  </button>
                </Tooltip>
                <Button title="close" onClick={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
