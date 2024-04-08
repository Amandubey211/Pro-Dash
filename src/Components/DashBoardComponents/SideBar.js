import React from "react";
import { TbLogout } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { Avatar, Button, Portal, Tooltip } from "@chakra-ui/react";
import useSignOut from "../../Hooks/CustomAuthHooks/useSignOut.js";
import { useDispatch, useSelector } from "react-redux";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { FcEngineering } from "react-icons/fc";
import ThemeColors from "../../Data/ThemeData/ThemeColors.js";
import { selectPalette } from "../../Redux/Slices/ThemeSlice.js";
import toast from "react-hot-toast";
const SideBar = () => {
  const { signOut } = useSignOut();
  const currentPalette = useSelector(
    (store) => store.themes.palettes[store.themes.currentPalette]
  );
  const currentTheme = useSelector((store) => store.themes.currentPalette);
  const dispatch = useDispatch();
  const PersonalInfo = useSelector((state) => state.user.userPersonalInfo);
  const user = useSelector((store) => store.user.userDetails);
  return (
    <div
      style={{ backgroundColor: currentPalette.primary }}
      className={`lg:col-span-1 md:col-span-1 md:block  hidden    lg:block p-1`}
    >
      <div className="flex justify-center">
        <div className="flex flex-col  h-full lg:fixed  left-8 py-3 gap-4 justify-between items-center">
          <div className="flex flex-col gap-5  mt-6">
            <NavLink to="/dash" title="dashboard page">
              <Avatar
                size="xs"
                name={user?.userName}
                src={PersonalInfo?.photoUrl}
              />{" "}
            </NavLink>
            <NavLink title="dashboard">
              <BsPeople
                onClick={() =>
                  toast.success("Planning to add more functionality", {
                    position: "bottom-left",
                  })
                }
                className="text-xl"
              />
            </NavLink>

            <Popover placement="right-end">
              <PopoverTrigger>
                <button>
                  <FcEngineering
                    title="theme"
                    className="text-xl cursor-pointer"
                  />
                </button>
              </PopoverTrigger>

              <Portal>
                <PopoverContent
                //  bg={currentPalette.primary}
                >
                  <PopoverArrow />
                  <PopoverHeader>
                    <div className="text-center font-bold">
                      Choose Theme Color
                    </div>
                  </PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <div className="flex gap-2 justify-center items-center">
                      {ThemeColors.map((data) => {
                        return (
                          <div
                            key={data.id}
                            className="flex gap-1 justify-center items-center flex-col"
                          >
                            <button
                              onClick={() => {
                                dispatch(selectPalette(data.palette));
                                toast.success(
                                  `Palette set to "${data.palette}"`,
                                  { position: "bottom-left" }
                                );
                              }}
                              className={` h-9 w-8 hover:border-blue-700 border-2 rounded-lg ${
                                data.palette === currentTheme &&
                                "scale-125  border-black border-2"
                              } `}
                              style={{ backgroundColor: `${data.color}` }}
                            ></button>
                            <span className="text-[9px]">{data.palette}</span>
                          </div>
                        );
                      })}
                    </div>
                  </PopoverBody>
                  <PopoverFooter>
                    {" "}
                    <div className="text-red-500 text-center">
                      {" "}
                      Optimizing it soon
                    </div>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </div>
          <Tooltip
            size="xs"
            hasArrow
            bg={currentPalette.accent}
            label="Log Out"
          >
            <button
              type="button"
              className="hover:cursor-pointer"
              onClick={signOut}
            >
              <TbLogout type="" onClick={signOut} className="text-lg" />
            </button>
          </Tooltip>
        </div>{" "}
      </div>
    </div>
  );
};

export default SideBar;
